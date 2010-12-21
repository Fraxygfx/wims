/*
$Id: SlotLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.openmath.jome.ctrlview.bidim.DisplayLayout;
import fr.ove.openmath.jome.ctrlview.bidim.Display;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.SelectionEvent;
import fr.ove.openmath.jome.model.*;

/**
* A layout manager that lays the display of a slot.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 22/07/1999
*/
public class SlotLayout extends DisplayLayout {
    /**
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        updateLevel(displayToLay.getLevel());
        
        Display display = (Display) displayToLay.getComponent(0);
        display.setSize(display.getPreferredSize());
        int width = display.getShiftX() + display.getWidth();
        int height = display.getShiftY() + display.getHeight();

        displayToLay.setAscent(display.getShiftY() + display.getAscent());
        displayToLay.setDescent(height - display.getAscent());
        
        displayToLay.setSize(width , height);
        displayToLay.setComputeAttributes(false);
        
        return new Dimension(width , height);
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        Display childDisplay = (Display) displayToLay.getComponent(0);
        if (childDisplay.isSelected()) {
            displayToLay.setSelected();
            SelectionEvent selEvt = new SelectionEvent(displayToLay);
            // On purge la liste des �l�ments s�lectionn�s.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute notre puissance.
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }
        
        // Puisque le slot n'est juste qu'un display ne poss�dant aucune propri�t� particuli�re,
        // sa s�lection est automatiquement valide, on regarde au niveau de son p�re.
        Display display = displayToLay;
        if (display.getParent() instanceof Display) {
            display = (Display) display.getParent();
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null) // Si fts est la racine de la formule alors la s�lection � d�j� �t� valid�e
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
        
        if (father.isSelected()) {
            father.setNotSelected();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
        
            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                //if (!(display.getListener() instanceof Formula))
                FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
                if (fts.getFather() != null) // Si fts est la racine de la formule alors la d�s�lection � d�j� �t� valid�e
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
   
    // #################################################
    // ### Impl�mentation des diff�rentes interfaces ###
    // #################################################

    // ***************************************************
    // *** Impl�mentation de l'interface LayoutManager ***


    /*
     * Lays out the container in the specified panel.
     * @param parent the component which needs to be laid out
     */
     public void layoutContainer(Container parent) {
        // Ca c'est parce que c'est le layout manager de la formule. Et comme personne ne dit au container
        // contenant la formule, que la taille de la formule a besoin d'�tre recalcul�e, il faut bien le
        // faire qque part. Chaque display informe son p�re qu'il doit �tre recalcul�, mais la formule ne
        // le fait pas pour le sien.
        parent.setSize(parent.getPreferredSize());

        Display display = (Display) parent.getComponent(0);
        display.setSize(display.getPreferredSize());
        display.setLocation(display.getShiftX(), display.getShiftY());

        // On place maintenant les �ventuels display enfants du display courant
        display.doLayout();
    }

    // *** Fin de l'interface LayoutManager ***
    // ****************************************
}
