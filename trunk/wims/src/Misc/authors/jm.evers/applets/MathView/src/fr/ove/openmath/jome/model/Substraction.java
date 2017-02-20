/*
$Id: Substraction.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
* The operator "-", which is the binary substraction.
* Because the substraction is defines as the addition of the opposite, 
* <CODE>@see Substraction</CODE> doesn't represent a node in the formula tree structure.
* During its creation, it's in fact a <CODE>@see Addition</CODE> instance which is created
* and serves as a node in the formula tree structure, and an <CODE>@see UnaryMinus</CODE>
* instance is added as a child.
*
* @author � 2000 DIRAT Laurent
* @version 2.1 10/01/200
*/
public class Substraction extends BinaryOperator {
    /**
    * Inserts the operator instance in the formula tree, from the current insertion position.
    * (checks the priorities and goes up in the tree if necessary).
    *
    * @param current the current insertion position.
    * @return the new insertion position.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        // On cherche la position d'insertion de notre "-"
        current = findLocation(current);
        int currentAsOperandPriority = current.getAsOperandPriority();
        int currentAsOperatorPriority = current.getAsOperatorPriority();
        
        if (currentAsOperatorPriority == getAsOperandPriority()) {
            // On a d�j� tap� dans la formule un "-", on va donc ins�rer un nouveau
            // "-" dans le pr�c�dent ==> cas particuliers.
            if ((currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryPlusPriorities")) || 
                (currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryMinusPriorities"))) {
                // Si on est en pr�cense de ce cas l�, la position d'insertion est
                // sur un op. unaire ("+"  ou "-"). Il faut r�cup�rer le p�re de l'op.
                // en question, i.e. une instance d'Addition que l'on a ins�r� auparavant
                // dansla FST.
                FormulaTreeStructure father = (FormulaTreeStructure) current.getFather();
                
                // Si notre position d'insertion est un "+" unaire, alors on va l'�liminer
                // pour ne garder que son op�rande. Ainsi, au lieu d'avoir +a-b, on aura a-b.
                if (currentAsOperandPriority == resourcesManager.getAsOperandPriority("unaryPlusPriorities")) {
                    FormulaTreeStructure operand = (FormulaTreeStructure) current.getChild(0);
                    int rank = current.getRank();
                    
                    father.addChild(operand, rank);
                    father.removeChild(current);
                }
                
                // On ajoute notre op. "-".
                // (Rappel : "-" unaire � cause de la def. de la soustraction)
                father = (new UnaryMinus()).insert(father);
                // On retourne la ref�rence de notre dernier point d'insertion.
                return father;
            }
            
            // L�, on est dans le cas o� l'on a tap� une s�rie de "+" ou de "-", et donc
            // la position d'insertion est une instance d'Addition que l'on a ins�r� 
            // auparavant dans la FST. (tjrs le m�me rappel quand aux defs.)
            current = (new UnaryMinus()).insert(current);
            
            // On retourne la ref�rence de notre dernier point d'insertion.
            return current;
        }
        else { // Premi�re entr�e d'une soustraction (et m�me, aucune addition n'a �t�
               // saisie auparavant)
               
            // On ajoute une instance d'Addition comme fils � l'op�rateur courant
            FormulaTreeStructure addition = new Addition();
            current.addChild(addition);
            
            if (current.getNbChildren() > 1) {
                // Il faut que l'on fasse la distinction entre le fait de vouloir saisir une soustraction
                // ou un moins unaire.
                // Donc on vient d'ajouter une instance d'addition � current.
                // Si on est l�, 2 solutions, le fils de current qui a pour rank, le rank de 
                // l'instance d'addition -1 :
                //      * est un template ==> on saisi un moins unaire
                //      * n'est pas un template ==> on saisi une soustraction
                FormulaTreeStructure fts = (FormulaTreeStructure) current.getChild(addition.getRank() - 1);
                
                // Quelque soit le cas, on enl�ve fts de current.
                // Dans le cas du moins unaire, (fts est un template) un template sera rajout� avec
                // l'insertion du UnaryMinus
                // Dans le cas de la soustraction, fts sera ajout� � l'instance d'addition
                current.removeChild(fts);
                
                if (!((fts.getAsOperatorPriority() == resourcesManager.getAsOperatorPriority("constantPriorities")) &&
                    fts.isTemplate())) {
                    // Donc, c'est une soustraction, fts est l'�lement � qui on va soustraire qque chose.
                    // On l'ajoute donc comme fils (en fait ce sera la premier) � l'instance d'addition.
                    addition.addChild(fts);
                }
                
                // Par d�finition de la soustraction, on ajoute un op�rateur "-"
                // unaire comme fils � l'instance d'Addition.
                addition = (new UnaryMinus()).insert(addition);
                
                // On retourne la r�f�rence de notre dernier point d'insertion
                return addition;
            }
            else { // on est dans le cas du moins unaire
                // On ajoute un op�rateur "-" unaire comme fils � l'instance d'Addition.
                addition = (new UnaryMinus()).insert(addition);
                
                // On retourne la ref�rence de notre dernier point d'insertion.
                return addition;
            }
        }
    }
}
