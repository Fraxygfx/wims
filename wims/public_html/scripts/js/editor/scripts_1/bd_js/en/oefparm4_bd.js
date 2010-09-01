var oefparm4= [ 'pari', 'maxima', 'yacas', 'wims', 'draw', 'slib' ];
function oef4fun(instruction, version){
    switch(instruction)
	{
	case 'pari' :
chaine_aide='<code>pari(factor(2^101-1))</code>'+
'appel de  PARI/GP: ici pour factoriser un entier (utiliser en g�n�ral de pr�f�rence avec \\text{})'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'maxima' :
chaine_aide='<code>maxima(integrate(x^2+1,x);)</code>'+
'appel de Maxima: ici pour int�grer une fonction'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'yacas' :
chaine_aide='<code>yacas(Taylor(x,0,10) cos(x^2+x+1))</code>'+
'appel de Yacas: ici pour calculer un d�veloppement de Taylor'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'wims' :
chaine_aide='<code>wims(sort items \\list) wims(listintersect \\list1 and \\list2)</code>'+
'utilisation de commandes wims (deux exemples : la premi�re utilise la commande wims !sort pour ordonner les items de la liste \\list, la seconde utilise la commande wims !listintersect pour obtenir les items communs des listes \\list1 et \\list2)'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'draw' :
chaine_aide='<code>draw(pixel_size_x,pixel_size_y<br>draw_source)</code>'+
'dessiner, le source est le m�me que pour la commande \\draw, la premi�re ligne �tant form�e de la taille de l\'image en pixels. La sortie est l\'adresse URL de l\'image.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'slib' :
chaine_aide='<code>slib(matrix/invertible 3,5)</code>'+
'biblioth�que de scripts, par exemple, ici une matrice inversible  3x3 dont les coefficients sont inf�rieurs �  5.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}