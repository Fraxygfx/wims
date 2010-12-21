/*
$Id: RootLayout.java,v 1.3 2003/02/18 11:48:47 sander Exp $
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
import fr.ove.utils.FontInfo;

/**
* A layout manager that lays the display of the nth-root.
*
* @author � 1999 DIRAT Laurent
* @version 2.0 22/07/1999
*/
public class RootLayout extends HorizontalLayout {
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
        
        // On ajoute le tick de la racine dans la liste des display
        SymbolDisplay tick = new SymbolDisplay(this.displayToLay.getGraphicContext(), new SqrtTick());
        // Le display du tick de la racine est le display d'un op�rateur (on peut le consid�rer comme tel)
        tick.setIsSymbolOperatorDisplay(true);
        this.displayToLay.add(tick);
        
        // On met un listener au tick.
        // En fait, il n'y en a pas besoin, dans le sens o� il n'y a pas sp�cifiquement de fts qui
        // �coute le comportement de ce display. N�anmoins, il s'av�re n�cessaire qu'il en ait
        // un, par exemple lors de l'iconification, car c'est le display qui re�oit la demande
        // d'iconification qui envoie l'�v�nement correspondant � la FTS. Or si ce display n'a pas
        // d'�couteur, alors pb. Par coh�rence, l'�couteur du display d'op�rateur, est le fts qui
        // repr�sente cette op�ration. Par contre, la fts en question, n'�coute pas le display
        // d'op�rateur.
        tick.addControlListener(fts);

        // On ajoute la barre de la racine dans la liste des display
        SymbolDisplay bar = new SymbolDisplay(this.displayToLay.getGraphicContext(), new Bar());
        // Le display de la barre de la racine est le display d'un op�rateur (on peut le consid�rer comme tel)
        bar.setIsSymbolOperatorDisplay(true);
        this.displayToLay.add(bar);

        // On met un listener � la barre de la racine.
        // Idem remarque ci-dessus.
        bar.addControlListener(fts);
        
