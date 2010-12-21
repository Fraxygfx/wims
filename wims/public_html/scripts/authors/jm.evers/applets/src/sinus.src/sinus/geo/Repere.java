
/*	
 Licence
 Copyright J.P. Quelen
 This is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; 
 It is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with this program. If not, see <http://www.gnu.org/licenses/>.
*/ 

package geo ;

import java.awt.Graphics ;

/**
 * D�finit un rep�re orthogonal.
 * Le point de coordonn�es r�elles (x, y) a pour position dans la fen�tre d'affichage (X, Y)
 * o� l'entier X varie de 0 � XMAX et Y de 0 � YMAX (vers le bas).
 * (XO, YO) donne la position de l'origine sur l'�cran et unitex, unitey fixent les unit�s sur les
 * deux axes.
 */

public class Repere
{

/**
 * Abscisse de l'origine du rep�re dans la fen�tre d'affichage.
 */

  public int X0 ;

/**
 * Ordonn�e de l'origine du rep�re dans la fen�tre d'affichage.
 */

  public int Y0 ;

/**
 * Abscisse maximale.
 */

   public int XMAX ;

/**
 *
 * Ordonn�e maximale.
 */

   public int YMAX ;

/**
 * Valeur en points "�cran" de l'unit� suivant l'axe des x ; unitex = unitey pour un rep�re orthonormal.
 */

  public double unitex ;

/**
 * Valeur en points "�cran" de l'unit� suivant l'axe des y.
 */

  public double unitey ;

/**
 * Construit le rep�re orthogonal.
 */

  public Repere (int X0,int Y0,int XMAX,int YMAX,double unitex,double unitey)
  { this.X0 = X0; this.Y0 = Y0;
    this.XMAX = XMAX ; this.YMAX = YMAX ;
    this.unitex = unitex ; this.unitey = unitey ;
  }

/**
 * Trace le rep�re.
 */

  public void trace (Graphics g)
  { int UX = X0 + new Double (unitex) . intValue () ;
    int UY = Y0 - new Double (unitey) . intValue () ;
    if ((Y0 >= 0) && (Y0 <= YMAX)) { g.drawLine (0, Y0, XMAX, Y0) ;
                                        if ((UX >= 0) && (UX <= XMAX))
                                              g.drawLine (UX, Y0 - 2, UX, Y0 + 2) ;
                                      } 
    if ((X0 >= 0) && (X0 <= XMAX)) { g.drawLine (X0, 0, X0, YMAX) ;
                                        if ((UY >= 0) && (UY <= YMAX))
                                              g.drawLine (X0 - 2, UY, X0 + 2, UY);
                                      }
    }

/**
 * Trace un cadre.
 */

  public void cadre (Graphics g)
  { g.drawRect (0, 0, XMAX - 1, YMAX - 1) ; }

/**
 * Retourne la position X sur l'�cran d'un point d'abscisse x.
 */

  public int Iabs (double x)
  { return (int) (x * unitex + X0); }

/**
 * Retourne la position Y sur l'�cran d'un point d'abscisse y.
 */

  public int Iord (double y)
  { return (int) (- y * unitey + Y0); }

/**
 * Retourne l'abscisse x d'un point plac� en position (X, Y) sur l'�cran.
 */

  public double Abs (int X)
  { return (X - X0) / unitex ; }

/**
 * Retourne l'ordonn�e y d'un point plac� en position (X, Y) sur l'�cran.
 */

  public double Ord (int Y)
  { return (Y0 - Y) / unitey ; }

/**
 * Retourne "true" si le point plac� en position (X, Y) sur l'�cran est affichable.
 */

  public boolean affiche (int X, int Y)
  { return ((X >= 0) && (X <= XMAX) && (Y >= 0) && (Y <= YMAX)); }

/**
 * Mise � jour du rep�re orthogonal.
 */

  public void Repere (int X0,int Y0,int XMAX,int YMAX,double unitex,double unitey)
  { this.X0 = X0; this.Y0 = Y0;
    this.XMAX = XMAX ; this.YMAX = YMAX ;
    this.unitex = unitex ; this.unitey = unitey ;
  }

}

