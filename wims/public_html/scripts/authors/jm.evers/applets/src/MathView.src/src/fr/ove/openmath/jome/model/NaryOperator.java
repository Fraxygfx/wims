/*
$Id: NaryOperator.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.openmath.jome.model.events.*;
import fr.ove.openmath.jome.model.evaluation.*;

/**
*
* @author � 2000 DIRAT Laurent
* @version 2.1 10/01/2000
*/
public class NaryOperator extends Operator {
    /**
    * Inserts the operator instance in the formula tree, from the current insertion position.
    * (checks the priorities and goes up in the tree if necessary).
    *
    * @param ope the current insertion position.
    * @return the new insertion position.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        VariableOrNumber template;
        // On cherche la position d'insertion de notre op�rateur
        current = findLocation(current);

        if (current.getAsOperatorPriority() == getAsOperandPriority()) {
            // On a d�j� tap� dans la formule un op�rateur de ce genre, on va donc seulement ins�rer
            // un template.
            template = new VariableOrNumber();
            current.addChild(template);
            
            // On retourne la ref�rence de notre dernier point d'insertion.
            return template;
        }
        else { 
            // On est dans le cas o� on commence � saisir un tel op�rateur.
            
            // On ajoute l'op�rateur comme fils � l'op�rateur courant
            current.addChild(this);
            
            // On teste s'il on est dans le cas o� l'on a d�j� tap� qque chose dans
            // la formule. Si non, current est forc�ment de type Formula, par cons�quent
            // on est dans le cas particulier o� cela doit produire [?]*[?] puisque
            // normalement on ne devrait, dans ce cas l�, pas pouvoir taper de "*"
            if ((current.getFather() == null) && (current.getNbChildren() == 1)) {
                template = new VariableOrNumber();
                addChild(template); // On ajoute le premier template.
            }
            else {
                FormulaTreeStructure fts = (FormulaTreeStructure) current.getChild(getRank() - 1);
                // � cause des priorit�s sur les op�rateurs, on ajoute comme fils l'op�rateur
                // dont le rang est juste inf�rieur � notre "*"
                addChild(fts);
                
                // on enl�ve l'op�rateur qu'on a fait "descendre", de la liste
                // de son pr�c�dent p�re (son grand p�re maintenant)
                current.removeChild(fts);
            }
            
            // On ajoute un template � la multiplication
            template = new VariableOrNumber();
            addChild(template);
            
            // On retourne la ref�rence de notre dernier point d'insertion.
            return template;
        }
    }
    
    /**
    * The Creation of the corresponding linear expression of the formula.
    */
    public String createLinear(String linear) {
        FormulaTreeStructure child;
        
        for (int i = 0; i < getNbChildren(); i++) {
            child = (FormulaTreeStructure) getChild(i);
            if (i == 0)
                linear = child.createLinear(linear);
            else {
                linear += getTheOperator();
                linear = child.createLinear(linear);
            }
        }
        return linear;
    }
    
    /**
    * Evaluates the instance.
    */
    public String evaluate() {
        Vector evaluations = new Vector();
        
        // On commence par �valuer tous les fils de l'instance
        for (Enumeration e = getChildren().elements(); e.hasMoreElements(); )
            evaluations.addElement(((FormulaTreeStructure) e.nextElement()).evaluate());
    
        int nbEvaluations = evaluations.size();
        String anEvaluation, currEvaluation;
        // Maintenant, on parcourre toutes les �valuations calcul�es et on essaye de leur appliquer
        // l'op�rateur courant
        for (int i = 1; i < nbEvaluations; i++) {
            currEvaluation = (String) evaluations.elementAt(i);
            
            for (int j = 0; j < i; j++) {
                anEvaluation = (String) evaluations.elementAt(j);
                
                if (Evaluator.type(currEvaluation) == Evaluator.type(anEvaluation)) {
                    evaluations.insertElementAt(Evaluator.evaluate(anEvaluation, currEvaluation, getTheOperator()), j);
                    evaluations.removeElement(anEvaluation);
                    evaluations.removeElement(currEvaluation);
                    i--;
                    nbEvaluations--;
                    break;
                }
            }
        }
        
        // On a appliqu� l'op�rateur courant, on retourne maintenant le r�sultat, en prenant soin
        // d'intercaler des op�rateur entre les �valuations si n�cessaire
        String result = (String) evaluations.firstElement();
        for (int i = 1; i < nbEvaluations; i++)
            result += getTheOperator() + (String) evaluations.elementAt(i);

        return result;
    }
}
        
