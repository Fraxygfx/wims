/*
$Id: BidimDisplay.java,v 1.3 2003/02/18 11:48:46 sander Exp $
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
import fr.ove.openmath.jome.model.*;
import fr.ove.openmath.jome.model.events.*;
import fr.ove.openmath.jome.ctrlview.bidim.Display;
import fr.ove.openmath.jome.ctrlview.bidim.BidimDisplayAllocator;

/**
* The bidimensional display of the elements of the formula.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 01/07/1999
*/

public class BidimDisplay extends Display {
    /**
    * The constructor.
    * @param graphicContext the graphic context of the display.
    */
    public BidimDisplay(GraphicContext graphicContext) {
        super(graphicContext);
        if (getDisplayAllocator() == null)
            setDisplayAllocator(new BidimDisplayAllocator());
    }
    
    /**
    * Paints the display.
    * @param g where we paint the display.
    */
    public void paint(Graphics g) {
        Color old = g.getColor();
        Rectangle bounds = getBounds();
        GraphicContext gc = getGraphicContext();
        
        if (isSelected())
            g.setColor(gc.getSelectionColor());
        else
            g.setColor(gc.getBackgroundColor());
            
        g.fillRect(0, 0, bounds.width, bounds.height);
        
        g.setColor(gc.getForegroundColor());
        
        if (weDrawBounds())
            g.drawRect(0, 0, bounds.width -1, bounds.height - 1);
        
        /*
        // on trace la baseline
        g.setColor(Color.red);
        g.drawLine(0, getAscent(), bounds.width, getAscent());
        */
                
        g.setColor(old);
        super.paint(g);
    }
    
    // *****************************************************
    // Impl�mentation de l'interface ModelListenerController
    
