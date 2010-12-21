
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

// pt.java - 09/12/98

package geo ;

import java.awt.Graphics ;

/**
 * Point de coordonn�es (x, y). X, Y sont les coordonn�es sur l'�cran.
 * La variable Nom contient le Nom de ce point (souvent une lettre) ;
 * R est le rep�re attach� � ce point ;
 * defini pr�cise si le point existe r�ellement (utile pour les probl�mes d'intersection).
 */

public class pt extends ObjetRepere
{

/**
 * Position du point sur l'�cran.
 */

  public int X, Y ;

/**
 * Abscisse du point.
 */

  public double x ;

/**
 * Ordonn�e du point.
 */

  public double y ;

/**
 * Construit un point abstrait.
 */

  public pt (String Nom, Repere R)
  { super (Nom, R) ; }

/**
 * Construit la copie du point A.
 */

  public pt (pt A, String Nom, Repere R)
  { super (Nom, R) ; X = A.X ; Y  = A.Y ;
    x = A.x ; y = A.y ;
    defini = A.defini ; }

/**
 * Construit le point par sa position (X, Y) dans la fen�tre d'affichage.
 */

  public pt (int X, int Y, String Nom, Repere R)
  { super (Nom, R) ; this.X = X ; this.Y = Y ;
    x = R.Abs (X) ; y = R.Ord (Y) ;
    defini = true ; }


/**
 * Construit le point de coordonn�es (x, y) relativement au rep�re R.
 */

  public pt (double x, double y, String Nom, Repere R)
  { super (Nom, R) ;
    this.x = x ; this.y = y ; 
    majXY () ; defini = true ; }

/**
 * Met � jour la position (X, Y) du point � l'aide des coordonn�es (x, y).
 */

  public void majXY ()
  { X = R.Iabs (x) ; Y = R.Iord (y) ; }


/**
 * Positionnement du point au milieu du bi-point AB.
 */

  public void Milieu (pt A, pt B)
  { x = (A.x + B.x) / 2.0 ; y = (A.y + B.y) / 2.0 ;
    majXY () ;
    defini = A.defini && B.defini ; }

/**
 * Point sur le sym�trique de A par rapport au point C.
 */

  public void Symetrique (pt A, pt C)
  { defini = A.defini && C.defini ;
    if (defini) { x = 2.0 * C.x - A.x ; y = 2.0 * C.y - A.y ; majXY () ; }
  }

/**
 * Donne l'image du point A par la rotation de centre O et d'angle a.
 */

   public void Rotation (pt A, pt O, double a)
   { defini = A.defini && O.defini ;
     if (defini) { double OAx = A.x - O.x ;
                   double OAy = A.y - O.y ;
                   double cosa = Math.cos (a) ;
                   double sina = Math.sin (a) ;
                   x = O.x + cosa * OAx - sina * OAy ;
                   y = O.y + sina * OAx + cosa * OAy ;
                   majXY () ;
                 }
   }

/**
 * Donne l'image du point A par l'homoth�tie de centre O et de rapport k.
 */

   public void Homothetique (pt A, pt O, double k)
   { defini = A.defini && O.defini ;
     if (defini) { x = O.x + k * (A.x - O.x) ;
                   y = O.y + k * (A.y - O.y) ;
                   majXY () ;
                 }
   }

/**
 * Donne la distance du point A au point courant.
 */

   public double Distance (pt A)
   { if (defini && A.defini)
       { double dx = x - A.x ; double dy = y - A.y ;
         return Math.sqrt(dx * dx + dy * dy) ;
       }
     else return -1.0 ; }

/**
 * teste si la souris est proche du point libre, retourne alors deplace = true
 */

  public boolean zone (int X, int Y)
  { return ((X >=  this.X - 2) && (X <= this.X + 2) && (Y >= this.Y - 2) && (Y <= this.Y + 2)) ; }

/**
 * Trace ou efface le point.
 */

  public void trace (Graphics g)
  { if (defini) { g.fillRect (X - 1, Y - 1, 3, 3);
                  if (Nom.length () != 0) g.drawString (Nom, X + 3, Y - 3); } }

/**
 * Trace ou efface uniquement le Nom du point.
 */

  public void traceNom (Graphics g)
  { if (defini && (Nom.length () != 0)) g.drawString (Nom, X + 3, Y - 3) ; }

/**
 * Red�finit le point par des coordonn�es (x, y).
 */

  public void point (double x, double y)
  { this.x = x ; this.y = y ; majXY () ; defini = true ; }

/**
 * Red�finit le point.
 */

  public void point ()
  { majXY () ; }

}
