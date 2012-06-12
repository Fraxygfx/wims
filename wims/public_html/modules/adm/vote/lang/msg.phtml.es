!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

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
 <p>
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
   Le nom de variable que vous avez donn� (<tt class="wims_code_words">$namevar</tt>) ne convient pas car il 
   est peut-�tre utilis� par le logiciel.
   !exit
!endif

!msg $error

