/*
$Id: BasicStringInfixOperatorLayout.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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
import java.util.*;
import fr.ove.openmath.jome.ctrlview.bidim.*;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.*;
import fr.ove.openmath.jome.model.*;

/**
* A layout manager for an infix operator which symbol can be rendered as a string (e.g. +, *)
*
* @author � 1999 DIRAT Laurent
* @version 2.0  14/12/1999
*/
public class BasicStringInfixOperatorLayout extends StringInfixOperatorLayout {    
    /**
    * Inserts, if necessary, a display of the operator symbol that the display
    * laid by the instance represents.
    */
    protected void insertOperatorDisplay() {
        Display current, next, displayOperator;
        FormulaTreeStructure fatherFts = (FormulaTreeStructure) displayToLay.getListener();
        FormulaTreeStructure fts;
        int nbComponent = displayToLay.getComponentCount();
        
        // On parcourre tous les components pr�sents dans le display.
        for (int i = 1; i < nbComponent; i++) {
            // la r�f�rence sur le component courant
            current = (Display) displayToLay.getComponent(i - 1);
            // la r�f�rence sur le suivant
            next = (Display) displayToLay.getComponent(i);
            
            // Si le courant est un display d'op�rateur alors on continue
            if (current.isSymbolOperatorDisplay())
                continue;
                
            // Si le suivant n'est pas un display d'op�rateur alors 2 cas
            if (!next.isSymbolOperatorDisplay()) {
                // La seule distinction qu'il faut faire � ce stade l�, c'est le cas o� next
                // est le diplay d'un - unaire. Si c'est le cas, on n'ins�re pas de display.
                fts = (FormulaTreeStructure) next.getListener();
                if (fts.isOperator()) {
                    String ope = ((Operator) fts).getTheOperator();
                    if (ope.equals("-"))
                        continue;
                }
                    
                // On ajoute un display d'op�rateur.
                displayOperator = createOperatorDisplay();
                displayToLay.add(displayOperator, displayOperator, i);
                
                // On met un listener � l'op�rateur.
                // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
                // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
                // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
                // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
                // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
                // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
                // d'op�rateur.
                displayOperator.addControlListener(fatherFts);
                i++;
                nbComponent++;
            }
        }
        
        // Mise � jour des rangs des displays
        displayToLay.adjustRank();
        // Mise � jour du nombre de components pr�sents dans le display.
        prevNbComponent = displayToLay.getComponentCount();
        // On n'a plus besoin d'ins�rer des displays d'op�rateur.
        insertOperatorDisplay = false;
        // On fait en sorte que la mise � niveau des displays (op�rateurs) soit faite.
        displayToLay.setUpdateLevel(true);
        // On a rajout� un display, on demande le recalcul de tous les anc�tres
        // de l'instance.
        displayToLay.computeAncestorsAttributes();
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        Display childDisplay;
        DisplayLayout childLayout;
        SelectionEvent selEvt = new SelectionEvent(displayToLay);
        
        int nbChild = displayToLay.getComponentCount();
        
        // On parcourre la liste des displays, et on regarde sur chacun des dispays s'il faut s�lectionner
        // un de ses voisins.
        for (int i = 0; i < nbChild; i++) {
            childDisplay = (Display) displayToLay.getComponent(i);
            childLayout = (DisplayLayout) childDisplay.getLayout();
            
            // On regarde ici s'il faut s�lectionner le display � gauche de childLayout
            // Si ledit display n'est pas s�lectionner, on le s�lectionne.
            if (childLayout.selectLeftDisplay() && (i > 0)) {
                childDisplay = (Display) displayToLay.getComponent(i-1);
                if (!childDisplay.isSelected())
                    childDisplay.select();
            }

            // On regarde ici s'il faut s�lectionner le display � droite de childLayout
            // Si ledit display n'est pas s�lectionner, on le s�lectionne.
            if (childLayout.selectRightDisplay() && (i < (nbChild - 1))) {
                childDisplay = (Display) displayToLay.getComponent(i+1);
                if (!childDisplay.isSelected())
                    childDisplay.select();
                // On a s�lectionn� le display � la position i+1, donc on incr�mente ici i,
                // pour que dans le for, le i soit encore incr�ment� et que l'on se positionne
                // ainsi sur un display suivant, non s�lectionn�
                i++;
            }
        }
        
        // On parcourre la liste des displays et on regarde si les displays � gauche et � droite du display
        // courant ont des �l�ments s�lectionn�s. Si c'est le cas et que le display courant est un display
        // d'op�rateur et qu'il n'est pas s�lectionn�, alors on s�lectionne le display � gauche, le displa
        // d'op�rateur et le display � droite.
        // Ex: (...) + (...), dans chacune des parenth�ses, un �l�ment est s�lectionn�, on s�lectionne tout
        Display prev;
        Display next;
        for (int i = 1; i < (nbChild - 1); i++) {
            prev = (Display) displayToLay.getComponent(i-1);
            childDisplay = (Display) displayToLay.getComponent(i);
            next = (Display) displayToLay.getComponent(i+1);
            if (prev.gotSelectedElements() && next.gotSelectedElements()) {
                //if ((childDisplay instanceof StringDisplay) && !childDisplay.isSelected()) {
                if (childDisplay.isSymbolOperatorDisplay() && !childDisplay.isSelected()) {
                    if (!prev.isSelected())
                        prev.select();
                    childDisplay.select();
                    if (!next.isSelected())
                        next.select();
                }
            }
        }
        
        // On cr�� maintenant une liste contenant tous les displays qui ont �t� s�lectionn�s au cours des
        // op�rations pr�c�dentes.
        Vector list = new Vector();
        for (int i = 0; i < nbChild; i++) {
            childDisplay = (Display) displayToLay.getComponent(i);
            if (childDisplay.gotSelectedElements())
                list.addElement(childDisplay);
        }

        if (list.size() > 0) {
            if ((list.size() == nbChild) && !(displayToLay.getListener() instanceof Formula) && !(displayToLay.getListener() instanceof Slot)) {
                selEvt.setAction(SelectionEvent.PURGE, null);
                displayToLay.fireSelectionEvent(selEvt);

                displayToLay.setSelected();
                selEvt.setAction(SelectionEvent.ADD, displayToLay);
                displayToLay.fireSelectionEvent(selEvt);
            }
            else if (list.size() != 1) {
                selEvt.setAction(SelectionEvent.PURGE, null);
                displayToLay.fireSelectionEvent(selEvt);

                for (Enumeration e = list.elements(); e.hasMoreElements(); ) {
                    childDisplay = (Display) e.nextElement();
                    if (!childDisplay.isSelected())
                        childDisplay.select();
                    selEvt.setAction(SelectionEvent.ADD, childDisplay);
                    displayToLay.fireSelectionEvent(selEvt);
                }
            }
        }
        
        // On a une s�lection valide dans le display layed.
        // On demande la validation au niveau de son p�re.
        // En principe, � cause du test sur le fait d'avoir une Formula, pas besoin
        // d'avoir le test juste suivant. A surveiller.
        Display display = displayToLay;
        if (display.getParent() instanceof Display) {
            display = (Display) display.getParent();
            //if (!(display.getListener() instanceof Formula))
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null)
                ((DisplayLayout) display.getLayout()).validateSelection();
        }
        
