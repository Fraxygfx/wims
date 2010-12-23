
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
 * Objet g�om�trique li� � un rep�re.
 */

public class ObjetRepere
{

/**
 * Repere associ�.
 */

  public Repere R ;

/**
 * Existence de l'objet.
 */

  public boolean defini ;

/**
 * Nom de l'objet.
 */

  public String Nom ;

/**
 * Construit un objet non d�fini.
 */

  public ObjetRepere (String Nom, Repere R )
  { this.Nom = Nom ; this.R = R ; defini = false ; }

/**
 * Test la proximit� de la souris.
 */

  public boolean zone (int X, int Y)
  { return false ; }

/**
 * Trace l'objet.
 */

  public void trace (Graphics g)
  {  }

}
