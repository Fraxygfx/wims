!set wims_module_log=error: $error

!if no_subclass iswordof $error
 No est� autorizado para crear subclases en la situaci�n actual.
 !set restart=no
 !exit
!endif

!if no_right iswordof $error
 Lo sentimos, no est� autorizado a crear clases virtuales en este sitio.
 Por favor
 !mailurl $wims_site_manager contacte con el administrador del sitio\
Creaci�n de una clase virtual
 para recibir m�s informaci�n.
 !set restart=no
 !exit
!endif

!if not_manager iswordof $error
 Lo sentimos, s�lo el administador del sitio est� autorizado para
 crear un portal de centro educativo.
 !exit
!endif

!if getpass iswordof $error
 !if $sendmail!=$empty
  <div class="wimscenter">La contrase�a se envi� a la direcci�n electr�nica $sendmail.
  </div>
  
 !endif
 !if $regpass!=$empty
  Lo sentimos, su contrase�a no es correcta. Vuelva a intentarlo.
 !else
  !set cname=!item $cltype+1 of clases virtuales,,agrupaciones de clases,,\
        portales de centro
  La creaci�n de $cname en este sitio est� protegida por una contrase�a.
  Debe introducir esta contrase�a antes de continuar.
 !endif
 
 !form reply
  <input type="hidden" name="step" value="0"/>
  Introduzca la contrase�a: <input size="16" name="regpass" type="password"/>
 
!formend
 <div>
 Nota. Puede solicitar la contrase�a necesaria para la creaci�n
 de clases virtuales al
 !mailurl $wims_site_manager administrador\
Contrase�a para la creaci�n de clases virtuales
 de este sitio WIMS.
 !set restart=no
 !exit
!endif

!if getid iswordof $error
 !if $regpass$regid!=$empty
  Lo sentimos, su contrase�a no es correcta. Vuelva a intentarlo.
 !else
  La creaci�n de clases virtuales en este sitio est� protegida por un
  sistema de autentificaci�n. Identif�quese por favor.
 !endif

 !form reply
  <table border="0" cellspacing="5">
  <tr><td align="right">
  Introduzca el nombre de su cuenta:</td><td><input size="20" name="regid"/></td>
  </tr><tr><td align="right">
  Y la contrase�a:</td><td><input size="16" name="regpass" type="password"/>
  <input type="submit" value="$wims_name_tosave"/></td>
  </tr></table>
 
!formend

 Nota. Por favor escriba al
 !mailurl $wims_site_manager administrador\
Contrase�a para la creaci�n de clases virtuales
 de este sitio si desea una cuenta con permisos para la creaci�n de
 clases virtuales.
 </p>
 !set restart=no
 !exit
!endif

!if class_quota=$error
 Est� autorizado a instalar hasta un total de $r_quota1 clases. Ha llegado
 al total; ya no puede a�adir m�s.
 !set restart=no
 !exit
!endif

!if bad_secure=$error
 �Su puesto actual no forma parte de su definici�n de acceso
asegurado (<span class="tt wims_code_words">$secure</span>)&nbsp;! Es un error probablemente
que tendr�a la consecuencia de prohibirles el acceso de control de su clase.
 <p>
Lea atentamente la documentaci�n siguiente. Si no comprenden todav�a,
dejan este campo vac�o (se les enviar�n c�digos secretos temporales
para las operaciones sensibles), o ponen la palabra <tt class="wims_code_words">all< /tt>
para desactivar esta medida de seguridad.

 </p><hr/>
 !read help/hosts.phtml
 !reset secure
 !exit
!endif

!if has_empty=$error
 No ha proporcionado todas las informaciones necesarias para la creaci�n
 de una clase. Por favor complete sus datos antes de enviarlos.
 !exit
!endif

!if too_short=$error
 El campo de datos <span class="tt wims_code_words">$(wims_name_$(error_subject))</span> parece demasiado corto.
 !exit
!endif

!if bad_date=$error
 La fecha de expiraci�n no es correcta.
 !exit
!endif

!if anti_date=$error
 Su clase tiene una fecha de expiraci�n anterior a la de hoy. �Habr�a
 expirado antes de ser creada!
 !exit
!endif

!if bad_level=$error
 Valor de nivel incorrecto.
 !exit
!endif

!if bad_email=$error
 Su direcci�n de correo electr�nico es visiblemente inv�lida.
 <p>
La creaci�n de clases s�lo puede tener �xito si
 proporciona SU VERDADERA direcci�n de correo.
 </p>
 !exit
!endif

!if existing=$error
 La clase $classname parece que ya existe. No puede volver a crear la
 misma clase.
 !exit
!endif

!if pass_discord=$error
 La contrase�a que ha vuelto a teclear no se corresponde con la primera.
 En consecuencia no se ha realizado la creaci�n de la clase; puede volver a
 intentarlo.
 !exit
!endif

!if bad_pass=$error
 Su $(name_$(error_subject)) contiene caracteres ilegales. <p>
 Por favor utilice una contrase�a que contenga �nicamente cifras o letras
 sin acentos y sin espacios entre ellas.
 !exit
!endif

!if bad_code=$error
 No ha tecleado la clave correcta para la clase. �Es correcta la direcci�n
 electr�nica que nos ha proporcionado?<p>
 Este fallo ha quedado registrado.
 </p>
 !exit
!endif

!if define_fail=$error or abuse=$error
 El servidor no ha podido a�adir su clase a la base de datos.
 Se trata de un error interno del programa.
 <p>
 Por favor informe del problema al
 !mailurl $wims_site_manager administrador de este sitio\
user registration failure
. �Gracias!
</p>
 !exit
!endif

!if duplicate=$error
 Ha intentado volver a crear una clase ya creada. �Quiz�s ha hecho click
 en el bot�n <tt>actualizar</tt>? En todo caso ya existe su clase
 $classname y esta segunda tentativa de creaci�n se ha ignorado.
  <div>
 !read adm/lang/links.phtml.$modu_lang
 </div>
 !exit
!endif

