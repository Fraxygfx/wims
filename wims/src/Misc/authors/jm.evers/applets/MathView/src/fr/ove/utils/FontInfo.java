/*
$Id: FontInfo.java,v 1.2 2003/02/18 11:48:48 sander Exp $
*/


package fr.ove.utils;

import java.awt.*;
import java.io.Serializable;
import java.awt.image.*;

/**
* A class that gives information about the font used.
*
* @author � 1999 DIRAT Laurent
* @version 2.0  01/09/1999
*/
public class FontInfo implements Serializable {
    /**
    * Returns the thickness of the line elements of the characters in the specified font.<BR>
    * Typically this corresponds to the width of the character '|'.
    * @param component
    * @param font the specified font
    */
    public static int getLineThickness(Component component, Font font) {
        // On cr�� une petite image contenant le caract�re '-'.
        // Le fond de cette image est blanc, tandis que le charact�re est �crit en noir.
        // Une fois l'image g�n�r�e, on va en cr�er un tableau d'entier, que l'on va parcourir jusqu'�
        // trouver un entier dont la valeur est diff�rente de la valeur du blanc. (cela correspond � tomber
        // sur le d�but du '-', l'image �tant parcourrue de haut en bas). Tant que l'on trouve cette valeur,
        // on est sur le '-'. D�s que l'on retombe sur la valeur du blanc, c'est qu'on est sorti du '-'.
        // On a r�cup�r� l'�paisseur du charact�re.
        // L'alignement sur le '-' correspond � la distance du haut de l'image sur le d�but du '-' plus la moiti�
        // de sa taille.

        Graphics g = component.getGraphics();
        // On r�cup�re les caract�ristiques de la police utilis�e
        FontMetrics fontMetrics = g.getFontMetrics(font);
        int height = fontMetrics.getHeight();
        int width = fontMetrics.stringWidth("-");
        
        // On cr�� l'image o� l'on va �crire les '|'
        Image image = component.createImage(1, height);
        g = image.getGraphics();
        // Le fond est blanc et...
        g.setColor(Color.white);
        g.fillRect(0, 0, 1, height);
        // ...on �crit en noir
        g.setColor(Color.black);
        g.setFont(font);
        g.drawString("-", -width/2, fontMetrics.getAscent());

        // On r�cup�re un tableau d'entier de l'image
	    int img[] = new int[height];
        PixelGrabber grabber = new PixelGrabber(image, 0, 0, 1, height, img, 0, 1);
        try {
    	    grabber.grabPixels();
	    }
	    catch (InterruptedException e) {
    	    System.err.println("interrupted waiting for pixels!");
	        return -1;
    	}

    	if ((grabber.getStatus() & ImageObserver.ABORT) != 0) {
	        System.err.println("image fetch aborted or errored");
	        return -1;
    	}

    	int blanc = img[0];
    	int thickness = 0;
    	for (int i = 0; i < height; i++) {
    	    if (img[i] == blanc) {
    	        if (thickness == 0)
        	        continue;  // depuis le d�but on est sur du blanc, on continue le parcours de l'image
        	    else
        	        break; // on a trouv� du noir, et on retrouve du blanc, on a l'�paisseur, on arr�te.
        	}

        	thickness++;
        }

        return (thickness > 0) ? thickness : 1;
    }
    
    /**
    * Returns the width of the specified string, with the specified font.
    * @param component
    * @param font the specified font
    * @param str the specified string.
    */
    public static int getStringWidth(Component component, Font font, String str) {
        Graphics g = component.getGraphics();
        FontMetrics fontMetrics = g.getFontMetrics(font);
        return fontMetrics.stringWidth(str);
    }
    
