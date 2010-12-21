/*
$Id: ScriptLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.openmath.jome.ctrlview.bidim.Display;
import fr.ove.openmath.jome.ctrlview.bidim.DisplayLayout;
import fr.ove.openmath.jome.ctrlview.bidim.HorizontalLayout;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.SelectionEvent;
import fr.ove.openmath.jome.model.*;

/**
* A layout manager that lays components horyzontally, but the last one in the
* list, is treated as a superscript or an underscript in the inherited classes.
* (There is a shift calculated)
*
* @author � 1999 DIRAT Laurent
* @version 2.0 19/07/1999
*/
public abstract class ScriptLayout extends HorizontalLayout {
    /**
    * Updates the level of the display that is layed out.<BR>
    * @param level the level put to the display
    */
    public void updateLevel(int level) {
        Display tmp;
        
        // Pour �viter de refaire le calcul plusieurs fois....
        if (displayToLay.getUpdateLevel()) {
            // On met le niveau ad�quat
            displayToLay.setLevel(level);
            // On scale le display en fonction du niveau
            displayToLay.scaleDisplay();
            // On n'a plus besoin de mettre � jour le niveau de l'instance
            displayToLay.setUpdateLevel(false);
            
            // Le premier display fils poss�de le m�me niveau que son p�re.
            tmp = (Display) displayToLay.getComponent(0);
            ((DisplayLayout) tmp.getLayout()).updateLevel(level);
            
            // Le deuxi�me display fils poss�de le m�me niveau que la base + 1.
            // (on applique une r�duction de taille)
            tmp = (Display) displayToLay.getComponent(1);
            ((DisplayLayout) tmp.getLayout()).updateLevel(level+1);
        }
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si un des �l�ments de la puissance est s�lectionn�, alors la s�lection
        // de l'autre �l�ment entra�ne la s�lection de toute la puissance.
        Display base = (Display) displayToLay.getComponent(0);
        Display script = (Display) displayToLay.getComponent(1);
        if (base.gotSelectedElements() && script.gotSelectedElements()) {
            displayToLay.select();
            // On purge la liste des �l�ments s�lectionn�s.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute notre puissance.
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }
        
        // On a v�rifi� la validit� de la s�lection de la puissance. On doit maitenant
        // la contr�ler au niveau sup�rieur, au niveau du p�re.
        // Ex : on a l'expression A+B^C et on a A d�j� s�lectionn�. On s�lectionne C.
        // D'un pt de vue s�mantique (oui, on va dire �a comme �a) A et C ne peuvent
        // �tre s�lectionn�s s�par�ment. Tout doit �tre s�lectionn�. Et �a, c'est la 
        // validation de la s�lection qui va le d�terminer. oufff....
        Display display = displayToLay;
        if (displayToLay.getParent() instanceof Display) {
            display = (Display) displayToLay.getParent();
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null) // Si fts n'est pas la racine de la formule, on valide la s�lection
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
        Display tmp;
        SelectionEvent selEvt = new SelectionEvent(displayToLay);
        
        if (displayToLay.isSelected()) {
            // On d�s�lectionne la puissance
            displayToLay.setNotSelected();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
            
            // Si la puissance toute enti�re �tait s�lectionn�e, donc pr�sente dans la liste
            // des �l�ments s�lectionn�. Ce n'est pas le cas de la base et de l'exposant.
            // Donc en fonction de cela, il faut y ajouter l'�l�ment ad�quat
            if (((Display) displayToLay.getComponent(0)).isSelected())
                // On a demand� la d�s�lection en cliquant sur l'exposant, ce qui revient
                // � s�lectionner uniquement la base.
                // On l'ajoute donc dans la liste des display s�lectionn�s.
                selEvt.setAction(SelectionEvent.ADD, (Display) displayToLay.getComponent(0));
            else
                // On a demand� la d�s�lection en cliquant sur la base, ce qui revient
                // � s�lectionner uniquement l'exposant.
                // On l'ajoute donc dans la liste des display s�lectionn�s.
                selEvt.setAction(SelectionEvent.ADD, (Display) displayToLay.getComponent(1));

            displayToLay.fireSelectionEvent(selEvt);

            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            Display father = displayToLay;
            if (displayToLay.getParent() instanceof Display) {
                father = (Display) displayToLay.getParent();
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
        Display tmp;
        Display base = null;
        Display script = null;
        // On parcourre la liste des displays pour trouver qui est qui.
        for (int i = 0; i < 2; i++) {
            tmp = (Display) displayToLay.getComponent(i);
            // On fait les initialisations qui s'imposent pour le bon repositionnement de chacun.
            tmp.setLocation(0,0);
            if (((FormulaTreeStructure) tmp.getListener()).getRank() == 0)
                base = tmp;
            else 
                script = tmp;
        }
        // On a retrouv� qui est qui, on reconstruit le display pour tout mettre
        // � la bonne position.
        displayToLay.removeAllDisplays();
        displayToLay.add(base);
        displayToLay.add(script);
        // La taille des displays est probablement diff�rente de ceux qui �taient
        // pr�c�demment. On demande alors le recalcul des display anc�tres.
        displayToLay.computeAncestorsAttributes();
    }
}
