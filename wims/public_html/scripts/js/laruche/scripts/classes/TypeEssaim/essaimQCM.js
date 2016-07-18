/*
 * Classe Bloc QCM Questionnaire � Choix Multiple :
 * Permet de cr�er un bloc d'instructions de type "QCM".
 */

EssaimQCM = function(num)
{
    // Appelle le constructeur parent
    Essaim.call(this,num);
    
    //--------- ATTRIBUTS ---------//
    
	this.nom = "QCM" + num;     // nom de l'�l�ment
    this.numero = num;          // num�ro de cet essaim
    this.proto = "EssaimQCM";   // nature de la classe
    
    this._statusSaveOptReponse = "radio";
    this._statusSaveSplit = false;
}

    //--------- D�claration comme classe d�riv�e de Essaim ---------//

EssaimQCM.prototype = Object.create(Essaim.prototype);
EssaimQCM.prototype.constructor = EssaimQCM;   // y parait qu'il faut corriger le constructeur...

    // D�finit les nouveaux attributs

EssaimQCM.prototype.nomAffiche = "Essaim : QCM";   // nom affich� dans le menu
EssaimQCM.prototype.proto = "EssaimQCM" // nature de la classe
                                        // ATTENTION : DOIT ETRE LE MEME QUE this.proto CI�DESSUS
EssaimQCM.prototype.imageEnonce = "images_essaims/essaimQCM.png"; // image � ins�rer dans l'�nonc�
EssaimQCM.prototype.gereReponse = true; // drapeau, si "true", g�re une r�ponse dans l'analyse
EssaimQCM.prototype.aUneAide = false;   // drapeau, si "true" g�re une aide dans le bloc pr�paration
EssaimQCM.prototype.gereTailleImageEnonce = false; // si "true", fixe la taille de l'image dans l'�nonc�

    //--------- METHODES ----------//
    

//EssaimQCM.prototype.initEnonce = function()
///*
// * Initialisation de la partie "�nonc�" de l'essaim
// * ajoute un bouton dans la liste d'Essaims de l'�nonc�
// * Pas de n�cessit� de surcharger ici
// */
//{
//    Essaim.prototype.initEnonce.call(this); // appel de la fonction de base
//    ... suite sp�cifique ...
//}

//EssaimQCM.prototype.initEnonceVersAnalyse = function()
///*
// * Initialisation de la partie "analyse" de l'essaim
// * lorsqu'on clique sur le bouton "essaim" de l'�nonc�
// * de fa�on g�n�rique, ajoute un bloc r�ponse dans l'onglet "Analyse"
// * peut aussi faire des tas d'autres choses dans les essaims d�riv�s
// * Pas de n�cessit� de surcharger ici
// */
//{
//    rucheSys.ajoutReponseEssaim(this); // appel de la fonction effectu�e de base
//    ... suite sp�cifique ...
//}

//Essaim.prototype.initAnalyse = function()
///*
// * Initialisation de la partie "analyse" de l'essaim
// * Pas de n�cessit� de surcharger ici
// * On peut par exemple penser � ajouter des variables internes au QCM
// * que l'on pourrait utiliser ailleurs.
// */
//{
//
//}


