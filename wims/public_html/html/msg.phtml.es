
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

!if $wims_error=no_ldap_parameter
 Vous devez remplir les champs marqu�s d'un ast�risque. Consultez pour cela 
 le gestionnaire de votre annuaire ldap. 
 !exit
!endif

!if $wims_error=bad_class
 Extra�o, pero encuentro que su clase no es v�lida!
 !exit
!endif


!if $wims_error iswordof bad_day day_dontexist
 La fecha introducida no es v�lida.
!exit
!endif


!if $wims_error=not_supervisor
 Lo siento, pero esta operaci�n se reserva a los profesores registrados de una clase.
 !exit
!endif

!if $wims_error iswordof nouser bad_user bad_usercls
 �Extra�o pero el participante no parece existir!!!!
!exit
!endif

!if $wims_error=insert_fail
 El software no ha podido insertar su trabajo en la base de datos. Por
 favor, compruebe sus datos.
 !exit
!endif

!if bad_pass iswordof $wims_error
 Mala contrase�a: debe tener entre 4 y 16 caracteres,
 cartas y cifras solamente. �Y la contrase�a repetida debe ser id�ntica
 primero! Intente a�n.
 !exit
!endif

!if bad_auth iswordof $wims_error
 Fracaso de autenticaci�n. Vuelve a intentar.
 !exit
!endif

!if bad_login=$wims_error
 Su identificador de usuario contiene caracteres ilegales. <p>
 Por favor utilice una palabra que contenga �nicamente cifras o letras
 sin acentos y sin espacios entre ellas.
 !exit
!endif

Tipo de error: $wims_error $wims_error_parm.
