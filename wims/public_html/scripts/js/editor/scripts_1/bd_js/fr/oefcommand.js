var oefcommandname='Commandes OEF';
var oefcommand = [
	"\\answer{}{}{}", "\\author{}", "\\computeanswer{}", "\\condition{}{}", "\\conditions{}", "\\email{}", "\\embed{}", "\\feedback{}{}",
	"\\function{}", "\\help{}", "\\hint{}", "\\integer{}", "\\language{}", "\\matrix{}",
	"\\precision{}", "\\solution{}", "\\special{}", "\\statement{}",
	"\\steps{}"
	];
	


function oefcommandfun(instruction){
	var index2="";
	switch(instruction)
	{
	//********************
	case "\\answer{}{}{}" :
		chaine_aide="La commande <code>\answer{texte}{\A}{type=un_type}{option=}{weight=}</code> ex�cute en g�n�ral les actions suivantes&nbsp;:"+
		"<ul><li> formatage de la pr�sentation html sous la forme sous laquelle la question va �tre pos�e : zone de texte � �crire, �tiquettes � d�placer, zone � cliquer </li>"+
		"<li> r�cup�ration des donn�es transmises par l'utilisateur </li>"+
		"<li> analyse de la r�ponse en la comparant � la r�ponse donn�e par le d�veloppeur de mani�re diff�rente selon </li>"+
		"qu'il s'agit de nombres, de matrices, ou de tout autre format </li>"+
		"<li> renvoi d'une note </li>"+
		"<li> renvoi d'une variable <code>\\reply1</code> contenant des �l�ments de r�ponses qu'on peut r�utiliser dans un feedback.</li></ul>"+
		"Dans la premi�re accolade, on peut mettre du texte qui appara�t devant le champ r�serv� � la r�ponse. <br/>"+
		"La deuxi�me accolade permet de sp�cifier les �l�ments permettant de d�cider si la r�ponse est juste ou non. <br/>"+
		"Ces �l�ments vont d�pendre du type pr�cis� dans le troisi�me accolade.";
		return chaine_aide;
	break;
	//********************
	case "\\author{}" :
		chaine_aide="<code>\\author {...}</code> d�finit l'auteur de l'exercice\n"+
		"<div class='exemple'><div class='title'>Exemple :</div><code>\\author{Sophie Lemaire}</code></div>\n";
		return chaine_aide;
	break;
	//********************
	case "\\computeanswer{}" :
		chaine_aide="<code>\\computeanswer{a}</code><br/> Selon la valeur <code>yes</code> ou <code>no</code> donn�e � <code>a</code>, l'utilisateur pourra entrer une r�ponse num�rique en donnant une formule sans l'�valuer ou devra entrer un nombre.<br/>"+
		"La commande <code>\computeanswer{ no }</code> pr�cise que l'utilisateur doit lui-m�me faire les calculs et entrer la valeur finale.<br/>"+
		" Si par contre, on met <code>\computeanswer{ yes }</code>, l'utilisateur peut entrer une formule comme <code>5*5</code>, laissant � l'ordinateur le soin de faire les calculs.";
		return chaine_aide;
		break;
	//********************	
	case "\\condition{}{}" :
		chaine_aide="<code>\\condition{commentaire}{conditions portant sur \\var}{option=}{weight=}</code><br/>"+
		"Dans la premi�re accolade, on peut mettre un texte qui sera affich� lors de l'analyse de la r�ponse.<br/>"+
		"Dans la seconde accolade, on met la liste des conditions que la r�ponse de l'utilisateur contenue dans <code>\\var</code> doit satisfaire pour �tre consid�r�e comme bonne.";
		return chaine_aide;
		break;
	//********************
	case "\\conditions{}" :
		chaine_aide="On d�sire ici reposer la question si la r�ponse est fausse. Il faut analyser soi-m�me la r�ponse � l'aide de\n"+
		"\condition et �ventuellement de \conditions.\n"+
		"<div class='exemple'><div class='title'>Exemple :</div> \n"+
		"Dans l'exemple ci-dessous, on demande le carr� d'un entier ; l'utilisateur a le droit � deux essais.<br/><pre>"+
		"<code>\\title{ Le carr� d'un entier avec 2 essais }\n"+
		"\\computeanswer{ no }\n"+
		"\\integer{ n = randint(-5..5) }\n"+
		"\\integer{ N = (\\n)^2 }\n"+
		
		"\\text{STEP = r1}\n"+
		"\\nextstep{\\STEP}\n"+
		"<strong>\\conditions{1}</strong>\n"+
		"\\statement{ Calculer le carr� de \\n.}\n\n"+
		"\\answer{ Carr� de \\n }{ \\var1 }{ type=numeric }\n"+
		"\\answer{ Carr� de \\n (2�me essai) }{ \\N }{ type=numeric }\n"+
		"<strong>\\condition{Votre premi�re r�ponse est-elle correcte ?}{\\var1 = \\N}</strong>\n"+
		"\\text{STEP=}\n"+
		"\\if{\\step = 2 and \\var1!=\\N}{\\text{STEP = r2}}\n"+
		"\\feedback{ \\reply1 < 0 }{ Le carr� d'un entier est toujours positif. }\n"+
		"\\feedback{\\var1!=\\N and \\reply2 = \\N}{Vous avez r�pondu correctement au 2�me essai.}\n"+
		"\\feedback{\\var1!=\\N and \\reply2!=\\N}{Vos deux r�ponses sont incorrectes.}</code></pre></div>";
		return chaine_aide;
		break;
	//********************
	case "\\email{}" :
	index2=5;
	break;
	//********************
	case "\\embed{}" :
	index2=6;
	break;
	case "\\feedback{}{}" :
	index2=7;
	break;
	case "\\function{}" :
	index2=8;
	break;
	case "\\help{}" :
	index2=9;
	break;
	case "\\hint{}" :
	index2=10;
	break;
	case "\\integer{}" :
	index2=11;
	break;
	case "\\language{}" :
	index2=12;
	break;
	case "\\matrix{}" :
	index2=13;
	break;
	case "\\precision{}" :
	index2=14;
	break;
	case "\\solution{}" :
	index2=15;
	break;
	case "\\special{}" :
	index2=16;
	break;
	case "\\statement{}" :
	index2=17;
	break;
	case "\\steps{}" :
	index2=18; 
	 break;
	default :
	index2=13;
	}
	
	
var a = [ 
"",
"",
"",
"",
"",

//EMAIL
"<code>\\email{...}</code> d�finit l'adresse �lectronique de l'auteur</div>",

//EMBED
"Pour inclure un champ de r�ponse dans l'�nonc�, on ajoute la commande <code>\\embed{}</code> � l'endroit de l'�nonc� o&ugrave; on veut que le champ de r�ponse apparaisse.<br/>"+
"<div class='exemple'><div class='title'>Exemple</div> Par exemple, on peut remplacer le statement dans le source de l'exercice '<a>Le carr� d'un entier</a>' (exemple de la fonction ??) par :<p>"+
"<code>\\statement{ Le carr� de \\n est : \\embed{reply1,5} }</code></p>"+
"Le deuxi�me param�tre de <code>\\embed{}</code>, ici <code>5</code>, pr�cise la longueur du champ de r�ponse.</div>", 

//FEEDBACK
"<code>\\feedback{...}{...}</code> pour faire afficher un message en fonction de la r�ponse de l'utilisateur",

//function
"<div class='exemple'><div class='title'>Exemple 1 :</div>"+
"la commande <code>\\function{f = +x-1+0}</code> prend la cha�ne de caract�res <code>+x-1+0</code>, enl�ve les espaces et le <code>+</code> inutiles puis renvoie la cha�ne de caract�res <code>x-1+0</code>."+
"</div><div class='exemple'><div class='title'>Exemple 2 :</div><pre><code>"+
"\\function{t = x+4}\n"+
"\\integer{a = -2}\n"+
"\\function{f = +1-\\a*\\t/(1-\\a)}</code></pre>"+
"La variable <code>\\f</code> contient la cha�ne de caract�res <code>1+2*x+4/(1+2)</code> ; <code>-2</code> a �t� simplifi� et <code>\\t</code> a �t� remplac� par la cha�ne de caract�res <code>t+4</code> telle quelle, ce qui donne un r�sultat diff�rent de <code>1+2*(x+4)/(1+2)</code>.</div>",

//HELP
"<code>\\help{...}</code> pour un texte qui appara�tra lorsque l'utilisateur clique sur un bouton 'Aide' de l'exercice.",

//HINT
"<code>\hint{...}</code> pour �crire une indication (ce qui appara�t lorsqu'on clique sur le lien 'Indications' de l'exercice.",

//INTEGER
"<code>\\integer{variable=valeur}</code> permet de d�finir une variable de type 'nombre entier'",

//LANGUAGE
"<div class='exemple'><span class='title'>Exemple :</span><code>\\language{fr}</code> d�finit la langue de l'exercice en fran&ccedil;ais</div>", 

//MATRIX
"<code>\\matrix{variable=valeur}</code> permet de d�finir une variable de type 'matrice'",

//precision
"<code>\\precision{n}</code> n est un entier positif qui pr�cise que la comparaison entre la r�ponse de l'utilisateur et la solution sera effectu�e avec une tol�rance de 1/n pour les r�ponses de type num�rique.<br/> Plus n sera grand et moins WIMS sera tol�rant.",

//solution
"<code>\\solution{...}</code> pour afficher un message lorsque l'exercice est termin�.",

//SPECIAL
"On peut placer des champs de r�ponses de type <strong>dragfill</strong> ou <strong>clickfill</strong> directement sur une photo ou dans un dessin � l'aide de la commande <code>\\special{imagefill }</code>.<br/>"+
"Cette fonction est � mettre dans la commande <code>\\statement{ }</code>.<br/>"+
"<div class='exemple'><div class='title'>Exemple :</div>\n"+
"On d�sire un �nonc� contenant une image 'nom_photo.jpg' de taille 625x320 pixels, sur laquelle on positionne deux champs de r�ponses de taille 40x20 pixels.<br/>La premi�re � la position (100,200) en pixels et la deuxi�me � la position (200,50).<br/> L'utilisateur remplit les champs en choisissant parmi les �l�ments d'une liste appel�e ici <code>\\listechoix</code>.<br/> Les variables <code>\\bonchoix1</code> et <code>\\bonchoix2</code> d�signent les deux �l�ments de <code>\\listechoix</code> qui constituent la r�ponse correcte pour chacun des deux champs.<pre><code>"+
"\\statement{Compl�ter l'image : &lt;br&gt;\n"+
"\t <strong>\\special{imagefill \\imagedir/nom_photo.jpg,625x320,40x20</strong>\n"+
"\t reply1, 100x200\n"+
"\t reply2, 200x50\n"+
"}\n"+
"\\answer{}{\\bonchoix1; \\listechoix}{type=clickfill}\n"+
"\\answer{}{\\bonchoix2}{type=clickfill}</code></pre>"+
"<p><strong>Pour aller un peu plus loin : </strong> Pour faire la m�me chose sur une figure construite avec la commande <code>\\text{dessin = draw(625,320 [...]instructions de dessin[...] )}</code>, "+
"il suffit de remplacer <code>\\imagedir/nom_photo.jpg</code> par <code>\\dessin</code> dans les lignes de code pr�c�dentes.</p></div>", 

//STATEMENT
"<code>\\statement{...}</code> pour �crire l'�nonc� (cette commande doit appara�tre une seule fois dans l'exercice)",

//STEPS
"Une seule des deux commandes <code>\\steps</code> ou <code>\\nextstep</code> peut �tre utilis�e dans un exercice.<br/>"+
"<p>On utilise <code>\\steps</code> lorsque les questions qui vont �tre pos�es pendant tout l'exercice sont fix�es avant l'apparition de l'�nonc�.</p>"+
"<p>On utilise <code>\\nextstep</code> au lieu de <code>\\steps</code> si on veut pouvoir poser des questions diff�rentes en fonction de la r�ponse de l'utilisateur � une �tape pr�c�dente.</p>"+
"La variable <code>\\step</code> est cr��e automatiquement avec la valeur <code>1</code> d�s qu'une des commandes <code>\\steps</code> ou <code>\\nextstep</code> est ex�cut�e.<br/>"+
"Sa valeur augmente de 1 � chaque fois que l'utilisateur clique sur <em>'Envoyer votre r�ponse'</em>.<br/>"+
"En g�n�ral, on d�finit une variable de nom libre que l'on applique � <code>\\steps</code> ou <code>\\nexstep</code>. On l'appellera <code>\\STEP</code> dans nos exemples.<br/>"+
"Commen&ccedil;ons en donnant un exemple sch�matique montrant comment utiliser <code>\\steps</code>.\n"+
"<div class='exemple'><div class='title'>Exemple :</div>"+
"Dans un exercice � deux �tapes o&ugrave; l'on pose&nbsp;:<ul><li>deux questions � la premi�re �tape</li><li>et une question � la seconde �tape </li></ul><pre><code>"+
"\\text{STEP = r1, r2r3}\n"+
"\\steps{\\STEP}\n"+
"\\statement{\n"+
"\t \\if{\\step = 1 }{question 1 : \\embed{r1}, question 2 : \\embed{r2}}\n"+
"\t \\if{\\step = 2}{question 3 : \\embed{r3}}\n"+
"}\n"+
"\\answer{}{\\a}{type=...}\n"+
"\\answer{}{\\b}{type=...}\n"+
"\\answer{}{\\c}{type=...}</code></pre></div>\n"
];

return a[index2];
}