EssaimQCM.prototype.creerBloc = function(dataRecup)
/*
 * Cr�ation d'un bloc QCM dans l'onglet pr�paration
 * parametre(s) :   - dataRecup : contient l'�l�ment �ventuel sauvegard�
 */
{
    Essaim.prototype.initBloc.call(this);
    
    var titreBloc = document.createElement("DIV");
    var txt = document.createTextNode("Questionnaire � choix multiple ");
    titreBloc.appendChild(txt);
    var span_txtNom = document.createElement("SPAN");
    var txtNom = document.createTextNode(" "+this.nom+"\n");
//        span_txtNom.style.fontWeight="bold";
//        span_txtNom.style.border = "2px solid black";
    span_txtNom.style.backgroundColor = "#f7debc";
    span_txtNom.style.margin = "0px 0px 0px 10px";
    span_txtNom.style.padding = "0px 5px 0px 5px";
    span_txtNom.style.borderRadius = "5px";
    span_txtNom.appendChild(txtNom);
    titreBloc.appendChild(span_txtNom);
    titreBloc.style.textAlign="center";
    
    // Fabrication du contenu du bloc
    
    var div_listeRepVraies = document.createElement("DIV");
    div_listeRepVraies.id = "listeRepVraies" + this.nom;
    div_listeRepVraies.className = "Rcl_Droppable";
    
    var barre_tache_listeRepVraies = document.createElement("DIV");
    var bouton_latex_listeRepVraies = document.createElement("button");
    bouton_latex_listeRepVraies.id = "Rid_Editor_Button_Latex_V_"+this.nom;
    bouton_latex_listeRepVraies.innerHTML = "LaTeX";
    bouton_latex_listeRepVraies.className = "Rcl_Editor_Button_Latex";
    bouton_latex_listeRepVraies.onclick=function(){
        var nom = "listeRepVraies"+this.id.slice("Rid_Editor_Button_Latex_V_".length,this.id.length);  // id du div contenant l'editeur correspondant
        rucheSys.etiqueterTexteEnLatex(nom);
    }
    barre_tache_listeRepVraies.appendChild(bouton_latex_listeRepVraies);

    var div_listeRepFausses = document.createElement("DIV");
    div_listeRepFausses.id = "listeRepFausses" + this.nom;
    div_listeRepFausses.className = "Rcl_Droppable";
    
    var barre_tache_listeRepFausses = document.createElement("DIV");
    var bouton_latex_listeRepFausses = document.createElement("button");
    bouton_latex_listeRepFausses.id = "Rid_Editor_Button_Latex_F_"+this.nom;
    bouton_latex_listeRepFausses.innerHTML = "LaTeX";
    bouton_latex_listeRepFausses.className = "Rcl_Editor_Button_Latex";
    bouton_latex_listeRepFausses.onclick=function(){
        var nom = "listeRepFausses"+this.id.slice("Rid_Editor_Button_Latex_F_".length,this.id.length);  // id du div contenant l'editeur correspondant
        rucheSys.etiqueterTexteEnLatex(nom);
    }
    barre_tache_listeRepFausses.appendChild(bouton_latex_listeRepFausses);
    
    var div_nbRepAffichees = document.createElement("DIV");
    div_nbRepAffichees.id = "nbRepAffichees" + this.nom;
    div_nbRepAffichees.className = "Rcl_Droppable";
    div_nbRepAffichees.style.display = "inline-block";
    div_nbRepAffichees.style.width="40%";
    div_nbRepAffichees.style.verticalAlign="middle";
    
    var div_nbRepVraiesAffichees = document.createElement("DIV");
    div_nbRepVraiesAffichees.id = "nbRepVraiesAffichees" + this.nom;
    div_nbRepVraiesAffichees.className = "Rcl_Droppable";
    div_nbRepVraiesAffichees.style.display = "inline-block";
    div_nbRepVraiesAffichees.style.width="40%";
    div_nbRepVraiesAffichees.style.verticalAlign="middle";
//       div_nbRepVraiesAffichees.style.cssFloat="right";


    var para_txt_listeVraies = document.createElement("P");
    var txt_listeVraies = document.createTextNode("\r\nListe des r�ponses justes (une r�ponse par ligne)");
    para_txt_listeVraies.appendChild(txt_listeVraies);
    var txt_listeFausses = document.createTextNode("\r\nListe de r�ponses fausses (une r�ponse par ligne)");
    var txt_nbRepAffichees = document.createTextNode("\r\nNombre total de r�ponses affich�es : ");
    var txt_nbRepVraiesAffichees = document.createTextNode("\r\nNombre de bonnes r�ponses affich�es : ");

    var div_justif = document.createElement("DIV");
    

    this.divBloc.appendChild(titreBloc);
    this.divBloc.appendChild(para_txt_listeVraies);
    this.divBloc.appendChild(barre_tache_listeRepVraies);
    this.divBloc.appendChild(div_listeRepVraies);
    this.divBloc.appendChild(txt_listeFausses);
    this.divBloc.appendChild(barre_tache_listeRepFausses);
    this.divBloc.appendChild(div_listeRepFausses);
    this.divBloc.appendChild(txt_nbRepAffichees);
    this.divBloc.appendChild(div_nbRepAffichees);
    this.divBloc.appendChild(div_justif);
    this.divBloc.appendChild(txt_nbRepVraiesAffichees);
    this.divBloc.appendChild(div_nbRepVraiesAffichees);

    var editeurListeRepVraies = new Editeur(div_listeRepVraies.id,rucheSys,true);
    var editeurListeRepFausses = new Editeur(div_listeRepFausses.id,rucheSys,true);
    var editeurNbRepAffichees = new Editeur(div_nbRepAffichees.id,rucheSys,true);
    var editeurNbRepVraiesAffichees = new Editeur(div_nbRepVraiesAffichees.id,rucheSys,true);

    rucheSys.listeEditeur.push(editeurListeRepVraies);
    rucheSys.listeEditeur.push(editeurListeRepFausses);
    rucheSys.listeEditeur.push(editeurNbRepAffichees);
    rucheSys.listeEditeur.push(editeurNbRepVraiesAffichees);

    Essaim.prototype.initEnonce.call(this);
    
    Essaim.prototype.initAnalyse.call(this);

}


