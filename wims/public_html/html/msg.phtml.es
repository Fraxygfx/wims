
!if $wims_error=empty_data
 Ha enviado una petici�n incompleta. Por favor, complete sus datos antes de
 enviarlos.
 !exit
!endif

!if $wims_error=double_reply
 Ya ha enviado una respuesta a este problema, que ha sido analizada y 
 puntuada. Las respuestas repetidas se ignoran (�No use el bot�n `Recargar' 
 de su navegador para reenviar respuestas!). 
 !exit
!endif

Tipo de error: $wims_error $wims_error_parm.

