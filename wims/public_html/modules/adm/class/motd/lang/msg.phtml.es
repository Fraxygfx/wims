!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero s�lo tiene derecho a escribir el mensaje de una
 clase el supervisor registrado.
 !exit
!endif

!if user_notconnected=$error
 Ce participant n'est plus connect� !
 !exit
!endif


!msg $error
