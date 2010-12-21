/*
$Id: DifferentiationLayout.java,v 1.3 2003/02/18 11:48:46 sander Exp $
*/


/*
Copyright (C) 2001-2002 Mainline Project (I3S - ESSI - CNRS -UNSA)

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

For further information on the GNU Lesser General Public License,
see: http://www.gnu.org/copyleft/lesser.html
For further information on this library, contact: mainline@essi.fr
*/


package fr.ove.openmath.jome.ctrlview.bidim;

import java.awt.*;
import fr.ove.openmath.jome.ctrlview.bidim.*;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.SelectionEvent;
import fr.ove.openmath.jome.model.*;

/**
* A layout manager that lays components for the denominator of a differentiation.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 15/10/1999
*/
public class DifferentiationLayout extends HorizontalLayout {
    private boolean arrangeDisplay = true; // Au premier calcul, il faudra arranger les displays correctement
    private Display fracDisplay = null;
    
    /**
    * According to the operator, the layout manager has to add some components (e.g. brackets, ...)
    * or has to perform some "re-oganisation" before rendering.<BR>
    * As soon as the layout manager is set to the display, this mehtod MUST be called with the display laid out
    * as parameter. This method serves as well as a registering method. So all sub-classes of the instance MUST
    * call super.initDisplay(displayToLay).
    * @param displayToLay the display laid by the instance
    */
    public void initDisplay(Display displayToLay) {
        super.initDisplay(displayToLay);
        
        Differentiation diff = (Differentiation) this.displayToLay.getListener();
        diff.computeOrder();
        
        // Allocation d'un display, qui va correspondre � la partie fraction de la repr�sentation
        fracDisplay = new BidimDisplay(displayToLay.getGraphicContext());
        // On met un listener � fracDisplay
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        fracDisplay.addControlListener(diff);
        // On lui met dont un FractionLayout
        FractionLayout layout = new FractionLayout();
        layout.initDisplay(fracDisplay);
        fracDisplay.setLayout(layout);
        // On l'ajoute comme fils � display
        this.displayToLay.add(fracDisplay);
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        Display derivator = (Display) displayToLay.getComponent(0);
        Display func = (Display) displayToLay.getComponent(1);
        // Si le display de ce qui est la partie fraction de la d�riv�e (derivator) est s�lectionn�e,
        // alors on s�lectionne tout.
        // Si la function et d�rivator ont qque chose de s�lectionn�, alors on s�lectionne tout.
        if (derivator.isSelected() || (func.gotSelectedElements() && derivator.gotSelectedElements())) {
            displayToLay.select();
            // On purge la liste des �l�ments s�lectionn�s.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute l'instance dans la liste des s�lectionn�s
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }
        
        // On a v�rifi� la validit� de la s�lection de l'op�rateur. On doit maitenant
        // la contr�ler au niveau sup�rieur, au niveau du p�re.
        Display display = displayToLay;
        if (displayToLay.getParent() instanceof Display) {
            display = (Display) displayToLay.getParent();
            //if (!(display.getListener() instanceof Formula))
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null)
                ((DisplayLayout) display.getLayout()).validateSelection();
        }

