/*
$Id: BetweenOperatorLayout.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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
* Layout manager that lays the display of an operator whose symbol is located between its 2 operands.<BR>
* Rendering is done vertically, the first operand on top, the symbol in the middle and the second operand
* under the 2 previous.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 15/12/1999
*/
public abstract class BetweenOperatorLayout extends VerticalCenteredLayout implements OperatorDisplayCreator {
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
        Display operatorDisplay = createOperatorDisplay();

        // On met un listener au display de l'op�rateur
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        operatorDisplay.addControlListener((FormulaTreeStructure) displayToLay.getListener());
        this.displayToLay.add(operatorDisplay);
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si les 2 op�randes sont s�lectionn�s, ou si le symbole de l'op�rateur est s�lectionn�,
        // alors on s�lectionne tout.
        Display operatorDisplay = (Display) displayToLay.getComponent(0);
        Display operand1 = (Display) displayToLay.getComponent(1);
        Display operand2 = (Display) displayToLay.getComponent(2);
        if ((operand1.gotSelectedElements() && operand2.gotSelectedElements()) ||
            (operatorDisplay.isSelected())) {
            // S�lectionne le display.
            displayToLay.select();
            // On purge la liste des �l�ments s�lectionn�s.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute os parenth�ses
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }

        // On a v�rifi� la validit� de la s�lection de la puissance. On doit maitenant
        // la contr�ler au niveau sup�rieur, au niveau du p�re.
        Display display = displayToLay;
        if (display.getParent() instanceof Display) {
            display = (Display) display.getParent();
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
        Display father = displayToLay;
        SelectionEvent selEvt = new SelectionEvent(father);
        
        // Si la fraction est s�lectionn�e, alors il faut la d�selectionner.
        if (father.isSelected()) {
            father.setNotSelected();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
            Display operatorDisplay = (Display) father.getComponent(0);
            Display operand1 = (Display) father.getComponent(1);
            Display operand2 = (Display) father.getComponent(2);
            
            if (display == operand1) {
                operatorDisplay.setNotSelected();
                selEvt.setAction(SelectionEvent.ADD, operand2);
                father.fireSelectionEvent(selEvt);
            }
            else if (display == operand2) {
                operatorDisplay.setNotSelected();
                selEvt.setAction(SelectionEvent.ADD, operand1);
                father.fireSelectionEvent(selEvt);
            }
            else {
                operand1.deselect();
                operatorDisplay.setNotSelected();
                operand2.deselect();
            }

            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                FormulaTreeStructure fts = (FormulaTreeStructure) father.getListener();
                if (fts.getFather() != null)
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
        Display displayOperator = (Display) displayToLay.getComponent(0);
        Display topOperand = (Display) displayToLay.getComponent(1);
        Display bottomOperand = (Display) displayToLay.getComponent(2);
        // Initialisation de ces param�tres pour annuler les (�ventuelles) pr�c�dentes valeurs prises.
        displayOperator.setShiftY(0);
        topOperand.setShiftY(0);
        bottomOperand.setShiftY(0);

        // On calcule les attributs des display enfants comme si on avait affaire � un VerticalCenteredLayout.
        // La diff�rece r�side dans le fait qu'il faut faire en sorte que le display de l'op�rateur soit affich�
        // entre les op�randes
        Dimension dim = super.computeAttributes(); 
        

        // Cette taille l� correspond au d�calage qu'il faut appliquer � la barre de fraction
        displayOperator.setShiftY(topOperand.getHeight());
        // Mais il faut l'enlever au display du num�rateur
        topOperand.setShiftY(-displayOperator.getShiftY() - displayOperator.getHeight());
        bottomOperand.setShiftY(displayOperator.getHeight());
        
        // On met la baseline de la fraction sur celle de la barre de fraction + qque broutilles qui
        // correspondent � o� se trouve la barre horizontale du +
        int ascent = displayToLay.getFontMetrics(displayToLay.getFont()).getAscent();
        ascent = (int) Math.round(((float) ascent)*0.388f);
        
        ascent += topOperand.getShiftY() + topOperand.getHeight() + 
                 displayOperator.getShiftY() + displayOperator.getAscent();
        
        displayToLay.setAscent(ascent);
        displayToLay.setDescent(dim.height - ascent);
        
        displayToLay.setComputeAttributes(false);
        
        return dim;
    }
    
    /**
    * The display needs to be rebuilt. We do this.
    */
    public void rebuildDisplay() {
        Display tmp;
        Display listDisplay[] = new Display[2];
        
        for (int i = 1; i <= 2; i++) {
            tmp = (Display) displayToLay.getComponent(i);
            tmp.setLocation(0,0);
            listDisplay[((FormulaTreeStructure) tmp.getListener()).getRank()] = tmp;
        }
        
        // On garde un r�f�rence sur le display du symbole l'op�rateur
        tmp = (Display) displayToLay.getComponent(0);
        // On fait en sorte que temporairement ce display ne soit pas consid�r� comme un
        // display d'op�rateur, sinon il serait supprim� de la liste des listeners de la fts,
        // chose qu'on ne veut pas puisque qu'on va le remettre � sa place.
        tmp.setIsSymbolOperatorDisplay(false);
        
        // ATTENTION : ici, on enl�ve les displays fils de display, mais on ne les enl�ve pas de la liste
        // des listeners de la fts qu'il sont en train d'�couter.
        displayToLay.removeAllDisplays();
        
        // On remet tmp comme �tant un display d'op�rateur
        tmp.setIsSymbolOperatorDisplay(true);
        // On le rajoute dans displayToLay � sa position (la premi�re)
        displayToLay.add(tmp);
                
        for (int i = 0; i < 2; i++)
            displayToLay.add(listDisplay[i]);
        
        // La taille des displays est probablement diff�rente de ceux qui �taient
        // pr�c�demment. On demande alors le recalcul des display anc�tres.
        displayToLay.computeAncestorsAttributes();
    }
}
