/*
$Id: Slot.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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

/**
* This class represents the kind of child K-ary will have.
*
* @author � 1999 DIRAT Laurent
* @version 1.0  24/02/1999
*/
public final class Slot extends FormulaTreeStructure {
    // Y a de fortes chances pour qu'on ne surclasse jamais Slot.
    
    FormulaTreeStructure nextSlot;
    
    /**
    * The Constructor.
    * 
    */
    public Slot() {
        setResourceIdentifier("SLOT");
        setAsOperatorPriority(resourcesManager.getAsOperatorPriority("slotPriorities"));
        setAsOperandPriority(resourcesManager.getAsOperandPriority("slotPriorities"));
    }
    
    public FormulaTreeStructure getNextSlot() {
        return nextSlot;
    }
    
    public void setNextSlot(FormulaTreeStructure nextSlot) {
        this.nextSlot = nextSlot;
    }
    
    // En fait, vu l'usage, toutes les m�thodes des �l�ments de la fts ne servent pas.
    // Seules les valeurs de l'instance vue comme op�rateur ou comme op�rande sont utiles
    // pour la construction de la fts.

    // Oblig� ici de surcharger cette m�thode pour palier les cas pathologiques de, je suis 
    // d�j� sur une instance de Slot (exemple, on a une fonction comme fils a un slot, le goto
    // correpondant � la fermeture de la parenth�se de la fonction, nous a mis comme position
    // courante d'insertion, le slot. Si en suivant, on met un s�parateur (donc on veut ajouter
    // un autre slot) il faut que l'on reste sur l'instance. A priori on ne va jamais aller plus
    // haut dans la fts qu'un slot en passant par un goTo. Donc si cette m�thode est appel�e, c'est
    // que la position courante d'insertion est l'instance, donc on ne fait rien, la position
    // courante d'insertion reste la m�me.
    public FormulaTreeStructure goTo(int priority) {
        return this;
    }

    
    /** 
    * Inserts the icon (node) in the formula tree structure.<BR>
    * @param current the position in the formula tree where the operator is to be insert.
    * @return the new current position int hte formula tree.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        // On s'en fout.
        return null;
    }
    
    /**
    * The Creation of the corresponding linear expression of the formula.
    */
    public String createLinear(String linear) {
        return ((FormulaTreeStructure) getChild(0)).createLinear("");
    }
   
    /**
    * Evaluates the instance.
    */
    public String evaluate() {
        return ((FormulaTreeStructure) getChild(0)).evaluate();
    }
    
    /**
    * To check is the instance is an operator.
    * @return <CODE>true</CODE> if it is an operator. <CODE>false</CODE> otherwise.
    */
    public boolean isOperator() {
        return false;
    }
    
    // *****************************************
    // Impl�mentation de l'interface Iconifiable
    
    /**
    * Returns the name of the icon associated to the instance.
    *
    * @returns The name of the icon, or <CODE>null</CODE> if there is no name
    * associated.
    */
    public String getIconName() {
        return ((FormulaTreeStructure) getChild(0)).getIconName();
    }

    // *** Fin de l'interface Iconifiable ***
    // **************************************
    
    // *****************************************
    // Impl�mentation de l'interface Modifiable
    
    /**
    * Sets the value.
    */
    public void setValue(String value) {
    }
    
    /**
    * Returns the value.
    */
    public String getValue() {
        return null;
    }
    
    // *** Fin de l'interface Modifiable ***
    // *************************************
}
