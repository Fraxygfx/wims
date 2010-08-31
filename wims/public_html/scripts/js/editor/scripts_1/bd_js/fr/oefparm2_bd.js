var oefparm2= [ 'items', 'item', 'item', 'item', 'item', 'position', 'rows', 'row', 'row', 'row', 'row', 'randomitem', 'randomrow', 'column', 'column', 'column', 'asis', 'htmlmath', 'texmath' ];
function oef2fun(instruction, version){
    switch(instruction)
	{
	case 'items' :
chaine_aide='<code>items(a,b,c,d,e,f)</code>'+
'le nombre d\'items de la liste {a,b,c,d,e,f} (6 dans cet exemple)'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'item' :
chaine_aide='<code>item(3,a,b,c,d,e,f)</code>'+
'item num�ro 3 de la liste {a,b,c,d,e,f} (ici c)'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'item' :
chaine_aide='<code>item(3,\\ll)</code>'+
'item num�ro 3 de la liste \\ll (de mani�re �quivalente : :\\ll[3])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'item' :
chaine_aide='<code>item(2..5,a,b,c,d,e,f)</code>'+
'items num�ros 2 � 5 de la liste {a,b,c,d,e,f} (ici b,c,d,e)'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'item' :
chaine_aide='<code>item([2,4],\\ll)</code>'+
'items num�ros 2 et 4 de la liste \\ll (de mani�re �quivalente \\ll[2,4])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'position' :
chaine_aide='<code>position(make,do,go,make,take)</code>'+
'num�ros des positions de l\'item `make\' dans la liste {do,go,make,take} (ici 3)'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'rows' :
chaine_aide='<code>rows(\\m)</code>'+
'nombre de lignes de la  matrice \\m'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'row' :
chaine_aide='<code>row(2,\\m)</code>'+
'ligne num�ro 2 de la matrice \\m (de mani�re �quivalente : :\\m[2;])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'row' :
chaine_aide='<code>row(2..5,\\m)</code>'+
'la matrice extraite de \\m form�e des lignes num�ros 2 � 5 (de mani�re �quivalente : :\\m[2..5;])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'row' :
chaine_aide='<code>row([1,3],1,2,3<br>3,4,5<br>5,6,7)</code>'+
'la matrice extraite de la  matrice  3&times;3 form�e de la premi�re ligne et de la troisi�me ligne'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'row' :
chaine_aide='<code>row(column 1 > 1 and column 2 = good,\\mat)</code>'+
'la matrice extraite de  \\mat form�e des lignes dont la colonne 1 est  > 1 et dont la colonne 2 est le mot `good\''+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'randomitem' :
chaine_aide='<code>randomitem(\\list)</code>'+
'un item au hasard de la liste \\list (items s�par�s par des virgules).'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'randomrow' :
chaine_aide='<code>randomrow(\\mat)</code>'+
'une ligne au hasard de la matrice \\mat.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'column' :
chaine_aide='<code>column(2,\\m)</code>'+
'les items de la colonne num�ro 2 de la matrice \\m, le r�sultat est une liste s�par�e par des virgules (de mani�re �quivalente :\\m[;2])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'column' :
chaine_aide='<code>column(2..5,\\m)</code>'+
'la matrice extraite de \\m form�e des colonnes  num�ros 2 � 5 (de mani�re �quivalente : \\m[;2..5])'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'column' :
chaine_aide='<code>column([1,3],1,2,3<br>3,4,5<br>5,6,7)</code>'+
'la matrice extraite de la matrice  3&times;3 form�e de la premi�re et de la troisi�me colonne'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'asis' :
chaine_aide='<code>asis(Comment �a va? item(1,2,3))</code>'+
'la cha�ne de caract�res telle qu\'elle est sans aucune substitution ou interpr�tation.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'htmlmath' :
chaine_aide='<code>htmlmath(2*x^2+3*x)</code>'+
'la mani�re la meilleure possible de rendre l\'expression en html: 2x<sup>2</sup>+3x'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'texmath' :
chaine_aide='<code>texmath(2*x^2+3*x)</code>'+
'le source TeX de l\'expression'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}