EssaimQCM.prototype.chargeEtat = function(elem)
/*
 * Chargement de l'�tat de l'objet depuis les variables de l'objet JSON elem
 * parametre(s) :    - elem : objet JSON
 */
{
    this._statusSaveOptReponse = elem._statusSaveOptReponse;
    this._statusSaveSplit = elem._statusSaveSplit;
}


EssaimQCM.prototype.creerBlocReponse = function(dataRecup)
/*
 * Cr�ation d'un bloc r�ponse dans l'onglet analyse
 * g�r� par cet essaim.
 */
{
    // R�cup�re le div du bloc r�ponse
    var listeBloc = document.getElementsByClassName("divRep"+this.nom);
    var bloc = listeBloc[0];
    
    var titreBloc = document.createElement("DIV");
    var txt = document.createTextNode("R�ponse au "+this.nom);
    titreBloc.appendChild(txt);
    titreBloc.style.textAlign="center";
    
    var divOptions = document.createElement("DIV");
    divOptions.id = "divOpt" + this.nom;

    // Liste des options de r�ponse : checkbox ou radio
    
    var selectOption = document.createElement("select");
    selectOption.id = "selOpt" + this.nom;
    
    var optType = ["radio", "checkbox"];
    var optDescript = ["Une seule r�ponse attendue","Plusieurs r�ponses attendues"];
    
    for (var i = 0; i < optType.length; i++)
    {
        var option = document.createElement("option");
        option.value = optType[i];
        option.text = optDescript[i];
        selectOption.appendChild(option);
    }
    selectOption.value=optType[0];
    
    selectOption.onchange = function()
    {
        switch(selectOption.value)
        {
                case "checkbox":
                divSplitOption.style.display="inline";
                break;
                case "radio":
                divSplitOption.style.display="none";
                break;
        }
    }

    // Options de r�ponse : split ou pas
    
    var divSplitOption = document.createElement("DIV");
    divSplitOption.id = "divSplitOpt" + this.nom;
    var splitOption = document.createElement("input");
    splitOption.type = "checkbox";
    splitOption.id = "splitOpt" + this.nom;
    var splitText = document.createTextNode(" Note partielle si r�ponse incompl�te");
    divSplitOption.appendChild(splitOption);
    divSplitOption.appendChild(splitText);
    divSplitOption.style.display="none";
    
    divOptions.appendChild(selectOption);
    
    bloc.appendChild(titreBloc);
    bloc.appendChild(divOptions);
    bloc.appendChild(divSplitOption);
    
    // Si donn�es venant de la sauvegarde, positionne les valeurs.
    
    if (typeof dataRecup !== 'undefined')
    {
        selectOption.value = dataRecup._statusSaveOptReponse;
        splitOption.checked = dataRecup._statusSaveSplit;
    }
    
}

