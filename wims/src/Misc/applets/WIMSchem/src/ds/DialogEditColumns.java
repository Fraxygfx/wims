/*
    WIMSchem Elements: Chemistry molecular diagram drawing tool.
    
    (c) 2008 Dr. Alex M. Clark
    
    Released as GNUware, under the Gnu Public License (GPL)
    
    See www.gnu.org for details.
*/

package WIMSchem.ds;

import WIMSchem.*;

import java.io.*;
import java.awt.*;
import java.util.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
import javax.swing.table.*;

/*
    A dialog box which allows the columns of a table to be edited, and then calculates the effect of such edits.
*/

public class DialogEditColumns extends JDialog implements ActionListener
{
    JButton bappend,bdelete,bmoveup,bmovedn,baccept,breject;
    JTable table;
    SchemaDataModel model;
    DataSheet ds;

    ArrayList<Integer> idx=new ArrayList<Integer>();
    ArrayList<String> name=new ArrayList<String>();
    ArrayList<Integer> type=new ArrayList<Integer>();
    ArrayList<String> descr=new ArrayList<String>();
    
    int[] resultOldPos=null,resultNewPos=null,resultType=null;
    String[] resultName=null,resultDescr=null;
    
    public DialogEditColumns(Frame Parent,DataSheet DS)
    {
    	super(Parent,"Edit Column Layout",true);
	ds=DS;
	
	setLayout(new BorderLayout());
	
	for (int n=0;n<ds.NumCols();n++)
	{
	    idx.add(new Integer(n+1));
	    name.add(ds.ColName(n));
	    type.add(new Integer(ds.ColType(n)));
	    descr.add(ds.ColDescr(n));
	}
	model=new SchemaDataModel(idx,name,type,descr);
	table=new JTable(model);
	    
	SetColumnModel();
	
	JPanel buttons=new JPanel();
	buttons.setLayout(new FlowLayout(FlowLayout.RIGHT));
    	bappend=new JButton("Append"); bappend.addActionListener(this); bappend.setMnemonic(KeyEvent.VK_P);
	bdelete=new JButton("Delete"); bdelete.addActionListener(this); bdelete.setMnemonic(KeyEvent.VK_D);
	bmoveup=new JButton("Move Up"); bmoveup.addActionListener(this); bmoveup.setMnemonic(KeyEvent.VK_U);
	bmovedn=new JButton("Move Down"); bmovedn.addActionListener(this); bmovedn.setMnemonic(KeyEvent.VK_N);
	baccept=new JButton("Accept"); baccept.addActionListener(this); baccept.setMnemonic(KeyEvent.VK_A);
	breject=new JButton("Reject"); breject.addActionListener(this); breject.setMnemonic(KeyEvent.VK_R);

    	buttons.add(bappend);
	buttons.add(bdelete);
	buttons.add(bmoveup);
	buttons.add(bmovedn);
	buttons.add(baccept);
	buttons.add(breject);

    	add(new JScrollPane(table),BorderLayout.CENTER);
	add(buttons,BorderLayout.SOUTH);
	
	pack();
    }

    private void SetColumnModel()
    {
	JComboBox colTypes=new JComboBox();
    	colTypes.addItem(DataSheet.TypeName(DataSheet.COLTYPE_MOLECULE));
    	colTypes.addItem(DataSheet.TypeName(DataSheet.COLTYPE_STRING));
    	colTypes.addItem(DataSheet.TypeName(DataSheet.COLTYPE_REAL));
    	colTypes.addItem(DataSheet.TypeName(DataSheet.COLTYPE_INTEGER));
    	colTypes.addItem(DataSheet.TypeName(DataSheet.COLTYPE_BOOLEAN));
	table.getColumnModel().getColumn(2).setCellEditor(new DefaultCellEditor(colTypes));
    	table.setPreferredScrollableViewportSize(new Dimension(350,200));
	table.getColumnModel().getColumn(0).setMaxWidth(40);
	table.getColumnModel().getColumn(1).setMaxWidth(150);
	table.getColumnModel().getColumn(2).setMaxWidth(100);
    }

