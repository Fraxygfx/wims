var oefparm5= [ 'reply', 'choice', 'step', 'sc_score', 'help_subject' ];
function oef5fun(instruction, version){
    switch(instruction)
	{
	case 'reply' :
chaine_aide='<code>reply1 reply2 ...</code>'+
'variable contenant la r�ponse de l\'�l�ve � la question de type <tt>reply</tt> num�ro 1'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'choice' :
chaine_aide='<code>choice1 choice2 ...</code>'+
'variable contenant la r�ponse de l\'�l�ve � la question de type <tt>choice</tt> num�ro 1'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'step' :
chaine_aide='<code>step</code>'+
'variable donnant le num�ro de l\'�tape (dans le cas o� une commande de type <tt>\\steps</tt> ou <tt>\\nextstep</tt> a �t� introduite).'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'sc_score' :
chaine_aide='<code>sc_score1 sc_score2 ...</code>'+
'variable entre 0 et 1 indiquant si la r�ponse � la question est juste ou non (peut avoir des valeurs entre 0 et 1 pour certains types de r�ponses).'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case 'help_subject' :
chaine_aide='<code>help_subject</code>'+
'variable contenant l\'identificateur de l\'aide introduite par la m�thode sp�ciale <tt>help</tt>.'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}