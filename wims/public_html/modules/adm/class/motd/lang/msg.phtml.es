!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero s�lo tiene derecho a escribir el mensaje de una
 clase el supervisor registrado.
 !exit
!endif

!if bad_class=$error
 �Qu� extra�o, detecto que su clase no es v�lida!
 !exit
!endif

!if bad_user=$error
 �Extra�o, no encuentro a este participante en esta clase!
 !exit
!endif