    private void ActionAppend()
    {
	idx.add(0);
	name.add("");
	type.add(DataSheet.COLTYPE_STRING);
	descr.add("");
	model.fireTableStructureChanged();
	SetColumnModel();
    }

    private void ActionDelete()
    {
    	int i=table.getSelectedRow();
	if (i<0) return;
	idx.remove(i);
	name.remove(i);
	type.remove(i);
	descr.remove(i);
	model.fireTableStructureChanged();
	SetColumnModel();
    }
    
    private void ActionMove(int Dir)
    {
    	int i=table.getSelectedRow();
	if (i<0 || i+Dir<0 || i+Dir>=idx.size()) return;

	idx.add(i+Dir,idx.remove(i));
	name.add(i+Dir,name.remove(i));
	type.add(i+Dir,type.remove(i));
	descr.add(i+Dir,descr.remove(i));

	model.fireTableStructureChanged();
	SetColumnModel();
    	table.changeSelection(i+Dir,table.getSelectedColumn(),false,false);
    }

    private void ActionAccept()
    {
    	for (int n=0;n<idx.size();n++) if (name.get(n).length()==0)
	{
    	    JOptionPane.showMessageDialog(null,"All columns must be named.","Invalid",JOptionPane.ERROR_MESSAGE);
	    return;
	}

    	// count retained+new+deleted
    	int nsz=ds.NumCols();
	boolean[] retained=new boolean[ds.NumCols()];
	for (int n=0;n<idx.size();n++) 
	{
	    int i=idx.get(n).intValue();
	    if (i==0) nsz++; else retained[i-1]=true;
	}
	
	// build up the indices: add the retained and new columns first, then the deleted columns
    	int[] oldIdx=new int[nsz],newIdx=new int[nsz],newType=new int[nsz];
	String[] newName=new String[nsz],newDescr=new String[nsz];
	
	int pos=0;
	for (int n=0;n<idx.size();n++,pos++)
	{
	    oldIdx[n]=idx.get(n).intValue()-1;
	    newIdx[n]=pos;
	    newName[n]=name.get(n);
	    newType[n]=type.get(n).intValue();
	    newDescr[n]=descr.get(n);
	}
	for (int n=0;n<retained.length;n++) if (!retained[n]) 
	{
	    oldIdx[pos]=n;
	    newIdx[pos]=-1;
	    // (other fields left blank)
	    pos++;
	}
	
	// make a string version of the to-do list
	String explan="";
	for (int n=0;n<oldIdx.length;n++)
	{
	    if (oldIdx[n]<0 && newIdx[n]>=0)
	    {
	    	explan+="New column: ["+newName[n]+"], type: "+DataSheet.TypeName(newType[n])+"\n";
	    }
	    else if (oldIdx[n]>=0 && newIdx[n]<0)
	    {
	    	explan+="Delete column: ["+ds.ColName(oldIdx[n])+"]\n";
	    }
	    else if (oldIdx[n]>=0 && newIdx[n]>=0)
	    {
	    	if (newName[n].compareTo(ds.ColName(oldIdx[n]))!=0)
		    explan+="Rename ["+ds.ColName(oldIdx[n])+"] to ["+newName[n]+"]\n";
		if (newDescr[n].compareTo(ds.ColDescr(oldIdx[n]))!=0)
		    explan+="Change description for ["+newName[n]+"]\n";
		if (ds.ColType(oldIdx[n])!=newType[n])
		    explan+="Change type of ["+newName[n]+"] to: "+DataSheet.TypeName(newType[n])+"\n";
		if (newIdx[n]!=oldIdx[n])
		    explan+="Reorder ["+newName[n]+"] from #"+(oldIdx[n]+1)+" to #"+(newIdx[n]+1)+"\n";
	    }
	}
	if (explan.length()==0) {setVisible(false); return;} // nothing to do, equivalent to reject
	
	String opt[]={"Yes","No"};
	if (JOptionPane.showOptionDialog(null,explan,"Apply Changes?",
    	    	    JOptionPane.YES_NO_OPTION,JOptionPane.YES_NO_OPTION,null,opt,opt[0])!=JOptionPane.YES_OPTION) return;

	resultOldPos=oldIdx;
	resultNewPos=newIdx;
	resultName=newName;
	resultType=newType;
	resultDescr=newDescr;
	setVisible(false);
    }
    
