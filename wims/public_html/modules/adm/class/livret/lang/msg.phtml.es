!set wims_module_log=error: $error
<b>$wims_name_Error</b>.
!goto $error
!exit

:toomanycomp
 No pueden a�adir m�s competencias, el l�mite es de $maxcomp !
!exit

!msg $error