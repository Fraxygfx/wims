
var special= [ '\\special{expandlines }', '\\special{imagefill }', '\\special{help }', '\\special{tabs2lines }', '\\special{rename }', '\\special{tooltip }' ];
function specialfun(instruction, version){
var special= [ '\\special{expandlines }', '\\special{imagefill }', '\\special{help }', '\\special{tabs2lines }', '\\special{rename }', '\\special{tooltip }' ];
function bd(instruction, version){
    switch(instruction)
	{
	case '\\special{expandlines }' :
chaine_aide='<code>\\special{expandlines}</code>'+
'Ecrit le param�tre dans un style <tt>pre</tt> sans �valuation. \n<p></p> \n'+
'<span class="wims_help_example">Exemple:</span> \n \n<pre>\\text{texte= \nfor a in \\B \n   a = a + 1 \nendfor \n} \n\\statement{ \\special{expandlines \\texte}} \n</pre>\n'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{imagefill }' :
chaine_aide='<code>\\special{imagefill}</code>'+
' Met les champs des types de r�ponses  <tt>dragfill</tt> ou <tt>clickfill</tt> dans une grande image.  \n Doit �tre utiliser dans le <tt>statement</tt> d\'un exercice OEF.  \n <p></p> \n'+
' <span class="wims_help_example">Exemple</span> \n  \n <pre> \n\\special{imagefill \\imagedir/myphoto.jpg,450x350,40x40 \nreply 1,120x250 \nreply 3,300x50 \nreply 4,10x15 \n} \n</pre> \n Dans cet exemple, on affiche une grande image (<tt>\\imagedir/myphoto.jpg</tt>) dans l\'�nonc� \n de type 450x350, avec 3 champs de r�ponse de type drag-and-drop de type 40x40. Les trois champs sont \n repsectiviement les r�ponses 1,3 and 4 (qui doivent �tre de type <tt>clickfill</tt> ou \n <tt>dragfill</tt>), aux posistions respectives 120x250, 300x50, 10x15 dans la grande image. \n  \n <p>  \n La grande image sera redimensionn�e � la taille sp�cifi�e. \n </p> \n <p> Il est possible d\'avoir des r�ponses multiples.  \n Ajouter un troisi�me param�tre entier � la taille : \n <tt>reply 1,120x250x4</tt> montrera un champ de longueur 4 ( x 120). \n </p>\n'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{help }' :
chaine_aide='<code>\\special{help}</code>'+
'La methode sp�ciale <tt>help</tt> accepte deux param�tres. Le premier est un identificateur \n qui sera dans la variable <tt>\\help_subject</tt> � l\'int�rieur de la commande <tt>\\help</tt> \n et le second est le texte du lien. \n  \nSi <tt>\\special{help}</tt> est mis dans l\'�nonc� ou le feedback d\'un exercice,  \n l\'aide sera de type popup, contrairement � l\'aide usuelle. \n \nTout le contenu de l\'aide doit �tre mis dans le source de l\'exercice oef.  \nAucune facilit� n\'est pr�vue pour l\'aide au niveau du module, car le principe \nest que l\'ind�pendance des fichiers oef n e doit pas �tre d�truit par les aides. \nCependant, si vous avez plusieurs exercices partageant les m�mes textes d\'aide \nvous pouvez utiliser cpp. \n \n<p></p> \n'+
' <span class="wims_help_example">Exemple</span> \n  \n <pre> \n \\title{Deviner} \n \\statement{ Deviner un mot :   \n   \\special{help test1,Premier indice} \n } \n \\answer{1}{Singe} \n \\help{ \n   Voici l\'aide: help subject=\\help_subject \n   <p> \n   \\if{\\help_subject issametext or \\help_subject issametext none}{ \n     \\special{help test0,ici} \n   } \n   \\if{\\help_subject issametext test1}{ \n     La premi�re lettre est <b>S</b>. Vous pouvez trouver un nouvel indice \n     \\special{help test2,ici} \n   } \n  \\if{\\help_subject issametext test2}{Voici le second indice.  \n    La deuxi�me lettre est <b>i</b> \n   } \n  \\if{\\help_subject issametext test0}{Voici \n    \\special{help test1,l\'aide 1}, \\special{help test2,l\'aide 2} \n   } \n } \n </pre> \n'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{tabs2lines }' :
chaine_aide='<code>\\special{tabs2lines}</code>'+
'Convertit les tabulations en un passage � la ligne. \n<p></p> \n'+
'<span class="wims_help_example">Exemple</span> \n \n<pre> \n\\statement{  \n  \\special{tabs2lines \\texte	\\texte} \n} \n</pre> \n'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{rename }' :
chaine_aide='<code>\\special{rename}</code>'+
' \nRenomme un fichier (image essentiellement).\n'+
''+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{tooltip }' :
chaine_aide='<code>\\special{tooltip}</code>'+
'<script type="text/javascript" src="scripts/js/wz_tooltip.js"></script> \ncr�e une aide popup (tooltip) : le premier param�tre est le texte du lien, \nle troisi�me param�tre est le texte apparaissant dans l\'aide popup.  \nle second param�tre est l\'option entre crochets:  \nEntre les crochets, vous pouvez mettre l\'option comme dans \nla documentation de wz_tooltip.js.  \nPar d�faut : [FONTSIZE, \'12pt\', ABOVE, \'true\'] \nSi vous voulez ne charger qu\'une seule fois le javascript (une fois est suffisant pour une page \nhtml), ne mettez aucun param�tre.  Si vous ne voulez pas charger le javascript \ncar il a �t� d�j� charg� dans la page html, ajoutez <tt>nojs</tt> \nau second param�tre \nVous pouvez configurer le style css du lien : class <tt> span.tooltip</tt>. \n \n \n'+
'<span class="wims_help_example">Exemple</span> \n \n<pre> \n\\special{tooltip passer la souris ici, ,le mot a 5 lettres} \n\\special{tooltip passer la souris ici,[DURATION, 4000, FONTSIZE, \'18pt\'], le mot a 5 lettres} \n\\special{tooltip passer la souris ici,[TITLE, \'Some Title\', PADDING, 9],un texte} \n\\special{tooltip } \n\\special{tooltip\\special{tooltip passer la souris ici,nojs [TITLE, \'Some Title\', PADDING, 9],un texte} \n</pre> \n \n'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
	}
}