    /**
    * Returns the ascent corresponding to the middle of the width of the minus character
    * @param component
    * @param font the specified font
    */
    public static int getMinusAlignment(Component component, Font font) {
        // On cr�� une petite image contenant le caract�re '-'.
        // Le fond de cette image est blanc, tandis que le charact�re est �crit en noir.
        // Une fois l'image g�n�r�e, on va en cr�er un tableau d'entier, que l'on va parcourir jusqu'�
        // trouver un entier dont la valeur est diff�rente de la valeur du blanc. (cela correspond � tomber
        // sur le d�but du '-', l'image �tant parcourrue de haut en bas). Tant que l'on trouve cette valeur,
        // on est sur le '-'. D�s que l'on retombe sur la valeur du blanc, c'est qu'on est sorti du '-'.
        // On a r�cup�r� l'�paisseur du charact�re.
        // L'alignement sur le '-' correspond � la distance du haut de l'image sur le d�but du '-' plus la moiti�
        // de sa taille.

        Graphics g = component.getGraphics();
        // On r�cup�re les caract�ristiques de la police utilis�e
        FontMetrics fontMetrics = g.getFontMetrics(font);
        int height = fontMetrics.getHeight();
        int width = fontMetrics.stringWidth("-");
        
        // On cr�� l'image o� l'on va �crire les '|'
        Image image = component.createImage(1, height);
        g = image.getGraphics();
        // Le fond est blanc et...
        g.setColor(Color.white);
        g.fillRect(0, 0, 1, height);
        // ...on �crit en noir
        g.setColor(Color.black);
        g.setFont(font);
        g.drawString("-", -width/2, fontMetrics.getAscent());

        // On r�cup�re un tableau d'entier de l'image
	    int img[] = new int[height];
        PixelGrabber grabber = new PixelGrabber(image, 0, 0, 1, height, img, 0, 1);
        try {
    	    grabber.grabPixels();
	    }
	    catch (InterruptedException e) {
    	    System.err.println("interrupted waiting for pixels!");
	        return -1;
    	}

    	if ((grabber.getStatus() & ImageObserver.ABORT) != 0) {
	        System.err.println("image fetch aborted or errored");
	        return -1;
    	}

    	int blanc = img[0];
    	int thickness = 0;
    	int startMinus = 0;
    	for (int i = 0; i < height; i++) {
    	    if (img[i] == blanc) {
    	        if (thickness == 0) {
    	            startMinus++;
        	        continue;  // depuis le d�but on est sur du blanc, on continue le parcours de l'image
                }
        	    else
        	        break; // on a trouv� du noir, et on retrouve du blanc, on a l'�paisseur, on arr�te.
        	}

        	thickness++;
        }
        
        thickness /= 2;
        thickness = (thickness > 0) ? thickness : 1;
        
        return startMinus + thickness;
    }
    public static int getPlusAlignment(Component component, Font font) {
        // On cr�� une petite image contenant le caract�re '-'.
        // Le fond de cette image est blanc, tandis que le charact�re est �crit en noir.
        // Une fois l'image g�n�r�e, on va en cr�er un tableau d'entier, que l'on va parcourir jusqu'�
        // trouver un entier dont la valeur est diff�rente de la valeur du blanc. (cela correspond � tomber
        // sur le d�but du '-', l'image �tant parcourrue de haut en bas). Tant que l'on trouve cette valeur,
        // on est sur le '-'. D�s que l'on retombe sur la valeur du blanc, c'est qu'on est sorti du '-'.
        // On a r�cup�r� l'�paisseur du charact�re.
        // L'alignement sur le '-' correspond � la distance du haut de l'image sur le d�but du '-' plus la moiti�
        // de sa taille.

        Graphics g = component.getGraphics();
        // On r�cup�re les caract�ristiques de la police utilis�e
        FontMetrics fontMetrics = g.getFontMetrics(font);
        int height = fontMetrics.getHeight();
        int width = fontMetrics.stringWidth("+");
        
        // On cr�� l'image o� l'on va �crire les '|'
        Image image = component.createImage(1, height);
        g = image.getGraphics();
        // Le fond est blanc et...
        g.setColor(Color.white);
        g.fillRect(0, 0, 1, height);
        // ...on �crit en noir
        g.setColor(Color.black);
        g.setFont(font);
        g.drawString("+", -width/2, fontMetrics.getAscent());

        // On r�cup�re un tableau d'entier de l'image
	    int img[] = new int[height];
        PixelGrabber grabber = new PixelGrabber(image, 0, 0, 1, height, img, 0, 1);
        try {
    	    grabber.grabPixels();
	    }
	    catch (InterruptedException e) {
    	    System.err.println("interrupted waiting for pixels!");
	        return -1;
    	}

    	if ((grabber.getStatus() & ImageObserver.ABORT) != 0) {
	        System.err.println("image fetch aborted or errored");
	        return -1;
    	}

    	int blanc = img[0];
    	int thickness = 0;
    	int startMinus = 0;
    	for (int i = 0; i < height; i++) {
    	    if (img[i] == blanc) {
    	        if (thickness == 0) {
    	            startMinus++;
        	        continue;  // depuis le d�but on est sur du blanc, on continue le parcours de l'image
                }
        	    else
        	        break; // on a trouv� du noir, et on retrouve du blanc, on a l'�paisseur, on arr�te.
        	}

        	thickness++;
        }
        
        thickness /= 2;
        thickness = (thickness > 0) ? thickness : 1;
        
        return startMinus + thickness;
    }
}