EssaimQCM.prototype.sauveEtatInterfaceReponse = function()
/*
 * Sauvegarde l'�tat de l'interface du bloc r�ponse dans les variables internes
 * de l'essaim. Sert juste avant la sauvegarde, permet de r�tablir l'�tat au rechargement
 */
{
    this._statusSaveOptReponse = $("#selOpt"+this.nom)[0].value;
    this._statusSaveSplit = $("#splitOpt"+this.nom)[0].checked;
}


EssaimQCM.prototype.chargeEtatInterfaceReponse = function(elem)
/*
 * Chargement de l'�tat de l'interface du bloc r�ponse depuis les variables de l'objet JSON elem
 * parametre(s) :    - elem : objet JSON
 */
{
    $("#selOpt"+this.nom)[0].value = this._statusSaveOptReponse;
    $("#splitOpt"+this.nom)[0].checked = this._statusSaveSplit;
    if (this._statusSaveOptReponse == "checkbox")
    {
        $("#divSplitOpt" + this.nom).css("display","inline");
    }
}


//EssaimQCM.prototype.sauveEtatInterface = function()
///*
// * Sauvegarde l'�tat de l'interface du bloc QCM (boutons...) dans les variables internes
// * de l'essaim. Sert juste avant la sauvegarde, permet de r�tablir l'�tat au rechargement
// */
//{
//    // fonction inutile pour le bloc QCM
//}


EssaimQCM.prototype.detruitBloc = function()
/*
 * Destruction du bloc et de toutes les d�pendances (boutons, r�ponses, editeurs...)
 */
{
    // D�truit le bloc, la r�ponse �ventuelle associ�e et les images correspondantes
    Essaim.prototype.detruitBloc.call(this);

    // D�truit le contenu du bloc qui n'a pas �t� d�truit (les �diteurs).
    var indice1 = rucheSys.rechercheIndice("listeRepVraies"+this.nom,rucheSys.listeEditeur);
    var indice2 = rucheSys.rechercheIndice("listeRepFausses"+this.nom,rucheSys.listeEditeur);
    var indice3 = rucheSys.rechercheIndice("nbRepAffichees"+this.nom,rucheSys.listeEditeur);
    var indice4 = rucheSys.rechercheIndice("nbRepVraiesAffichees"+this.nom,rucheSys.listeEditeur);
    rucheSys.listeEditeur.splice(indice1,1);
    rucheSys.listeEditeur.splice(indice2,1);
    rucheSys.listeEditeur.splice(indice3,1);
    rucheSys.listeEditeur.splice(indice4,1);
}


