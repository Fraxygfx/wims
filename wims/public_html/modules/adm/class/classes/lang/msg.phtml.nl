!set wims_module_log=ERROR $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error=bad_password
Het wachtwoord is afgekeurd. Probeer na 5 seconden opnieuw.<br> 
 <form action="#" name="chrono">
 <span class="wims_warning">$wims_name_warning</span>! 
 Elk wachtwoord dat binnen de volgende 5 seconden wordt ingevuld, wordt afgekeurd !
 
 <input size=1 name="clock"> </form>
 !exit
!endif

!if $error=in_exam
Je kan natuurlijk niet van klas veranderen tijdens een overhoring !
 !exit
!endif

!if $error=recent_rafale
Dit account is i.v.m. verdachte activiteiten, voor 10 minuten geblokkeerd ! 
 !exit
!endif

!if $error=no_cgu
    De algemene voorwaarden voor het gebruik van deze server zijn nog niet geaccepteerd.
    Geef eerst goedkeuring aan deze algemene voorwaarden: 
 !form reply
  !formcheckbox agreecgu list yes prompt $name_acceptcgu
  [
  !href cmd=help $name_seecgu
  ]
  !let save_logincgu=$auth_user
  <center>
  <input type="submit" value="$wims_name_tosave">
  </center>
 </form>
 !exit
!endif

!if $error=bad_loginmail
Je wordt door het systeem niet herkend of je hebt bij de inschrijving geen geldig emailadres opgegeven.
 <br>
 Vraag je docent om een nieuw wachtwoord. 
 <form action="#" name="chrono">
 <span class="wims_warning">$wims_name_warning</span> !
 Deze procedure schakeld weer in na een timeout van 5 seconden &nbsp;! 
 <input size=1 name="clock"> </form>
 !exit
!endif

!msg $error


