!set wims_module_log=ERROR $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error=bad_password
 Contrase�a no reconocida. Por favor vuelva a intentarlo pasados unos segundos.
 <form action="#" name="chrono">
 �<span class="wims_warning">$wims_name_warning</span>! �Cualquier contrase�a enviada en los pr�ximos 5 segundos
 ser� rechazada!
 <input size="1" name="clock"/> </form>
 !exit
!endif

!if $error=in_exam
 No puede cambiar de clase cuando est� haciendo un examen.
 !exit
!endif

!if $error=recent_rafale
 Esta cuenta est� bloqueada durante 10 minutos debido a actividades irregulares.
 !exit
!endif

!if $error=no_cgu
No han aceptado las condiciones generales de uso de este servidor (UGC).
Primero debe aceptar los t�rminos de uso antes identificarle.
 !form reply
  !formcheckbox agreecgu list yes prompt $name_acceptcgu
  [
  !href cmd=help $name_seecgu
  ]
  !let save_logincgu=$auth_user
  <div class="wimscenter wimsform">
  <input type="submit" value="$wims_name_tosave"/>
  </div>
 
!formend
 !exit
!endif

!if $error=bad_loginmail
 Votre identifiant n'est pas reconnu ou vous n'avez pas d�fini d'adresse �lectronique lors de votre inscription. 
 <br/>
 Demandez � votre enseignant de vous attribuer un nouveau mot de passe.
 <form action="#" name="chrono">
 <span class="wims_warning">$wims_name_warning</span> ! Cette proc�dure de r�cup�ration de mot de passe est d�sactiv�e pendant 5 secondes &nbsp;!
 <input size="1" name="clock"/> </form>
 !exit
!endif

!msg $error