EssaimQCM.prototype.toOEF = function()
/*
 * Fonction qui permet de g�n�rer le code OEF du bloc QCM
 * retourne une chaine de caract�re contenant le code OEF.
 */
{
    var indice1 = rucheSys.rechercheIndice("listeRepVraies"+this.nom,rucheSys.listeEditeur);
    var indice2 = rucheSys.rechercheIndice("listeRepFausses"+this.nom,rucheSys.listeEditeur);
    var indice3 = rucheSys.rechercheIndice("nbRepAffichees"+this.nom,rucheSys.listeEditeur);
    var indice4 = rucheSys.rechercheIndice("nbRepVraiesAffichees"+this.nom,rucheSys.listeEditeur);
    rucheSys.listeEditeur[indice1].recupDonneesVar();
    rucheSys.listeEditeur[indice2].recupDonneesVar();
    rucheSys.listeEditeur[indice3].recupDonneesVar();
    rucheSys.listeEditeur[indice4].recupDonneesVar();
    
    // r�cup�re le contenu des �diteurs
    var oef_listeRepVraies = rucheSys.listeEditeur[indice1].toOEF();
    var oef_listeRepFausses = rucheSys.listeEditeur[indice2].toOEF();
    var oef_nbRepAffichees = rucheSys.listeEditeur[indice3].toOEF();
    var oef_nbRepVraiesAffichees = rucheSys.listeEditeur[indice4].toOEF();
    
    // Construit le code OEF
    var codePrepQCM = "\\matrix{datatrue"+this.nom+" = "+oef_listeRepVraies+"}\n";
    codePrepQCM += "\\matrix{datafalse"+this.nom+" = "+oef_listeRepFausses+"}\n";
    codePrepQCM += "\\integer{tot"+this.nom+"="+oef_nbRepAffichees+"}\n";
    codePrepQCM += "\\integer{givetrue"+this.nom+" = "+oef_nbRepVraiesAffichees+"}\n";
//        codePrepQCM += "\\integer{minfalse=0}\n";
    codePrepQCM += "\\text{datatrue"+this.nom+" = wims(nonempty rows \\datatrue"+this.nom+")}\n";
    codePrepQCM += "\\text{datafalse"+this.nom+" = wims(nonempty rows \\datafalse"+this.nom+")}\n";
    codePrepQCM += "\\integer{truecnt"+this.nom+"=rows(\\datatrue"+this.nom+")}\n";
    codePrepQCM += "\\integer{falsecnt"+this.nom+"=rows(\\datafalse"+this.nom+")}\n";
    codePrepQCM += "\\integer{givetrue"+this.nom+"=\\givetrue"+this.nom+"<1?1}\n";
    codePrepQCM += "\\integer{givetrue"+this.nom+"=\\givetrue"+this.nom+">\\truecnt"+this.nom+"?\\truecnt"+this.nom+"}\n";
    codePrepQCM += "\\integer{tot"+this.nom+"=\\tot"+this.nom+" > \\falsecnt"+this.nom+"+\\givetrue"+this.nom+"?\\falsecnt"+this.nom+"+\\givetrue"+this.nom+"}\n";
    codePrepQCM += "\\integer{givetrue"+this.nom+"=\\givetrue"+this.nom+">\\tot"+this.nom+"-1?\\tot"+this.nom+"-1}\n";
//        codePrepQCM += "\\integer{minfalse=\\minfalse>\\tot"+this.nom+"-\\givetrue"+this.nom+"?\\tot"+this.nom+"-\\givetrue"+this.nom+"}\n";
    codePrepQCM += "\\text{tsh"+this.nom+"=shuffle(\\truecnt"+this.nom+")}\n";
    codePrepQCM += "\\text{true"+this.nom+"=row(\\tsh"+this.nom+",\\datatrue"+this.nom+")}\n";
//        codePrepQCM += "\\if{\\minfalse>0}{\n";
//        codePrepQCM += "    \\text{false1"+this.nom+"=row(1..\minfalse,\datafalse"+this.nom+");}\n";
//        codePrepQCM += "    \\text{false2"+this.nom+"=row(\\minfalse+1..\\falsecnt"+this.nom+",\\datafalse"+this.nom+")}\n";
//        codePrepQCM += "}{\n";
//        codePrepQCM += "    \\integer{minfalse=0}\n";
    codePrepQCM += "    \\text{false1"+this.nom+"=}\n";
    codePrepQCM += "    \\text{false2"+this.nom+"=\\datafalse"+this.nom+"}\n";
//        codePrepQCM += "}\n";
    codePrepQCM += "\\text{fsh"+this.nom+"=shuffle(\\falsecnt"+this.nom+")}\n";
    codePrepQCM += "\\text{false2"+this.nom+"=row(\\fsh"+this.nom+",\\false2"+this.nom+")}\n";
//        codePrepQCM += "\\text{pick"+this.nom+"=row(1..\\givetrue"+this.nom+",\\true"+this.nom+");\\false1"+this.nom+" row(1..\\tot"+this.nom+"-\\givetrue"+this.nom+"-\\minfalse,\\false2"+this.nom+")}\n";
    codePrepQCM += "\\text{pick"+this.nom+"=row(1..\\givetrue"+this.nom+",\\true"+this.nom+");\\false1"+this.nom+" row(1..\\tot"+this.nom+"-\\givetrue"+this.nom+",\\false2"+this.nom+")}\n";
    codePrepQCM += "\\text{ind"+this.nom+"=wims(makelist 1 for x=1 to \\givetrue"+this.nom+"),wims(makelist 0 for x=1 to \\tot"+this.nom+"-\\givetrue"+this.nom+")}\n";
    codePrepQCM += "\\text{sh"+this.nom+"=shuffle(\\tot"+this.nom+")}\n";
    codePrepQCM += "\\text{ind"+this.nom+"=item(\\sh"+this.nom+",\\ind"+this.nom+")}\n";
    codePrepQCM += "\\text{pick"+this.nom+"=row(\\sh"+this.nom+",\\pick"+this.nom+")}\n";
//        codePrepQCM += "\\text{pick"+this.nom+"=\\accolade"+this.nom+"=1 ? wims(embraced randitem \\pick"+this.nom+")}\n";
//        codePrepQCM += "\\text{explain"+this.nom+"=\\accolade"+this.nom+"=1 ? wims(embraced randitem \\explain"+this.nom+")}\n";
    codePrepQCM += "\\text{ans"+this.nom+"=positionof(1,\\ind"+this.nom+")}\n";
    codePrepQCM += "\\text{list"+this.nom+"=item(1..\\tot"+this.nom+",A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)}\n";
    codePrepQCM += "\\text{pick2"+this.nom+" = wims(replace ; by , in \\pick"+this.nom+")}\n";

    
    return codePrepQCM;

}