        // On met � jour l'affichage.
        display.repaint();
    }
    
    /**
    * Checks the validity of the deselection.
    * @param display the display to deselect.
    */
    public void validateDeselection(Display display) {
        // father est le display de l'op�rateur unaire.
        Display father = displayToLay;
        Display tmp;
        SelectionEvent selEvt = new SelectionEvent(father);
        
        // Si l'op�rateur en entier est s�lectionn�, il faut le d�s�lectionner
        if (father.isSelected()) {
            father.deselect();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
            // Si display est l'op�rateur (on vient de d�selectionner l'op�rateur), alors
            // on ajoute l'op�rande dans la liste des s�lectionn�s.
            if (display == displayToLay.getComponent(0)) {
                ((Display) displayToLay.getComponent(1)).select();
                selEvt.setAction(SelectionEvent.ADD, (Display) displayToLay.getComponent(1));
                father.fireSelectionEvent(selEvt);
            }                
            
            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                //((DisplayLayout) father.getLayout()).validateDeselection((Display) display.getParent());
                if (!(father.getListener() instanceof Formula))
                    ((DisplayLayout) father.getLayout()).validateDeselection(displayToLay);
            }
            
            // H� oui, on contr�le la validit� de la s�lection... dans une d�s�lection.
            // Toujours le m�me pb, est-ce que le nouvel �tat de la s�lection (apr�s
            // d�s�lection donc) est syntaxiquement coh�rent ?
            validateSelection();
            
            // On met � jour l'affichage.
            father.repaint();
        }        
    }
        
    
    /**
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        VarDiffLayout varDiffLayout;
        updateLevel(displayToLay.getLevel());
        
        //if (arrangeDisplay) {
        if (displayToLay.getComponentCount() > 3) {
            // Dans l'ordre, displayToLay contient [fracDisplay, numFrac, fct, var1, var2, ...]
            // Il faut mettre numFrac, comme fils de fracDisplay (qui � ce stade ne contient que le display
            // de la barre de fraction.
            // Il faut creer un display avec comme layout DenominatorDiffLayout, et y ajouter tous les vari.
            // Ensuite, ajouter ce display � fracDisplay.
            // On obtient donc displayToLay = [fracDisplay, fct]
            // avec fracDisplay = [barDisplay, numFrac, [var1, var2, ...]]
            // Le display de chacun des vari est en fait le display d'un slot. On remplace le SlotLayout, par
            // un VarDiffLayout, pour que le "d" (ou le delta) soit rajout� devant.
            
            Display d;
            d = (Display) displayToLay.getComponent(1);
            // fracDisplay.add(d) appelle un displayToLay.remove(d).
            // remove(d), enl�ve �galement d de la liste des listeners de l'objet (fts) qu'il �coutait.
            // Ce qu'on ne veut pas, puisqu'il s'agit d'un simple d�placement de display. 
            d.setDoRemoveFromListListeners(false);
            fracDisplay.add(d);
            d.setDoRemoveFromListListeners(true);
            //displayToLay contient [fracDisplay, fct, var1, var2, ...]
            int count = displayToLay.getComponentCount();
            Differentiation diff = (Differentiation) displayToLay.getListener();
            if (count == 3) {
                // Ca veut dire que l'on a une d�riv�e du premier ordre : [fracDisplay, fct, var1]
                // On a juste � mettre le display de var1 dans fracDisplay
                d = (Display) displayToLay.getComponent(2);
                // On modifie le layout, qui doit �tre un slotLayout, par un VarDiffLayout.
                varDiffLayout = new VarDiffLayout(diff.isPartial());
                varDiffLayout.initDisplay(d);
                d.setLayout(varDiffLayout);
                // fracDisplay.add(d) appelle un displayToLay.remove(d).
                // remove(d), enl�ve �galement d de la liste des listeners de l'objet (fts) qu'il �coutait.
                // Ce qu'on ne veut pas, puisqu'il s'agit d'un simple d�placement de display. 
                d.setDoRemoveFromListListeners(false);
                fracDisplay.add(d);
                d.setDoRemoveFromListListeners(true);
            }
            else {
                // Ca veut dire que l'on a une d�riv�e d' ordre > 1 : [fracDisplay, fct, var1, var2, ...]
                // Il faut cr�er un display pour le d�nominateur
                Display den = new BidimDisplay(displayToLay.getGraphicContext());
                // On met un listener � den
                // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
                // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
                // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
                // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
                // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
                // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
                // d'op�rateur.
                den.addControlListener(diff);
                
                DenominatorDiffLayout denLayout = new DenominatorDiffLayout();
                denLayout.initDisplay(den);
                den.setLayout(denLayout);
                
                for (int i = 2; i < displayToLay.getComponentCount(); ) {
                    d = (Display) displayToLay.getComponent(i);
                    // On modifie le layout, qui doit �tre un slotLayout, par un VarDiffLayout.
                    varDiffLayout = new VarDiffLayout(diff.isPartial());
                    varDiffLayout.initDisplay(d);
                    d.setLayout(varDiffLayout);
                    // den.add(d) appelle un displayToLay.remove(d).
                    // remove(d), enl�ve �galement d de la liste des listeners de l'objet (fts) qu'il �coutait.
                    // Ce qu'on ne veut pas, puisqu'il s'agit d'un simple d�placement de display. 
                    d.setDoRemoveFromListListeners(false);
                    den.add(d);
                    // On remet le comportement de suppression par d�fault.
                    d.setDoRemoveFromListListeners(true);
                }
                // On ajoute maintenant le d�nominateur dans fracDisplay
                fracDisplay.add(den);
            }
        }        
        
        // On a donc displayToLay = [fracDisplay, fct]
        // avec fracDisplay = [barDisplay, numFrac, [var1, var2, ...]]
        ((Display) displayToLay.getComponent(1)).setShiftX(5);
        Dimension dim = super.computeAttributes();
        
        return new Dimension(dim.width + 5, dim.height);
    }
    
    /**
    * The display needs to be rebuilt. We do this.
    */
    public void rebuildDisplay() {
        // La taille des displays est probablement diff�rente de ceux qui �taient
        // pr�c�demment. On demande alors le recalcul des display anc�tres.
        displayToLay.computeAncestorsAttributes();
    }

}
