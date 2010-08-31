var ifffff= [ '==', '!=</tt> or <tt>&lt;&gt;', '<', '<=', '>', '>=', 'isin', 'notin', 'iswordof', 'notwordof', 'isvarof', 'notvarof', 'isvariableof', 'notvariableof', 'isitemof', 'notitemof', 'islineof', 'notlineof', 'issamecase', 'notsamecase', 'issametext', 'notsametext' ];
function iffffffun(instruction, version){
    switch(instruction)
	{
	case '==' :
chaine_aide='<code>string1  ==  string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> sont identiques.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '!=</tt> or <tt>&lt;&gt;' :
chaine_aide='<code>string1  !=  string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> ne sont pas identiques.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '<' :
chaine_aide='<code>string1  <  string2</code>'+
'vrai si l\'�valuation num�rique de <tt>string1</tt> est strictement inf�rieure � celle de <tt>string2</tt>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '<=' :
chaine_aide='<code>string1  <=  string2</code>'+
'vrai si l\'�valuation num�rique de <tt>string1</tt> est inf�rieure ou �gale � celle de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '>' :
chaine_aide='<code>string1  >  string2</code>'+
'vrai si l\'�valuation num�rique de <tt>string1</tt> est strictement sup�rieure � celle de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '>=' :
chaine_aide='<code>string1  >=  string2</code>'+
'vrai si l\'�valuation num�rique de <tt>string1</tt> est sup�rieure � celle <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'isin' :
chaine_aide='<code>string1  isin  string2</code>'+
'vrai si <tt>string1</tt> est une sous-cha�ne de caract�res de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notin' :
chaine_aide='<code>string1  notin  string2</code>'+
'vrai si <tt>string1</tt> n\'est pas une sous-cha�ne de caract�res de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'iswordof' :
chaine_aide='<code>string1  iswordof  string2</code>'+
'vrai si <tt>string1</tt> est un mot de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notwordof' :
chaine_aide='<code>string1  notwordof  string2</code>'+
'vrai si <tt>string1</tt> n\'est pas un mot de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'isvarof' :
chaine_aide='<code>string1  isvarof  string2</code>'+
'vrai si <tt>string1</tt> est une variable math�matique de l\'expression <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notvarof' :
chaine_aide='<code>string1  notvarof  string2</code>'+
'si <tt>string1</tt> n\'est pas une variable math�matique de l\'expression <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'isvariableof' :
chaine_aide='<code>string1  isvariableof  string2</code>'+
'vrai si <tt>string1</tt> est une variable math�matique de l\'expression <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notvariableof' :
chaine_aide='<code>string1  notvariableof  string2</code>'+
'vrai si <tt>string1</tt> n\'est pas une variable math�matique de l\'expression <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'isitemof' :
chaine_aide='<code>string1  isitemof  string2</code>'+
'vrai si <tt>string1</tt> est un item de la liste <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notitemof' :
chaine_aide='<code>string1  notitemof  string2</code>'+
'vrai si <tt>string1</tt> n\'est pas un item de la liste <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'islineof' :
chaine_aide='<code>string1  islineof  string2</code>'+
'vrai si <tt>string1</tt> est une ligne de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notlineof' :
chaine_aide='<code>string1  notlineof  string2</code>'+
'vrai si <tt>string1</tt> n\'est pas une ligne de <tt>string2</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'issamecase' :
chaine_aide='<code>string1  issamecase  string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> sont les m�mes textes � des espaces multiples pr�s, mais tenant compte de la casse des lettres.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notsamecase' :
chaine_aide='<code>string1  notsamecase string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> ne v�rifient pas le crit�re ci-dessus .'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'issametext' :
chaine_aide='<code>string1  issametext string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> sont les m�mes textes � des espaces multiples pr�s, � la casse pr�s et aux lettres accentu�es pr�s.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'notsametext' :
chaine_aide='<code>string1  notsametext  string2</code>'+
'vrai si <tt>string1</tt> et <tt>string2</tt> ne v�rifient pas le crit�re pr�c�dent.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}