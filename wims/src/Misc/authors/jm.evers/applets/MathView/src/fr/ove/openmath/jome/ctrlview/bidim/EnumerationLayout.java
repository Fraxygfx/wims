/*
$Id: EnumerationLayout.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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
import fr.ove.openmath.jome.ctrlview.bidim.Display;
import fr.ove.openmath.jome.ctrlview.bidim.DisplayLayout;
import fr.ove.openmath.jome.ctrlview.bidim.selection.events.SelectionEvent;
import fr.ove.openmath.jome.model.*;

/**
* Layout manager for enumeration<BR>
*
* @author � 1999 DIRAT Laurent
* @version 2.0 17/12/1999
*/
public class EnumerationLayout extends BracketLayout {
    /**
    * According to the operator, the layout manager has to add some components (e.g. brackets, ...)
    * or has to perform some "re-oganisation" before rendering.<BR>
    * As soon as the layout manager is set to the display, this mehtod MUST be called with the display laid out
    * as parameter. This method serves as well as a registering method. So all sub-classes of the instance MUST
    * call super.initDisplay(displayToLay).
    * @param displayToLay the display laid by the instance
    */
    public void initDisplay(Display displayToLay) {
        super.initDisplay(displayToLay);  // Par cet appel, on ajoute dans displayToLay les accolades
        // On va maintenant y rajouter un display, dans lequel on va mettre tous les displays correspondants
        // aux �l�ments de la liste, display � qui on va affecter un SeparatorOperatorLayout, qui va se charger
        // d'afficher les �l�ments de la liste de mani�re horizontale avec chacun des �l�ments s�par�s par une
        // virgule (un s�parateur)
        Display elementsDisplay = new BidimDisplay(displayToLay.getGraphicContext());
        // On met un listener � elementsDisplay
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        elementsDisplay.addControlListener((FormulaTreeStructure) displayToLay.getListener());
        
        SeparatorOperatorLayout layout = new SeparatorOperatorLayout();
        layout.initDisplay(elementsDisplay);
        elementsDisplay.setLayout(layout);
        
        // On l'ajoute comme fils � display
        this.displayToLay.add(elementsDisplay);
    }
    
    /**
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        updateLevel(displayToLay.getLevel());
        
        if (displayToLay.getComponentCount() > 3) {
            // Dans l'ordre, displayToLay contient [opening, closing, elementsDisplay, var1, var2, ...]
            // Il faut mettre tous les vari dans elementsDisplay.
            
            Display elementsDisplay = (Display) displayToLay.getComponent(2);
            Display d;
            for (int i = 3; i < displayToLay.getComponentCount(); ) {
                d = (Display) displayToLay.getComponent(i);
                // elementsDisplay.add(d) appelle un displayToLay.remove(d).
                // remove(d), enl�ve �galement d de la liste des listeners de l'objet (fts) qu'il �coutait.
                // Ce qu'on ne veut pas, puisqu'il s'agit d'un simple d�placement de display. 
                d.setDoRemoveFromListListeners(false);
                elementsDisplay.add(d);
                // On remet le comportement de suppression par d�fault.
                d.setDoRemoveFromListListeners(true);
            }
        }
        
        return super.computeAttributes();
    }
}