    /**
    * Consumes (i.e. treats) the event received from the model.
    * @param modelEvent the event to consume.
    */
    public void consumeModelEvent(ModelEvent modelEvent) {
        FormulaTreeStructure fts = null;
        int action = modelEvent.getAction();
        switch (action) {
            case ModelEvent.ADD :
                // On ajoute un dispay.
                // On r�cup�re le FTS dont on doit ajouter, et par l� m�me, cr�er le display
                // qui lui est associ�.
                fts = (FormulaTreeStructure) modelEvent.getArgument();
                Display newDisplay = buildDisplay(fts.getRank());
                
                if (fts.isIcon()) {
                    SubstitutedDisplayManager iconLM = (SubstitutedDisplayManager) newDisplay.getLayout();
                    // On se trouve dans un cas particulier o�, ajouter le display de l'icone
                    // entra�ne des modifications sur le display qui le contient (i.e. l'instance courante).
                    // Il faut �liminer tous les displays dont les fts sont iconifi�es.
                    FormulaTreeStructure iconifiedFts = null;
                    Display iconifiedDisplay = null;
                    int nbIconified = ((Icon) fts).getNbIconified();
                    for (int i = 0; i < nbIconified; i++) {
                        // Prend une fts iconifi�e
                        iconifiedFts = ((Icon) fts).getIconified(i);
                        // On recherche le display qui lui est associ�
                        int count = getComponentCount();
                        for (int j = 0; j < count; j++) {
                            iconifiedDisplay = (Display) getComponent(j);
                            if (iconifiedDisplay.isDisplay(iconifiedFts))
                                break;
                        }
                        
                        if (iconifiedDisplay != null) {
                            // On en garde une trace en l'ajoutant dans le LM.
                            // Utile pour la d�siconification.
                            iconLM.addSubstitutedDisplay(iconifiedDisplay);
                            // On l'enl�ve du p�re, mais on ne veut pas qu'il soit supprim�
                            // de la liste des listeners qu'il �coute
                            iconifiedDisplay.setDoRemoveFromListListeners(false);
                            remove(iconifiedDisplay);
                            iconifiedDisplay = null;
                        }
                    }
                    
                    // On reconstruit le father pour que l'ordre des displays qui le composent
                    // corresponde � l'odre des fts dont ils sont les displays.
                    ((DisplayLayout) getLayout()).rebuildDisplay();
                }

                break;
                
            case ModelEvent.UPDATE :
                Container container = this;
                
                //container.invalidate();
                
                while (container.getParent() != null)
                    container = container.getParent();
                    
                container.validate();
                break;
                
            case ModelEvent.REBUILD :
                //System.out.println("ModelEvent.REBUILD : on rebuild le display");
                // Dans un premier temps, on regarde si la reconstruction du display n'a pas
                // �t� demand�e lors d'une d�siconification. Donc, on parcourt la liste des
                // displays contenus dans l'instance courante pour v�rifier si chacun est
                // associ� � un �l�ment de la FTS. Si tel est le cas, on peut demander la 
                // reconstruction du display. Sinon, on est dans le cas de la d�siconification,
                // et donc il faut rajouter dans la liste des displays de l'instance courante
                // tous les displays qui ont �t� pr�alablement iconifi�s.
                
                FormulaTreeStructure theFts = (FormulaTreeStructure) getListener();
                FormulaTreeStructure theFtsChild = null;
                Display theFtsChildDisplay = null;
                int nbDisplay = getComponentCount();
                // On parcourt la liste des displays.
                for (int i = 0; i < nbDisplay; i++) {
                    theFtsChildDisplay = (Display) getComponent(i);
                    theFtsChild = (FormulaTreeStructure) theFtsChildDisplay.getListener();
                    // Si theFtsChild est une icone et qu'elle n'appartient � la liste des fils de son p�re
                    // (�a veut donc dire qu'on l'a supprim�e lors d'une d�siconification), on d�siconifie
                    if (theFtsChild.isIcon() && !theFts.hasChild(theFtsChild)) {
                        Display displaySubstituted;
                        SubstitutedDisplayManager theIconLM = (SubstitutedDisplayManager) theFtsChildDisplay.getLayout();
                        // Tous les displays qui �taient iconif�s sont rajout�s � l'instance courante.
                        for (int j = 0; j < theIconLM.getNbSubstitutedDisplay(); j++) {
                            displaySubstituted = theIconLM.getSubstitutedDisplay(j);
                            add(displaySubstituted);
                            // Lors de l'iconification, quand on supprime le display iconifi�, on ne veut
                            // pas qu'il soit enlev� de la liste des listeners qu'il �coute.
                            // Par contre, quand on revient l�, on se remet dans l'�tat par d�faut qui est
                            // que l'on veut les supprimer de la liste des listeners.
                            displaySubstituted.setDoRemoveFromListListeners(true);
                        }
                        // On enl�ve le display de l'icon
                        remove(theFtsChildDisplay);
                        // On r�ajuste le nombre de displays contenus dans l'instance courante.
                        nbDisplay = getComponentCount();
                        // Idem pour l'index. Puisqu'on a enlev� un display, si on ne d�cr�mente
                        // pas i, on va en sauter 1.
                        i--;
                    }
                }
                
                // On regarde si tous les �l�ments de la fts ont des displays associ�s.
                // Sinon, il faut leur en construire un.
                int count = theFts.getNbChildren();
                boolean buildDisplay = true;
                for (int i = 0; i < count; i++) {
                    buildDisplay = true;
                    theFtsChild = (FormulaTreeStructure) theFts.getChild(i);
                    for (int j = 0; j < nbDisplay; j++) {
                        theFtsChildDisplay = (Display) getComponent(j);
                        if (theFtsChildDisplay.isDisplay(theFtsChild)) {
                            buildDisplay = false;
                            break;
                        }
                    }
                    if (buildDisplay) {
                        buildDisplay(theFtsChild.getRank());
                    }
                }
                
                // Maintenant on peut reconstruire le display, en fait le bon r�agencement des
                // displays contenus dans l'instance.
                ((DisplayLayout) getLayout()).rebuildDisplay();
                break;
                
             case ModelEvent.CREATE :
                buildDisplay();
                invalidate();
                setComputeAttributes(true);
                validate();
                repaint();
                break;
                
             case ModelEvent.CLEAR :
                removeAll();
        }
    }
    
    // *** Fin de l'interface ModelListenerController ***
    // **************************************************
    
}