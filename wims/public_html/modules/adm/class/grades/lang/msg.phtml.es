!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero s�lo puede acceder a esta p�gina el profesor registrado de
 la clase.
 !exit
!endif

!if bad_class=$error
 Extra�o, pero ��su clase no es v�lida!!
 !exit
!endif

!if too_many_users=$error
 Su clase tiene demasiados participantes ($ucnt).
 Las puntuaciones se pueden introducir manualmente
 s�lo para clases con un m�ximo de $maxuser participantes. 
 Lo sentimos.
 !exit
!endif

!msg $error

