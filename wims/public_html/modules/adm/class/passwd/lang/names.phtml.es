!set lang_exists=yes

!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>
 
!set months=en,feb,mar,abr,may,jun,jul,ag,sept,oct,nov,dic

!set module_title=Cambio de la contraseña

!distribute line Elija el tipo de contraseña\
  Su contraseña personal (para entrar en la clase como profesor)\
  Contraseña de los participantes\
  no necesita introducir la contraseña actual en este caso\
  Contraseña de la clase (utilizada por los participantes para inscribirse)\
  Introduzca la contraseña actual\
  Ahora la contraseña nueva\
  Vuelva a teclear la nueva contraseña\
  Para las contraseñas personales: preceda la contraseña nueva con el signo <tt class="d">+</tt> si desea añadir contraseñas de un solo uso.\
  La contraseña debe estar compuesta únicamente de entre 4 y 16 caracteres alfanuméricos.\
  el programa acepta la contraseña vacía, pero es posible que el administrador del sitio prohiba las clases sin contraseña\
into name_passwdtype,name_persopasswd,name_partpasswd,name_warning1,name_classpasswd,\
  name_actualpasswd,name_newpasswd,name_newpasswd2,name_jetable,name_alphanumer,name_emptypasswd