EssaimQCM.prototype.toOEFFromStatement = function(idReponse)
/*
 * Fonction qui permet de g�n�rer le code OEF correspondant
 * � l'action de l'essaim dans le statement
 * retourne une chaine de caract�re contenant le code OEF.
 * fonction g�n�rique.
 * Voir dans l'essaim "QCM" l'exemple d'une surcharge de cette fonction
 */
{
    
    // Construit le numero correspondant � la r�ponse g�r�e par l'essaim
    var numeroReponse = $("#RidAnBlocRep_"+idReponse).index()+1;
    
    // Construit le code OEF
    var codePrepQCM = "<div>\n";
    codePrepQCM += "\\for{i"+this.nom+"=1 to \\tot"+this.nom+"}{\n";
    codePrepQCM += "<p class=\"oefreply\"><label>\\embed{reply"+numeroReponse+",\\i"+this.nom+"}</label></p>\n";
    codePrepQCM += "}\n";
    codePrepQCM += "</div>\n";
    
    return codePrepQCM;
}


EssaimQCM.prototype.toOEFFromAnswer = function()
/*
 * Fonction qui permet de g�n�rer le code OEF correspondant
 * � la r�ponse g�r�e par le QCM dans l'analyse
 * retourne une chaine de caract�res contenant le code OEF.
 */
{
    
    // Construit le code OEF
    var selectOption = document.getElementById("selOpt"+this.nom);
    var splitOption = document.getElementById("splitOpt"+this.nom);
    
    var codePrepQCM = "\n\\answer{}{\\ans"+this.nom+";\\pick2"+this.nom+"}";
    codePrepQCM +="{type="+selectOption.value+"}";

    if (selectOption.value == "checkbox")
    {
        if (splitOption.checked)
        {
            codePrepQCM +="{option=split}";
        }
    }
    codePrepQCM +="\n";
    
    return codePrepQCM;
}

/*
 * D�claration du type d'essaim (enregistre la classe dans l'objet syst�me Ruche)
 * au chargement du code. IMPORTANT : le code des classes d�riv�es
 * doit �tre charg� APRES le code de la classe "Essaim" de base.
 */

/*$(document).ready(function() {
   rucheSys.initClasseEssaim(EssaimQCM);
});*/
