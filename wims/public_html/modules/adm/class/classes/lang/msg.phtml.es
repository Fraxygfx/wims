!set wims_module_log=ERROR $error

<span class="wims_warning">$wims_name_Error</span>.

!if $error=bad_password
 Contrase�a no reconocida. Por favor vuelva a intentarlo pasados unos segundos.
 <form action="#" name="chrono">
 �<span class="wims_warning">$wims_name_warning</span>! �Cualquier contrase�a enviada en los pr�ximos 5 segundos
 ser� rechazada!
 <input size=1 name="clock"> </form>
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

!msg $error

