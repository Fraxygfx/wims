/*
$Id: Icon.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.openmath.jome.ctrlview.events.*;
import fr.ove.openmath.jome.model.evaluation.*;

/**
* This is an fictive operator which replaces a real part (real in a syntactical 
* mathematical meaning) of the formula  by an icon.<BR>
*
* <CODE>Icon</CODE> represents a node in the formula tree structure.<BR>
* Its children are the iconified parts of the formula.
*
* @author � 1998 DIRAT Laurent
* @version 1.0  23/07/98
*/
public class Icon extends FormulaTreeStructure {
    /**
    * The icon name.
    */
    private String iconName = null;    // Le nom de l'icone
    
    /**
    * The list of iconified elements of the formula.
    */
    private Vector iconified = new Vector();
    
    /**
    * The rank in the FTS of the iconified elements.
    */
    private Vector rankOfIconified = new Vector(); // On en a besoin si on veut lors de la d�isconification
    // essayer de garder la position initiale de chaque �l�ment iconifi�. En effet, � chaque fois 
    // que l'on supprime/ajoute un �l�ment de/dans la FTS, le rang des �l�ments est mis � jour, et
    // comme iconified est une liste qui contient des r�f�rences sur des �l�ments de la FTS, quand
    // le rang des �l�ments de la FTS est mis � jour, le rang des �l�ments de iconified est mis �
    // jour �galement. Donc on perd la "VRAI" position initiale.
    
    /**
    * Sets if the icon represents a substitution or not.<BR>
    * The default is no, this means that the iconification process is an "automatic" one,
    * i.e. the icon represents what is iconified.<BR>
    * The substitution is when the user want to replace a selection by a friendly term.
    * (Ex : Let a+b be EXP, the expression a+b+c becomes EXP+c)
    */
    private boolean isSubstitution = false;
    
    /**
    * The Constructor.<BR>
    * @param toIconify the element (or part of the element, according to the case) to iconify
    * in order to get the information for the icon name
    * 
    */
    public Icon(FormulaTreeStructure toIconify) {
        this(toIconify.getIconName());
        isSubstitution = false;
    }
    
    /**
    * The Constructor.
    * @param iconName the name of the icon
    */
    public Icon(String iconName) {
        setResourceIdentifier("ICON");
        setAsOperatorPriority(resourcesManager.getAsOperatorPriority("constantPriorities"));
        setAsOperandPriority(resourcesManager.getAsOperandPriority("constantPriorities"));
        isSubstitution = true;
        this.iconName = iconName;
    }
    
    /** 
    * Inserts the icon (node) in the formula tree structure.<BR>
    * @param current the position in the formula tree where the operator is to be insert.
    * @return the new current position int hte formula tree.
    */
    public FormulaTreeStructure insert(FormulaTreeStructure current) {
        // La m�thode utilis�e pour l'insertion de l'icon est la m�me, mais 
        // son comportement diff�re dans l'ensemble de celui des autres fts.
        // En effet current est la position d'insertion, puisque c'est � sa 
        // place, que l'instance courante va �tre ins�r�e.
        // De plus la valeur de retour n'est pas utilis�e.
        
        // On prend le p�re de current pou l'insertion.
        FormulaTreeStructure father = (FormulaTreeStructure) current.getFather();
        // On r�cup�re le rank de current (i.e. la position d'insertion dans father)
        int rank = current.getRank();
        // On ins�re notre icone (i.e l'instance courante)
        father.addChild(this, rank);
        // On parcourre toutes les fts inconifi�es pour les enlever de father.
        for (int i = 0; i < iconified.size(); i++)
            father.removeChild((FormulaTreeStructure) iconified.elementAt(i));
        
        return null;
    }
    
    /**
    * To check is the instance is an operator.
    * @return <CODE>true</CODE> if it is an operator. <CODE>false</CODE> otherwise.
    */
    public boolean isOperator() {
        return false;
    }
        
    /**
    * The Creation of the corresponding linear expression of the formula.
    */
    public String createLinear(String linear) {
        // Si le nombre d'�l�ments iconifi�s est 1, alors on concat�ne la forme lin�aire de cet �l�ment
        // Sinon, c'est qu'on a iconifi� plusieurs op�randes d'une op�ration. On doit concat�ner la
        // forme lin�aire de cette sous-expression.
        
        int nbIconified = iconified.size();
        if (nbIconified == 1) 
            linear = getIconified(0).createLinear(linear);
        else {
            FormulaTreeStructure father = (FormulaTreeStructure) getIconified(0).getFather();
            // On duplique le father pour avoir la m�thode createLinear
            father = (FormulaTreeStructure) father.duplicate();
            // On ajoute � father les �l�ments iconifi�s
            for (int i = 0; i < nbIconified; i++)
                father.addChild(getIconified(i));
            // On r�cup�re la sous-expression
            linear = father.createLinear(linear);
        }
        
        return linear;
    }
    
    /**
    * Sets if the instance represents a substitution or not.
    * @param isSubstitution <CODE>true</CODE> if the instance is a substitution.
    * <CODE>false</CODE> otherwise.
    */
    public void setIsSubstitution(boolean isSubstitution) {
        this.isSubstitution = isSubstitution;
    }
    
