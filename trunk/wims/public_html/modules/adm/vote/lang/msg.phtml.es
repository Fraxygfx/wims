!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.
!if $error=badvariablename
 L'une, au moins, des variables techniques que vous utilisez n'existe pas ou n'est pas modifiable � ce niveau. Votre questionnaire ne fonctionnera pas correctement. 
 !exit
!endif

!if $error=notechvar
 Aucune variable technique d�finie dans cette classe. Pour utiliser ce mod�le de questionnaire vous devez d'abord d�finir une variable technique dans la classe en utilisant le gestionnaire de variable technique.
 !exit
!endif

!if $error = not_user
 El sistema de encuestas s�lo est� disponible para las clases virtuales.
 !exit
!endif

!if $error = bad_vote
 La encuesta / votaci�n que solicita no existe.
 !exit
!endif

!if $error = already_voted
 Ya ha votado. No puede volver a votar porque la encuesta es an�nima.
 !exit
!endif

!if $error = too_many_votes
 Hay demasiadas encuestas / votaciones en su clase.
 �Por qu� necesita tantas?
 !exit
!endif

!if $error = no_content
 No ha rellenado la encuesta / votaci�n.
 !exit
!endif

!if $error = no_title
 Debe darle un t�tulo a su encuesta / votaci�n.
 !exit
!endif

!if $error = bad_data
 Algunas de sus definiciones no son correctas. Por favor corr�jalas.
 !exit
!endif

!if $error = no_vote
 Vous n'avez pas encore vot� donc vous ne pouvez pas voir les r�sultats.
 !exit
!endif

!if $error = no_variable
   Vous n'avez pas donn� de nom de variable ou il n'est pas valide.
   !exit
!endif

!if $error = bad_variable
   Le nom de variable que vous avez donn� (<span class="tt wims_code_words">$namevar</span>) ne convient pas car il 
   est peut-�tre utilis� par le logiciel.
   !exit
!endif

!msg $error