        display.repaint(); // faut voir, parce que autant de repaint que de display ?????????
    }


    /**
    * Checks the validity of the deselection.
    * @param display the display to deselect.
    */
    public void validateDeselection(Display display) {
        Display father = displayToLay;
        Display tmp;
        SelectionEvent selEvt = new SelectionEvent(father);
        int rank = display.getRank();

        // Premier cas: father (i.e. le display g�r� par l'instance) est s�lectionn�.
        if (father.isSelected()) {
            // On l'enl�ve de la liste des displays s�lectionn�s.
            father.setNotSelected();
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);

            // Comme on arrive dans cette m�thode par display, display a �t� d�j� d�s�lectionn�.
            // De plus, ce LM g�re principalement (voire que) des displays N-aires dont il s'agit
            // la plupart du temps d'une succession de displays op�randes entre lesquels se trouvent
            // des displays op�rateur (ex: + ou *).
            // Donc, s'ils existent, on doit alors d�s�lectionner le display pr�c�dent et le display
            // suivant... display. (d'o� r�cup�ration du rang de display au d�but)

            // On s'occupe du display pr�c�dant... display.
            if (rank > 0) {
                if (!(display.getListener() instanceof UnaryMinus)) {
                    // Il existe un display avant... display, donc on prend garde de le d�s�lectionner,
                    // s'il �tait s�lectionn�.
                    tmp = ((Display) father.getComponent(rank-1));
                    if (tmp.isSelected()) {
                        // On d�s�lectionne donc ledit display.
                        tmp.deselect();

                        // Maintenant, on regarde s'il existe un display pr�c�dent celui que l'on vient
                        // de d�s�lectionner, qui est un display d'op�rateur et qui est s�lectionn�.
                        // Si c'est le cas, on le d�s�lectionne.
                        if (rank > 1) {
                            tmp = ((Display) father.getComponent(rank-2));
                            if (tmp.isSymbolOperatorDisplay() && tmp.isSelected())
                                tmp.deselect();
                        }
                    }
                }
            }

            // On s'occupe du display suivant... display.
            if (rank < (father.getComponentCount()-1)) {
                // Il existe un display apr�s... display, donc on prend garde de le d�s�lectionner,
                // s'il �tait s�lectionn�.
                tmp = ((Display) father.getComponent(rank+1));
                // Il faut faire attention dans le cas d'une addition o� il y aurait un op�rateur unaire.
                // (Normalement seulement un UnaryMinus). Dans le cas le plus simple, une soustraction: a-b
                // Si a-b est s�lectionn� et que l'on arrive ici parce on a d�s�lectionn� a, alors -b doit rester
                // s�lectionn�. D'o� ce cas particulier suppl�mentaire.
                if (!(tmp.getListener() instanceof UnaryMinus)) {
                    if (tmp.isSelected()) {
                        tmp.deselect();

                        // Maintenant, on regarde s'il existe un display suivant celui que l'on vient
                        // de d�s�lectionner, qui est un display d'op�rateur et qui est s�lectionn�.
                        // Si c'est le cas, on le d�s�lectionne.
                        if (rank < (father.getComponentCount()-2)) {
                            tmp = ((Display) father.getComponent(rank+2));
                            if (tmp.isSymbolOperatorDisplay() && tmp.isSelected())
                                tmp.deselect();
                        }
                    }
                }
                else
                    ((LeftAssocPrefixedUnaryOperatorLayout) tmp.getLayout()).setSelectLeftDisplay(false);
            }
            
            // On parcourre la liste des display de father et on ajoute dans la liste des s�lectionn�s,
            // ... les s�lectionn�s.
            for (int i = 0; i < father.getComponentCount(); i++) {
                tmp = (Display) father.getComponent(i);
                if (tmp.isSelected()) {
                    selEvt.setAction(SelectionEvent.ADD, tmp);
                    father.fireSelectionEvent(selEvt);
                }
            }
            
            // On regarde maintenant au niveau sup�rieur, si la d�s�lection de father g�n�re
            // une d�s�lection qui est valide.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                FormulaTreeStructure fts = (FormulaTreeStructure) father.getListener();
                if (fts.getFather() != null)
                    ((DisplayLayout) father.getLayout()).validateDeselection(displayToLay);
            }
        }
        // Deuxi�me cas: father (i.e. le display g�r� par l'instance) n'est pas s�lectionn�.
        // Mais, il en a des s�lectionn�s, puisque display fait partie de sa descendance.
        else {
            // Et bien, on fait exactement la m�me chose que pr�c�demment, � la diff�rence importante
            // que l�, les displays s�lectionn�s font partie de la liste des displays s�lectionn�s.
            // Il faut donc les y enlever.
            if (rank > 0) {
                if (!(display.getListener() instanceof UnaryMinus)) {
                    tmp = ((Display) father.getComponent(rank-1));
                    if (tmp.isSelected()) {
                        tmp.deselect();
                        selEvt.setAction(SelectionEvent.REMOVE, tmp);
                        father.fireSelectionEvent(selEvt);

                        if (rank > 1) {
                            tmp = ((Display) father.getComponent(rank-2));
                            if (tmp.isSymbolOperatorDisplay() && tmp.isSelected()) {
                                tmp.deselect();
                                selEvt.setAction(SelectionEvent.REMOVE, tmp);
                                father.fireSelectionEvent(selEvt);
                            }
                        }
                    }
                }
            }

            if (rank < (father.getComponentCount()-1)) {
                tmp = ((Display) father.getComponent(rank+1));
                // Il faut faire attention dans le cas d'une addition o� il y aurait un op�rateur unaire.
                // (Normalement seulement un UnaryMinus). Dans le cas le plus simple, une soustraction: a-b
                // Si a-b est s�lectionn� et que l'on arrive ici parce on a d�s�lectionn� a, alors -b doit rester
                // s�lectionn�. D'o� ce cas particulier suppl�mentaire.
                if (!(tmp.getListener() instanceof UnaryMinus)) {
                    if (tmp.isSelected()) {
                        tmp.deselect();

                        // Maintenant, on regarde s'il existe un display suivant celui que l'on vient
                        // de d�s�lectionner, qui est un display d'op�rateur et qui est s�lectionn�.
                        // Si c'est le cas, on le d�s�lectionne.
                        if (rank < (father.getComponentCount()-2)) {
                            tmp = ((Display) father.getComponent(rank+2));
                            if (tmp.isSymbolOperatorDisplay() && tmp.isSelected())
                                tmp.deselect();
                        }
                    }
                }
                else
                    ((LeftAssocPrefixedUnaryOperatorLayout) tmp.getLayout()).setSelectLeftDisplay(false);
            }
        }

        // Comme toujours, on contr�le maintenant, avec les �ventuels displays s�lectionn�s restant,
        // si la s�lection est valide.
        validateSelection();
        // On met � jour le display.
        father.repaint();
    }
}