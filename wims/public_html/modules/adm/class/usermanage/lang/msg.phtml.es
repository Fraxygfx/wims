!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if not_supervisor=$error
 Lo sentimos pero la operaci�n de preparaci�n /modificaci�n de una hoja
 de trabajo est� reservada a los profesores registrados de la clase.
 !exit
!endif

!if bad_classpass=$error
 Lo sentimos pero no ha introducido la contrase�a correcta de la clase.
 No est� autorizado a cambiar la informaci�n sobre los participantes.
 !exit
!endif

!if bad_user=$error
 Error de llamada: el participante <span class="tt wims_login">$checkuser</span> no existe.
 !exit
!endif

!msg $error

