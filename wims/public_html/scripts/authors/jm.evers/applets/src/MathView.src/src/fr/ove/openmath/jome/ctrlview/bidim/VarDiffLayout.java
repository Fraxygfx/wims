/*
$Id: VarDiffLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
* A layout manager that lays components for the variables of differentiation.<BR>
* We assume the display laid out contains what should be a variable for the visualisation of a differentiation,
* i.e. a variable (differentiation of first order) or a power of a variable (differentiation of higher order).<BR>
* According to the type of differentiation, either the symbol "d" is added (differentiation) or the symbol delta (the
* greek letter) is added (partial differentiation) to the display laid out, for correct rendering.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 15/10/1999
*/
public class VarDiffLayout extends HorizontalLayout {
    /**
    * <CODE>true</CODE> if we are dealing with a partial derivative. <CODEW>false</CODE> otherwise.
    */
    private boolean isPartial;
    
    /**
    * The constructor.
    * @param isPartial <CODE>true</CODE> if we have a partial differentiation. <CODE>false</CODE> otherwise.
    */
    public VarDiffLayout(boolean isPartial) {
        this.isPartial = isPartial;
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

        FormulaTreeStructure fts = (FormulaTreeStructure) this.displayToLay.getListener();
        
        Display d;
        // Si d�rive� partielle, on ajoute un SymbolDisplay avec un delta. Sinon, un StringDisplay avec un "d"
        if (isPartial) {
            d = new SymbolDisplay(this.displayToLay.getGraphicContext(), new ImageSymbol("delta", this.displayToLay));
            // Le display est le display d'un op�rateur (on peut le consid�rer comme tel)
            d.setIsSymbolOperatorDisplay(true);
        }
        else {
            d = new StringDisplay(this.displayToLay.getGraphicContext(), "d", true);
        }
        
        this.displayToLay.add(d, d, 0);
        
        // On met un listener au display du d/delta
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        d.addControlListener(fts);
    }
    
    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si un des displays est s�lectionn� alors on s�lectionne tout.
        Display d = (Display) displayToLay.getComponent(0);
        Display v = (Display) displayToLay.getComponent(1);
        if (d.isSelected() || v.isSelected()) {
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
        Display father = displayToLay;
        Display tmp;
        SelectionEvent selEvt = new SelectionEvent(father);
        
        // En fait, comme quand "d/delta" ou la variable (puissance ou pas) est s�lectionn� on s�lectionne tout,
        // quand on d�s�lectionne l'un ou l'autre, on d�s�lectionne tout.
        if (father.isSelected()) {
            father.deselect();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);            
            
            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                //if (!(display.getListener() instanceof Formula))
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
