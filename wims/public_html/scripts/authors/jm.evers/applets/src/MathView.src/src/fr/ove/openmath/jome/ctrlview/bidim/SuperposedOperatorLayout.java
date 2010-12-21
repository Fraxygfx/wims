/*
$Id: SuperposedOperatorLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.utils.FontInfo;

/**
* Layout manager that lays the display of an operator whose symbol is superposed to its operand.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 15/12/1999
*/
public abstract class SuperposedOperatorLayout extends VerticalCenteredLayout implements OperatorDisplayCreator {
    /**
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        // C'est strictement la m�me chose, sauf que VerticalCenteredLayout place l'ascent comme �tant la moiti�
        // de la hauteur du display. Or dans le cas qui nous occupe, l'ascent du display doit ce trouver sur celui
        // de l'op�rande
        Dimension dim = super.computeAttributes();
    
        displayToLay.setAscent(((Display) displayToLay.getComponent(0)).getShiftY() +
                  ((Display) displayToLay.getComponent(0)).getHeight() + 
                  ((Display) displayToLay.getComponent(1)).getShiftY() +
                  ((Display) displayToLay.getComponent(1)).getAscent());
                  
        displayToLay.setDescent(displayToLay.getHeight() - displayToLay.getAscent());
    
        return dim;
    }
    
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
        
        // On r�cup�re le fts associ� (listener) au display.
        FormulaTreeStructure fts = (FormulaTreeStructure) displayToLay.getListener();
        
        Display displayOperator = createOperatorDisplay();
        
        // On met un listener � l'op�rateur.
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        displayOperator.addControlListener(fts);
        
        // On ajoute le display d'op�rateur en premi�re position
        // A priori, display ne contient rien, donc un add(displayOperator) suffit.
        this.displayToLay.add(displayOperator);
        
        this.displayToLay.computeAncestorsAttributes();
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si l'op�rateur est sl�ectionn�, alors on s�lectionne tout.
        Display displayOperator = (Display) displayToLay.getComponent(0);
        if (displayOperator.isSelected()) {
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
        
        // Si l'op�rateur est s�lectionn�, alors il faut le d�selectionner.
        if (father.isSelected()) {
            father.setNotSelected();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
            Display displayOperator = (Display) displayToLay.getComponent(0);
            Display argument = (Display) displayToLay.getComponent(1);
            
            if (display == displayOperator) {
                displayOperator.setNotSelected();
                selEvt.setAction(SelectionEvent.ADD, argument);
                father.fireSelectionEvent(selEvt);
            }
            else {
                displayOperator.setNotSelected();
                argument.deselect();
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
    * The display needs to be rebuilt. We do this.
    */
    public void rebuildDisplay() {
        // La taille des displays est probablement diff�rente de ceux qui �taient
        // pr�c�demment. On demande alors le recalcul des display anc�tres.
        displayToLay.computeAncestorsAttributes();
    }
}
