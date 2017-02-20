/*                                                                                                             
License.                                                                                                       
This is free software; you can redistribute it and/or modify                                                   
it under the terms of the GNU General Public License as published by                                           
the Free Software Foundation;                                                                                  
HotEqn is distributed in the hope that it will be useful,                                                      
but WITHOUT ANY WARRANTY; without even the implied warranty of                                                 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                                                  
GNU General Public License for more details.                                                                   
You should have received a copy of the GNU General Public License                                              
along with this program.  If not, see <http://www.gnu.org/licenses/>.                                          
*/ 
/*
 * @(#)CellRange.java
 *
 * $Id: CellRange.java,v 1.13 2000/12/02 21:44:51 rkc10 Exp $
 *
 * Created on November 5, 2000, 1:19 AM
 */
package SharpTools; 
/** 
 * This class specifies how a range of cells are represented.
 * <p>
 * A range is a continuous rectangular area that can be specified by its
 * upper left corner (minCorner) and lower right corner (maxCorner).
 * 
 * @author Ricky Chin
 * @version $Id: CellRange.java,v 1.13 2000/12/02 21:44:51 rkc10 Exp $
 */
public class CellRange {
    
    /** Upper left corner of range */
    CellPoint minCorner;

    /** Lower right corner of range */
    CellPoint maxCorner;

    /** Creates new CellRange. In assumes that the array parameters have
     * entries listed in ascending order. In other words, the row array
     * has the row with the smallest number in index 0 and largest
     * row in the last index. The same goes for the column array.
     * @param rows the array range of rows
     * @param cols the array range of columns
     */
    public CellRange(int[] rows, int[] cols) {
        //rows selected are in ascending order
        int minRow = rows[0];
        int maxRow = rows[rows.length - 1];
        
        //columns selected are in ascending order
        int minCol = cols[0];
        int maxCol = cols[cols.length - 1];
		
         minCorner = new CellPoint(minRow, minCol);
         maxCorner = new CellPoint(maxRow, maxCol);
	}
    
    /**
     * This contructor takes x1, x2, y1, y2 and constructs a range.
     * 
     * @param minRow upper left corner row coordinate
     * @param minCol upper left corner col coordinate
     * @param maxRow lower right corner row coordinate
     * @param maxCol lower right corner col coordinate
     */
    public CellRange(int minRow, int maxRow, int minCol, int maxCol) {
	
	minCorner = new CellPoint(minRow, minCol);
	maxCorner = new CellPoint(maxRow, maxCol);
    }

    /**
     * This constructor takes two CellPoints to construct a range.
     * 
     * @param ULHCorner upper left corner
     * @param LRHCorner lower right corner
     */
    public CellRange(CellPoint ULHCorner, CellPoint LRHCorner) {
            minCorner = ULHCorner;
            maxCorner = LRHCorner;
    }
    
    /**
     * This returns the first row in the range.
     * 
     * @return first row of range
     */
    public int getStartRow() {
        return minCorner.getRow();
    }
    
    /**
     * This returns the last row in the range.
     * 
     * @return last row of range
     */
    public int getEndRow() {
        return maxCorner.getRow();
    }
    
    /**
     * This returns the first column in the range.
     * 
     * @return first column of range
     */
    public int getStartCol() {
        return minCorner.getCol();
    }
    
    /**
     * This returns the last column in the range.
     * 
     * @return last column of range
     */
    public int getEndCol() {
        return maxCorner.getCol();
    }
    
    /**
     * This returns the number of columns in the range.
     * 
     * @return number of columns in range
     */
    public int getWidth() {
        return getEndCol() - getStartCol() + 1;
    }
    
    /**
     * This returns the number of rows in the range.
     *
     * @return number of rows in range
     */
    public int getHeight() {
        return getEndRow() - getStartRow() + 1;
    }

    /** This returns the upper left corner of the range
     * @return the upper left corner of the range
     */
    public CellPoint getminCorner() {
        return minCorner;
    }
    /** This returns the lower right corner of the range
     * @return the lower right corner of the range
     */    
    public CellPoint getmaxCorner() {
        return maxCorner;
    }

    /**
     * This returns a string represetation of the difference of the upper left
     * and lower right corners
     *
     * @return string minCorner - maxCorner
     */
    public String toString() {
	return minCorner.toString()+':'+maxCorner.toString();
    }
}
