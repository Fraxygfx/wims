!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!distribute line Lista de foros\
	Autentificaci�n del propietario\
	Autentificaci�n del participante\
	Inscripci�n de un usuario\
	into n_list,n_authowner,n_authuser,n_register

!distribute line invitado\
  participante\
  propietario\
  inscribirse\
  No se han encontrado en este sitio foros de discusi�n.\
  Contrase�a del propietario\
into name_visitor,name_user,name_owner,name_register,name_noforum,\
 name_pass_owner

!set name_number_message=!nosubst Alojamos $ccnt foros de discusi�n en este sitio.\
Busque el foro que le interese en la siguiente tabla:
	
	
	
!exit

:create
Pulse en el tipo de conexi�n para entrar en el foro, o
pulse en la palabra `inscribirse' para darse de alta. Tambi�n puede
!href module=adm/forum/regforum crear su propio foro
 en este sitio.

!exit

:enter
Para entrar en <b><font color=green>$mb_title</font></b>
como <em>usuario inscrito</em> por favor introduzca su nombre de
usuario (login) y su contrase�a personal.

!exit

:owner
Para entrar en  <b><font color=green>$mb_title</font></b> como su
<em>propietario</em>, por favor, introduzca la contrase�a del propietario.

!exit