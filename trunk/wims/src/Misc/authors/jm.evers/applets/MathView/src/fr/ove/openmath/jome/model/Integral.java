/*
$Id: Integral.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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


package fr.ove.openmath.jome.model;

import java.util.*;
import fr.ove.openmath.jome.model.*;
import fr.ove.openmath.jome.model.events.ModelEvent;

/**
*
* @author � 1999 DIRAT Laurent
* @version 2.0 28/06/1999
*/
public class Integral extends KaryOperator {
    /*
    * Pour savoir si on est dans le cas o� il faut positionner current sur la variable d'int�gration
    * o� si on doit effectivement ajouter un nouvel �lement (la borne inf au moins).
    * A la cr�ation de l'instance, on ajoute un template pour l'int�grande, mais aussi un pour la
    * variable d'int�gration (on aura [?]d[?]). Donc, quand on va tomber sur un s�parateur et donc
    * que l'on va faire un addElement(), il faudra savoir si on va sur la variable d'int�gration o�
    * s'il faut effectivement ajouter la borne inf. Donc par d�faut, la valeur est true.
    */
    private boolean gotoVariable = true;
    
    /** 
    * Inserts the instance in the formula tree structure.<BR>
    * @param current the position in the formula tree where the operator is to be insert.
    * @return the new current position int hte formula tree.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        current = super.insert(current);
        super.addElement();
        // On r�cup�re l'�l�ment du second slot (le dx), pour rajouter le d justement.
        VariableOrNumber dx = (VariableOrNumber) getChild(1).getChild(0);
        dx.setValue("d" + dx.getValue());
        return current;
    }
    
    /**
    * Adds a new element (template) to the end of the list.
    * Returns the new element.
    */
    public FormulaTreeStructure addElement() {
        if (gotoVariable) {
            gotoVariable = false;
            return (FormulaTreeStructure) getChild(1).getChild(0);
        }
        else
            return super.addElement();
    }
}