    private void ActionReject()
    {
    	setVisible(false);
    }

    // returns true if the datasheet has changed
    public boolean Execute()
    {
    	setVisible(true);
	return resultOldPos!=null;
    }

    public int[] ResultOldPos() {return resultOldPos;}
    public int[] ResultNewPos() {return resultNewPos;}
    public String[] ResultName() {return resultName;}
    public int[] ResultType() {return resultType;}
    public String[] ResultDescr() {return resultDescr;}

    public void actionPerformed(ActionEvent e)
    {
    	if (e.getSource()==bappend) ActionAppend();
    	else if (e.getSource()==bdelete) ActionDelete();
    	else if (e.getSource()==bmoveup) ActionMove(-1);
    	else if (e.getSource()==bmovedn) ActionMove(1);
    	else if (e.getSource()==baccept) ActionAccept();
    	else if (e.getSource()==breject) ActionReject();
    }
    
    // internal class for the underlying data
    
    class SchemaDataModel extends AbstractTableModel
    {
    	ArrayList<Integer> idx;
	ArrayList<String> name;
	ArrayList<Integer> type;
	ArrayList<String> descr;
	
    	public SchemaDataModel(ArrayList<Integer> Idx,ArrayList<String> Name,ArrayList<Integer> Type,ArrayList<String> Descr)
	{
	    idx=Idx;
	    name=Name;
	    type=Type;
	    descr=Descr;
	}
	
	public String getColumnName(int col) 
	{
	    final String[] COLNAMES={"#","Name","Type","Description"};
            return COLNAMES[col];
	}
	public int getRowCount() {return idx.size();}
	public int getColumnCount() {return 4;}
	public Object getValueAt(int row,int col) 
	{
	    if (col==0)
	    {
	    	int i=idx.get(row).intValue();
		return i==0 ? "" : ""+i;
	    }
	    else if (col==1) return name.get(row);
	    else if (col==2) return DataSheet.TypeName(type.get(row).intValue());
	    else if (col==3) return descr.get(row);
	    return null;
	}
	public boolean isCellEditable(int row,int col) {return col>0;}
	public void setValueAt(Object value,int row,int col) 
    	{
	    if (col==1) name.set(row,(String)value);
	    else if (col==2)
	    {
	    	String t=(String)value;
		if (t.compareTo(DataSheet.TypeName(DataSheet.COLTYPE_MOLECULE))==0) type.set(row,DataSheet.COLTYPE_MOLECULE);
		else if (t.compareTo(DataSheet.TypeName(DataSheet.COLTYPE_STRING))==0) type.set(row,DataSheet.COLTYPE_STRING);
		else if (t.compareTo(DataSheet.TypeName(DataSheet.COLTYPE_REAL))==0) type.set(row,DataSheet.COLTYPE_REAL);
		else if (t.compareTo(DataSheet.TypeName(DataSheet.COLTYPE_INTEGER))==0) type.set(row,DataSheet.COLTYPE_INTEGER);
		else if (t.compareTo(DataSheet.TypeName(DataSheet.COLTYPE_BOOLEAN))==0) type.set(row,DataSheet.COLTYPE_BOOLEAN);
	    }
	    else if (col==3) descr.set(row,(String)value);
            fireTableCellUpdated(row,col);
	}
    }
    
}