    /**
    * Returns <CODE>true</CODE> if the instance is a substitution.
    * <CODE>false</CODE> otherwise.
    */
    public boolean isSubstitution() {
        return isSubstitution;
    }
    
    // On a red�fini une liste d'op�rateur fils (les op�rateurs iconifi�s) malgr� le fait que 
    // l'on �tende FormulaTreeStructure pour �viter que l'insertion ne change le rang d'un 
    // op�rateur parmi les fils de son p�re pour que, lors de la d�siconification, il se retrouve
    // � la m�me place. De plus, le fait de rajouter des fils comme si Icon �tait un op�rateur
    // entra�nerai la poursuite de la recherche dans l'arbre alors que l'on ne
    // souhaite pas, cela poserait des probl�mes lors de l'affichage.
    
    /*
    * Adds into the list of the fts to iconify, a fts ... to iconify.
    * @param fts a formula tree structure to iconify.
    */
    public void addIconified(FormulaTreeStructure fts) {
        iconified.addElement(fts);
        // On conserve le rang dans la FTS
        rankOfIconified.addElement(new Integer(fts.getRank()));
    }
    
    /**
    * Returns the number of iconified operators.
    * @return the number of iconified operators.
    */
    public int getNbIconified() {
        return iconified.size();
    }
    
    /**
    * Returns the formula tree structure at the specified rank in the list of the fts to iconify.
    * @param rank a rank into the list of fts to iconify.
    * @return the fts at the specified rank.
    */
    public FormulaTreeStructure getIconified(int rank) {
        return (FormulaTreeStructure) iconified.elementAt(rank);
    }
    
    /**
    * Returns the rank in the formula tree structure of the iconified element at the specified
    * rank in the list of iconified elments, before iconification.
    * @param rank a rank into the list of fts to iconify.
    * @return the rank in the FTS of the fts at the specified rank.
    */
    public int getRankOfIconified(int rank) {
        return ((Integer) rankOfIconified.elementAt(rank)).intValue();
    }
    
    /**
    * Evaluates the instance.
    */
    public String evaluate() {
        // A voir ce qu'on fait pour plus tard
        return "";
    }

    
    // *****************************************
    // Impl�mentation de l'interface Iconifiable
    
    /**
    * @return <CODE>true</CODE> if the instance is an icon. <CODE>false</CODE> otherwise.
    */
    public boolean isIcon() {
        return true;
    }
    
    /**
    * Associates an icon name to the instance.
    * @param iconName the name of the icon
    */
    public void setIconName(String iconName) {
        this.iconName = iconName;
    }
    
    /**
    * Returns the name of the icon associated to the instance.
    *
    * @returns The name of the icon, or <CODE>null</CODE> if there is no name
    * associated.
    */
    public String getIconName() {
        if (!isSubstitution) {
            // Si le nombre d'�l�ments iconifi�s est 1, alors le nom de l'icone est le nom
            // de l'�l�ment � iconifier.
            // Sinon, c'est qu'on a � iconifier plusieurs op�randes d'une op�ration, donc le nom
            // de l'icone correspond � celui de cette op�ration, donc au nom du p�re de l'instance.
            if (iconified.size() == 1) 
                iconName = getIconified(0).getIconName();
            else
                iconName = ((FormulaTreeStructure) getFather()).getIconName();
        }
        
        return iconName;
    }
    
    /**
    * Returns <CODE>true</CODE> if the instance is iconifiable.
    * <CODE>false</CODE> otherwise.
    */
    public boolean isIconifiable() {
        return false;  // On n'iconifie pas une icone !!!
    }
    
    /**
    * Iconifies the instance.
    */
    public void iconify() {
        // On n'iconifie pas une icone
    }
    
    /**
    * Uniconifies the instance.
    */
    public void uniconify() {
        FormulaTreeStructure father = (FormulaTreeStructure) getFather();
        // On enl�ve notre icon (i.e. l'instance).
        father.removeChild(this);
        // On parcourre la liste des fts iconifi�es pour les r�ins�rer � leur position
        // avant iconification. (heuu... ce sera leur ancienne position si aucune modif.
        // de father n'a �t� faite, of course.)
        int fatherNbChildren = father.getNbChildren();
        int countIconified = iconified.size();
        FormulaTreeStructure iconifiedFts = null;
        int rankOfIconifiedFts;
        for (int i = 0; i < countIconified; i++) {
            iconifiedFts = (FormulaTreeStructure) iconified.elementAt(i);
            rankOfIconifiedFts = getRankOfIconified(i);
            if (rankOfIconifiedFts > fatherNbChildren)
                father.addChild(iconifiedFts);
            else
                father.addChild(iconifiedFts, rankOfIconifiedFts);
                
            // On a ajout� une fts anciennement iconifi�e, on incr�mente donc le nbre
            // d'enfant du p�re
            fatherNbChildren++;
        }
    }
    
    // *** Fin de l'interface Iconifiable ***
    // **************************************
}