        this.displayToLay.computeAncestorsAttributes();
    }
    
    /**
    * Updates the level of the display that is layed out.<BR>
    * @param level the level put to the display
    */
    public void updateLevel(int level) {
        Display tmp;
        
        // Pour �viter de refaire le calcul plusieurs fois....
        if (displayToLay.getUpdateLevel()) {
            // On met � jour le niveau du display g�r� par le LM.
            displayToLay.setLevel(level);
            displayToLay.setUpdateLevel(false);
            
            int i = 0;
            int count = displayToLay.getComponentCount();
            // Si le nombre de composant est 4, alors on a affaire au display d'une racine n-i�me.
            // (sinon, c'et le display d'une racine carr�e)
            // On fait en sorte que la puissance de la racine soit en premi�re position dans display,
            // sinon, � l'affichage, elle va �tre en partie masqu�e par le display du tick.
            if (count == 4) {
                // On regarde si le premier display est celui d'un op�rateur (celui du tick en fait)
                // Si c'est le cas, il faut d�placer le display de la puissance.
                if (((Display) displayToLay.getComponent(0)).isSymbolOperatorDisplay()) {
                    tmp = (Display) displayToLay.getComponent(3);
                    
                    // De part l'impl�mentation du add(tmp, tmp, 0), tmp va �tre enlev� de la liste
                    // des listeners qu'il �coute. Chose qu'on ne veut pas.
                    displayToLay.removeFromListListeners(false);
                    
                    displayToLay.add(tmp, tmp, 0);
                    
                    // On se remet dans la cas classique o� la suppression de display entra�nera sa suppression
                    // dans la liste des listeners qu'il �coute.
                    displayToLay.removeFromListListeners(true);
                    
                    displayToLay.adjustRank();
                }
                
                // On r�duit la taille de la puissance de 1
                tmp = (Display) displayToLay.getComponent(0);
                ((DisplayLayout) tmp.getLayout()).updateLevel(level+1);
                tmp.setUpdateLevel(false);
                
                // On incr�mente l'indice i, pour que dans la boucle qui suit, on parte bien du display
                // du tick
                i++;
            }
            
            // le tick, la barre de la racine, et l'�l�ment sous la racine
            // ont le niveau du display qui les contient
            for (; i < count; i++) {
                tmp = (Display) displayToLay.getComponent(i);
                ((DisplayLayout) tmp.getLayout()).updateLevel(level);
                tmp.setUpdateLevel(false);
            }
        }
    }

    /**
    * Checks the validity of the selection.
    */
    public void validateSelection() {
        SelectionEvent selEvt = new SelectionEvent(displayToLay);

        // La validit� de la s�lection est triviale.
        // Si un des displays du dessin de la racine est s�lectionn� alors on s�lectionne tout.
        // Si l'�l�ment sous la racine et le num�ro de la racine ont chacun des �l�ments s�lectionn�s
        Display tick, bar;
        int count = displayToLay.getComponentCount();
        if (count == 4) {
            tick = (Display) displayToLay.getComponent(1);
            bar = (Display) displayToLay.getComponent(2);
        }
        else {
            tick = (Display) displayToLay.getComponent(0);
            bar = (Display) displayToLay.getComponent(1);
        }
        
        if (tick.isSelected() || bar.isSelected()) {
            // S�lectionne le display.
            displayToLay.select();
            // On purge la liste des �l�ments s�lectionn�s.
            selEvt.setAction(SelectionEvent.PURGE, null);
            displayToLay.fireSelectionEvent(selEvt);
            // On y ajoute os parenth�ses
            selEvt.setAction(SelectionEvent.ADD, displayToLay);
            displayToLay.fireSelectionEvent(selEvt);
        }
        else {
            if (count == 4) {
                Display nthRoot = (Display) displayToLay.getComponent(0);
                Display arg = (Display) displayToLay.getComponent(3);
                if (nthRoot.gotSelectedElements() && arg.gotSelectedElements()) {
                    // S�lectionne le display.
                    displayToLay.select();
                    // On purge la liste des �l�ments s�lectionn�s.
                    selEvt.setAction(SelectionEvent.PURGE, null);
                    displayToLay.fireSelectionEvent(selEvt);
                    // On y ajoute os parenth�ses
                    selEvt.setAction(SelectionEvent.ADD, displayToLay);
                    displayToLay.fireSelectionEvent(selEvt);
                }
            }
        }
        
        // On a v�rifi� la validit� de la s�lection de la racine. On doit maitenant
        // la contr�ler au niveau sup�rieur, au niveau du p�re.
        Display display = displayToLay;
        if (display.getParent() instanceof Display) {
            display = (Display) display.getParent();
            FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
            if (fts.getFather() != null) // Si fts est la racine de la formule alors la s�lection � d�j� �t� valid�e
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
        SelectionEvent selEvt = new SelectionEvent(father);
        
        if (father.isSelected()) {
            father.setNotSelected();
            // On enl�ve le display p�re de la liste des display s�lectionn�s.
            selEvt.setAction(SelectionEvent.REMOVE, father);
            father.fireSelectionEvent(selEvt);
            
            Display tick, bar, arg;
            Display nthRoot = null;
            
            if (father.getComponentCount() == 4) {
                nthRoot = (Display) father.getComponent(0);
                tick = (Display) father.getComponent(1);
                bar = (Display) father.getComponent(2);
                arg = (Display) father.getComponent(3);
            }
            else {
                tick = (Display) father.getComponent(0);
                bar = (Display) father.getComponent(1);
                arg = (Display) father.getComponent(2);
            }
            
            if ((display == tick) || (display == bar)) {
                // Comme on ne sait pas de qui on vient, on d�s�lectionne les 2
                tick.setNotSelected();
                bar.setNotSelected();
                // On consid�re que le comportement par d�faut et de s�lectionner l'argument de la racine.
                // M�me si on est dans le cas d'une racine n-i�me (on d�s�lectionne donc le num�ro de la racine)
                selEvt.setAction(SelectionEvent.ADD, arg);
                father.fireSelectionEvent(selEvt);
                
                if (nthRoot != null)
                    nthRoot.deselect();
            }
            else if (display == arg) {
                tick.setNotSelected();
                bar.setNotSelected();
                
                if (nthRoot != null) {
                    selEvt.setAction(SelectionEvent.ADD, nthRoot);
                    father.fireSelectionEvent(selEvt);
                }
            }
            else {  // ben forc�ment, display == nthRoot
                tick.setNotSelected();
                bar.setNotSelected();
                selEvt.setAction(SelectionEvent.ADD, arg);
                father.fireSelectionEvent(selEvt);
            }
            
            
            // Comme pour la s�lection, on contr�le la validit� de la d�s�lection.
            if (father.getParent() instanceof Display) {
                father = (Display) father.getParent();
                FormulaTreeStructure fts = (FormulaTreeStructure) display.getListener();
                if (fts.getFather() != null) // Si fts est la racine de la formule alors la d�s�lection � d�j� �t� valid�e
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
    * Computes the size of the display according to its children size (if any),
    * and its different attributes.
    * @return the size of the display.
    */
    public Dimension computeAttributes() {
        updateLevel(displayToLay.getLevel());
            
        int width = 0;
        int height = 0;
        
        int thickness = FontInfo.getLineThickness(displayToLay, displayToLay.getFont());
        
        Display arg;
        SymbolDisplay barDisplay, tickDisplay;
        Bar bar;
        SqrtTick tick;
        
        int count = displayToLay.getComponentCount();
        
        if (count == 4) {
            tickDisplay = (SymbolDisplay) displayToLay.getComponent(1);
            barDisplay = (SymbolDisplay) displayToLay.getComponent(2);
            arg = (Display) displayToLay.getComponent(3);
        }
        else {
            tickDisplay = (SymbolDisplay) displayToLay.getComponent(0);
            barDisplay = (SymbolDisplay) displayToLay.getComponent(1);
            arg = (Display) displayToLay.getComponent(2);
        }
        
        // On calcule la taille du display de l'�l�ment sous la racine
        arg.invalidate();
        arg.setComputeAttributes(true);
        ((DisplayLayout) arg.getLayout()).computeAttributes();
        arg.setSize(arg.getPreferredSize());
        
        // On calcule la taille du display de la barre de la racine
        bar = (Bar) barDisplay.getSymbol();
        bar.setHeight(thickness);
        bar.setWidth(arg.getWidth() + 4);
        barDisplay.invalidate();
        barDisplay.setComputeAttributes(true);
        barDisplay.setSize(barDisplay.getPreferredSize());
        
        // On met un d�calage vertical au display de la barre pour qu'il se trouve au dessus du display
        // de l'argument.
        barDisplay.setShiftY(-arg.getAscent() - barDisplay.getDescent() );
        // On met un d�calage horizontal au display de l'argument pour que son c^t� gauche soit align�
        // au display de la barre.
        arg.setShiftX(-bar.getWidth());
        
        // On calcule la taille du display du "tick" de la racine
        tick = (SqrtTick) tickDisplay.getSymbol();
        tick.setThickness(thickness);
        tick.setHeight(arg.getHeight() + thickness);
        tick.setWidth(displayToLay.getFontMetrics(displayToLay.getFont()).stringWidth("A"));
        tick.setAscent(arg.getAscent() + thickness);
        tick.setDescent(arg.getDescent());
        tickDisplay.invalidate();
        tickDisplay.setComputeAttributes(true);
        tickDisplay.setSize(tickDisplay.getPreferredSize());
        
        int ascent;
        
        if (count == 4) {
            // On a le display d'une racine n-i�me.
            // On s'occupe du display de la puissance de la racine.
            Display nthRoot = (Display) displayToLay.getComponent(0);
            nthRoot.setSize(nthRoot.getPreferredSize());
            
            // On fixe maintenant les d�calages n�cessaires � chacun des display pour leur bon
            // positionnement.
            nthRoot.setShiftY(-(int) Math.round(0.42f * (float) tickDisplay.getAscent()) - nthRoot.getDescent());
            tickDisplay.setShiftX(-tickDisplay.getWidth() / 2);
            
            width += nthRoot.getWidth() + (tickDisplay.getWidth()/2) + barDisplay.getWidth();
            ascent = Math.max(nthRoot.getAscent() - nthRoot.getShiftY(), tickDisplay.getAscent());
        }
        else {
            width += tickDisplay.getWidth() + barDisplay.getWidth();
            ascent = tickDisplay.getAscent();
        }
        
        height +=  ascent + arg.getDescent();
                
        displayToLay.setSize(width, height);
        displayToLay.setAscent(ascent);
        displayToLay.setDescent(arg.getDescent());
        
        displayToLay.setComputeAttributes(false);
        
        return new Dimension(width, height);
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
