!set wims_module_log=error: $error

!if error=nosupervisoremail
  No indicaron correo electr�nico. No les es pues posible enviar un correo electr�nico.
 !exit
!endif

!if empty_msg=$error
 �Su mensaje es vac�o!
 !exit
!endif

!if empty_user=$error
 No seleccionaron a ning�n participante. Compruebe los filtros.
 !exit
!endif

!if empty_mailuser=$error
 Ning�n de los participantes seleccionados tiene correo electr�nico
 !exit
!endif

!if noclass=$error
 Vous n'�tes pas identifi� dans une classe. Ne jouez pas avec la barre d'adresse du navigateur !
 !exit
!endif

!if notsupervisor=$error
 Vous n'�tes pas l'enseignant de cette classe. Ne jouez pas avec la barre d'adresse du navigateur !
 !exit
!endif

!msg $error
