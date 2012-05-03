!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error = not_user
Deze voorziening is alleen beschikbaar voor virtuele klassen.
 !exit
!endif

!if $error = bad_vote
 De verkiezing / enquete waar je om vroeg, bestaat niet.
 !exit
!endif

!if $error = already_voted
 Je hebt al eens een stem uitgebracht. 
 !exit
!endif

!if $error = too_many_votes
 Er zijn te veel enquetes in deze klas.
 <br>
 Waarom heeft u er zoveel nodig?
 !exit
!endif

!if $error = no_content
 U hebt de inhoud van het stemformulier / enquete formulier nog niet ingevuld.
 !exit
!endif

!if $error = no_title
  Geef de verkiezing / enquete eerst een naam.
 !exit
!endif

!if $error = bad_data
 Enkele van definities zijn ongeldig, graag corrigeren.
 !exit
!endif

!if $error = not_secure
 De gegevens zijn niet bereikbaar vanaf je netwerkadres.
!exit
!endif


!if $error = no_vote
    Je hebt nog geen stem uitgebracht en kunt daarom de resultaten niet bekijken.
 !exit
!endif

!msg $error

