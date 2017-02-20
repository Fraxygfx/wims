/*
$Id: LeftAssocPrefixedUnaryOperatorLayout.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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
* This layout manager lays prefixed unary operators.<BR>
* Basically, unary + and unary - because these operators have the particularity to select the operand located
* to its left when selected.
*
* @author � 1999 DIRAT Laurent
* @version 2.0  13/12/1999
*/
public abstract class LeftAssocPrefixedUnaryOperatorLayout extends UnaryOperatorLayout {
    /**
    * Do we have to select the display to the left of the one the instance lays ?
    */
    private boolean selectLeftDisplay;
    
    /**
    * Returns <CODE>true</CODE> if during the selection, the display which is located
    * to the left of the display that the instance lays, must be selected too.
    * <CODE>false</CODE> otherwise.
    */
    public boolean selectLeftDisplay() {
        // On est dans les op�rateurs unaires, donc si le display tout entier
        // est s�lectionn�, alors cela revient � avoir s�lectionn� l'op�rateur,
        // et donc il faut s�lectionner le display de gauche dans la liste de 
        // display de son p�re.
        if (displayToLay.isSelected())
            return selectLeftDisplay;
        else
            return false;
    }    
    
    /**
    * Sets if the display to the left of that laid by the instance have to be selected
    * or not.
    * @param selectLeftDisplay <CODE>true</CODE> if the left display have to be selected.
    * <CODE>false</CODE> otherwise.
    */
    public void setSelectLeftDisplay(boolean selectLeftDisplay) {
        this.selectLeftDisplay = selectLeftDisplay;
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si le display de l'op�rateur ou si le display de l'op�rande est
        // s�lectionn�, on s�lectionne tout le display.
        Display op = (Display) displayToLay.getComponent(0);
        Display opRand = (Display) displayToLay.getComponent(1);
        if (op.isSelected() || opRand.isSelected()) {
            
            selectLeftDisplay = op.isSelected() ? true : false;
            
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
            selectLeftDisplay = false;
            father.deselect();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
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
}
