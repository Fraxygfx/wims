/*
$Id: BinaryOperator.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.openmath.jome.model.evaluation.*;

/**
* @author � 1999 DIRAT Laurent
* @version 2.0 25/06/1999
*/
public class BinaryOperator extends Operator {
    /**
    * Inserts the operator instance in the formula tree, from the current insertion position.
    * (checks the priorities and goes up in the tree if necessary).
    *
    * @param ope the current insertion position.
    * @return the new insertion position.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        VariableOrNumber template;
        
        // On cherche la position d'insertion de notre operateur
        current = findLocation(current);
        
        // Pas de probl�me de priorit� pour ce type d'op�rateur.
        // On doit juste savoir si current est une instance de Formula pour g�rer le cas
        // particulier o�, la formule vide, on veut saisir un tel op�rateur et donc insertion
        // des templates adequat ==> [?] ope [?].
        
        // On ajoute l'op�rateur comme fils � l'op�rateur courant
        current.addChild(this);

        if ((current.getFather() == null) && (current.getNbChildren() == 1)) {
            template = new VariableOrNumber();
            addChild(template); // On ajoute le premier template.
        }
        else {
            FormulaTreeStructure fts = (FormulaTreeStructure) current.getChild(getRank() - 1);
            // � cause des priorit�s sur les op�rateurs, on ajoute comme fils l'op�rateur
            // dont le rang est juste inf�rieur � notre instance
            addChild(fts);
            
            // On doit faire attention � quel type d'op�rateur on a affaire.
            // Si fts est les parenth�se, elles ne sont pas visibles si l'instance courante est une fraction.
            // Dans les autres cas, elles le sont.
            int prio = fts.getAsOperatorPriority();
            if (prio ==  resourcesManager.getAsOperatorPriority("bracketPriorities")) {
                prio = getAsOperatorPriority();
                if (prio ==  resourcesManager.getAsOperatorPriority("dividePriorities"))
                    ((Bracket) fts).setIsVisible(false);
                else
                    ((Bracket) fts).setIsVisible(true);
            }
            
            
            // on enl�ve l'op�rateur qu'on a fait "descendre", de la liste
            // de son pr�c�dent p�re (son grand p�re maintenant)
            current.removeChild(fts);
        }

        // On ajoute un template � la division
        template = new VariableOrNumber();
        addChild(template);

        // On retourne la ref�rence de notre dernier point d'insertion.
        return template;
    }
    
    /**
    * The Creation of the corresponding linear expression of the formula.
    */
    public String createLinear(String linear) {
        linear = ((FormulaTreeStructure) getChild(0)).createLinear(linear);
        linear += getTheOperator();
        linear = ((FormulaTreeStructure) getChild(1)).createLinear(linear);
        return linear;
    }

    /**
    * Evaluates the instance.
    */
    public String evaluate() {
        return Evaluator.evaluate(((FormulaTreeStructure) getChild(0)).evaluate(),
                        ((FormulaTreeStructure) getChild(1)).evaluate(),
                        getTheOperator());
    }
            
}
