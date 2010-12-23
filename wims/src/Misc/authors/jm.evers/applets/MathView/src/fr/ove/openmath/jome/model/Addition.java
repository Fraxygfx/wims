/*
$Id: Addition.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
* The operator "+".<BR>
*
* <CODE>Addition</CODE> represents a node in the formula tree.
* Its children are the operands of the operation.
*
* @author � 1999 DIRAT Laurent
* @version 2.0  25/06/1999
*/
public class Addition extends NaryOperator {
    /**
    * The Constructor.
    */
    public Addition() {
        setResourceIdentifier("ADDITION");
        setValue("+");
        setAsOperatorPriority(resourcesManager.getAsOperatorPriority("plusPriorities"));
        setAsOperandPriority(resourcesManager.getAsOperandPriority("plusPriorities"));
        setAreOperandsMovable(true);
    }
    
    /**
    * Inserts the operator instance in the formula tree, from the current insertion position.
    * (checks the priorities and goes up in the tree if necessary).
    *
    * @param current the current insertion position.
    * @return the new insertion position.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        // On cherche la position d'insertion de notre "+"
        current = findLocation(current);
        int currentAsOperandPriority = current.getAsOperandPriority();
        int currentAsOperatorPriority = current.getAsOperatorPriority();

        if (currentAsOperatorPriority == getAsOperandPriority()) {
            // On a d�j� tap� dans la formule un "+", on va donc ins�rer un nouveau
            // "+" dans le pr�c�dent ==> cas particuliers.
            if ((currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryPlusPriorities")) || 
                (currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryMinusPriorities"))) {
                // Si on est en pr�cense de ce cas l�, la position d'insertion est
                // sur un op. unaire ("+"  ou "-"). Il faut r�cup�rer le p�re de l'op.
                // en question, i.e. une instance d'Addition que l'on a ins�r� auparavant
                // dansla FST.
                FormulaTreeStructure father = (FormulaTreeStructure) current.getFather();
                
                if (currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryPlusPriorities")) {
                    FormulaTreeStructure operand = (FormulaTreeStructure) current.getChild(0);
                    // si en fait, notre position d'insertion est un "+" unaire, on enl�ve
                    // notre op�rateur unaire pour ne garder que son op�rande.
                    // Ex: on avait +a, on tape "+", on g�n�re a+[?] o� [?] est le template.
                    int rank = current.getRank();
                    
                    father.addChild(operand, rank);
                    father.removeChild(current);
                }

                // On ins�re notre template.
                VariableOrNumber template0 = new VariableOrNumber();
                father.addChild(template0);
                
                // On retourne la ref�rence de notre dernier point d'insertion.
                return template0;
            }
            
            // On est dans le cas classique de la saisie d'une suite "+", on ins�re
            // notre template dans la FTS.
            VariableOrNumber template = new VariableOrNumber();
            current.addChild(template);
            
            // On retourne la ref�rence de notre dernier point d'insertion.
            return template;
        }
        else {
            // On est dans le cas o� on commence � saisir une addition.
            
            // On ajoute l'op�rateur "+" comme fils � l'op�rateur courant.
            // Pour g�rer le fait que l'on puisse taper un "+" binaire ou unaire, 
            // notre op�rateur "+" unaire de notre FTS (UnaryPlus) sera ajout� comme
            // fils � l'instance courante. D'o� l'ajout syst�matique suivant � la position
            // d'insertion. La distinction de cas singuliers est faite au test suivant.
            current.addChild(this);
            
            // Ce test est n�cessaire pour savoir si on est dans le cas du "+" binaire
            // ou du "+" unaire.
            if (current.getNbChildren() > 1) {
                // Il faut que l'on fasse attention pour savoir si l'on veut entrer un "+" unaire ou pas.
                // Donc on vient d'ajouter notre instance comme fils a current.
                // Si on est l�, 2 solutions,  le fils de current qui a pour rank, le rank de l'instance -1 :
                //      * est un template ==> on saisi un plus unaire
                //      * n'est pas un template ==> on saisi une addition
                FormulaTreeStructure fts = (FormulaTreeStructure) current.getChild(getRank() - 1);
                
                // Quelque soit le cas, on enl�ve fts de current.
                // Dans le cas du plus unaire, (fts est un template) un template sera rajout� avec
                // l'insertion du UnaryPlus
                // Dans le cas de l'addition, fts sera ajout� � notre instance
                current.removeChild(fts);
                
                if ((fts.getAsOperatorPriority() == resourcesManager.getAsOperatorPriority("constantPriorities")) &&
                    fts.isTemplate()) {
                    // On ajoute un op�rateur "+" unaire comme fils � notre instance
                    current = this;
                    current = (new UnaryPlus()).insert(current);
                    
                    // On retourne la r�f�rence de notre dernier point d'insertion
                    return current;
                }
                else {
                    addChild(fts);
                    
                    // On ajoute un template � l'addition
                    VariableOrNumber template = new VariableOrNumber();
                    addChild(template);
                    
                    // On retourne la r�f�rence de notre dernier point d'insertion
                    return template;
                }
            }
            else { // on est dans le cas du "+" unaire
                // Comme dit pr�c�demment, on ajoute un op�rateur "+" unaire comme
                // fils � l'instance courante.
                current = this;
                current = (new UnaryPlus()).insert(current);
                
                // On retourne la r�f�rence de notre dernier point d'insertion
                return current;
            }
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
                if (!((child instanceof UnaryPlus) || (child instanceof UnaryMinus)))
                    linear += "+";
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
                    evaluations.insertElementAt(Evaluator.evaluate(anEvaluation, currEvaluation, "+"), j);
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
        for (int i = 1; i < nbEvaluations; i++) {
            anEvaluation = (String) evaluations.elementAt(i);
            if (anEvaluation.charAt(0) == '-')
                result += anEvaluation;
            else
                result += "+" + anEvaluation;
        }
        return result;
    }
}
