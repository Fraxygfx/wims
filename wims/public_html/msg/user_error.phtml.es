Status: 450 WIMS User Error
Server: WIMS $wims_version (WWW Interactive Multipurpose Server)
Content-type: text/html; charset=iso-8859-1
Cache-Control: no-cache
Pragma: no-cache

<html><head>
<meta http-equiv=expires content="1 Jan 1990">
<meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
<meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
!if exam_ isin $wims_user_error
<style type="text/css"><!--
body {text-align: justify;
padding-left: 3%; padding-right: 3%;}
--></style>
</head><body onload="window.resizeTo(500,200);window.moveTo(250,300);">
<h1 align="center">ERROR</h1>
!goto examerr
!endif
</head><body>
!if threshold iswordof $wims_user_error
 <hr width="1"/>
 <H1 align="center">Sobrecarga</H1>
 <hr width="50%"/><p>
 Este servidor WIMS <font color="blue">$httpd_HTTP_HOST</font> 
 est� sobrecargado en este momento con un gran n�mero de solicitudes,
 y no puede servir a m�s usuarios. Por favor, vuelva m�s tarde, o
 visite otro servidor WIMS.
 <p>Sentimos este inconveniente, y esperamos poder servirle pronto.
 !read mirror.phtml.es
 </body></html>
 !exit
!endif

!if overload iswordof $wims_user_error
  <hr width="1"/>
  <h1 align="center">Lo sentimos</h1>
  Este servidor WIMS ha bloqueado su conexi�n: se ha superado la cuota de conexiones.
  </body></html>
  !exit
!endif

!if ++++missing_ isin ++++$wims_user_error
 <hr width="1"/>
 <h1 align="center">Lo sentimos</h1>
 <hr width="50%"/><p>
 WIMS necesita de la presencia de software
 !set miss=!upper $missing_software
 <span class="wims_warning">$miss</span>
 para procesar su petici�n, pero este software no est� disponible
 (o no es visible para WIMS) en este servidor.
 <p>
 Puede
 <a href="mailto:$wims_site_manager?subject=$missing_software o disponible en WIMS">escribir
 al administrador del sitio</a> para informarle del problema, o seleccionar un
 espejo de la tabla de abajo.
 <a href="wims.cgi">P�gina de inicio de WIMS</a>.
 !read mirror.phtml.en
 </body></html>
 !exit
!endif

!if trapped iswordof $wims_user_error
 <h1 align="center">�Alto!</h1><hr/>
 El contenido de 
 <a href="http://$httpd_HTTP_HOST">$httpd_HTTP_HOST</a> no es 
 compatible con los programas de almacenamiento de p�ginas ni
 los `aceleradores web'.
 <p>
 Para acceder a las actividades WIMS de este sitio, por favor, utilice
 un navegador web ordinario, sin programas de aceleraci�n instalados.
 <p>
 Recuerde que las p�ginas de WIMS se generan din�micamente. No pueden
 usarse desconectados.
 </body></html>
 !exit
!endif

<h1 align="center">Error de WIMS</h1><hr/>

Hay un error en su solicitud a este sitio WIMS.<p>

!if module_change iswordof $wims_user_error
 !if $wims_human_access=yes
  Por favor, evite usar el bot�n `Atr�s' de su navegador,
  porque est� en un servidor interactivo.
  <p><center>
  !set tit=!module title $module
  !default tit=$module
  !href module=$module $tit
  &nbsp;&nbsp;&nbsp;
  !href $ P�gina principal de WIMS
  !if $httpd_HTTP_REFERER!=$empty
   &nbsp;&nbsp;&nbsp;<a href="$httpd_HTTP_REFERER">Salir de WIMS</a>
  !else
   </center><p>
   <small>Si quiere salir de este sitio, ignore este mensaje y siga
   pulsando el bot�n `Atr�s'.</small>
  !endif
  !exit
 !endif
 Ha solicitado un cambio ilegal de m�dulo.
 �Est�s usando un programa autom�tico para acceder a este sitio?
 :unblock
 !form new
 <input type="hidden" name="module" value="home"/>
 <input type="hidden" name="deblockparm" value="$[randint(10000000)+1000000]"/>
 Si simplemente ha pulsado el bot�n `Atr�s' de su navegador,
 por favor, escriba la palabra `wims' aqu�:
 <input size="8" name="special_parm"/> entonces
 <input type="submit" value="enviar al servidor"/>.</form>
 <p>
 Por favor, tenga en cuenta que las p�ginas de este sitio se generan
 din�micamente. As� que s�lo se pueden usar estando conectados, mediante
 un navegador normal. Es in�til almacenar estas p�ginas usando un
 robot.
 !if robot_doubt iswordof $wims_user_error
  <small>Y tenga en cuenta que la gente que intente hackear este sitio
  ver� como se le niega definitivamente el acceso.</small>
 !endif
 !exit
!endif

!if robot_doubt iswordof $wims_user_error
 Bloqueamos definitivamente su acceso a este sitio, porque se
 sospecha que est� usando un programa autom�tico para almacenar
 p�ginas.
 !goto unblock
!endif

!if allow_violation iswordof $wims_user_error
  No tiene derechos para definir la variable ``$wims_error_data''
  con el comando ``$cmd''.
!endif

!if bad_command iswordof $wims_user_error
  El comando ``$cmd'' no es v�lido.
  <p> Los comandos v�lidos son: <pre>
  new, renew, reply, hint, config </pre>
!endif

!if bad_host iswordof $wims_user_error
  La sesi�n ``$session'' ya est� creada por otro ordenador. No puede
  acceder a ella. <p>
  Tenga en cuenta que, debido a razones de seguridad, WIMS no le permite
  cambiar de cliente en una sesi�n de trabajo. Desafortunadamente algunos
  proveedores de servicios de internet dan una direcci�n din�mica, la
  cual puede cambiar durante una conexi�n. Estamos trabajando sobre 
  este problema.
!endif

!if need_https iswordof $wims_user_error
 Debe conectarse a su clase mediante http seguro (https).
 !set refname=!replace http:// by https:// in $wims_ref_name
 <a href="$refname?session=$wims_session&module=home&cmd=new">Pruebe</a>.
 !exit
!endif

!if bad_insnum iswordof $wims_user_error
  El nombre de archivo para inserci�n din�mica no es v�lido.
!endif

!if cmd_output_too_long iswordof $wims_user_error
  El resultado intermedio de la computaci�n ha excedido la longitud m�xima.
  Probablemente ha hecho una solicitud que no es realista. Simplifique su
  petici�n, por favor.
!endif

!if double_click iswordof $wims_user_error
 Esta solicitud llega mientras tiene activos otros procesos.<p>
 Si ha pulsado dos veces espere, por favor,
 <span class="wims_warning">$wims_cpu_limit segundos</span>
 para que el proceso antiguo termine, y entonces
 !href cmd=resume pulse aqu�
 para volver al trabajo. (Y por favor, sea m�s paciente la pr�xima vez
 que pida a WIMS que haga c�lculos largos.)
 <p>
 Si est� usando el bot�n ``Atr�s'' de su navegador para salir de WIMS, 
 ignore este mensaje y siga.
 !exit
!endif

!if invalid_char_in_query_string iswordof $wims_user_error
  La sustituci�n  ``$wims_error_data'' en la cadena de par�metros es ilegal.
!endif

!if name_conflict iswordof $wims_user_error
  ``$wims_error_data'' es un nombre reservado de WIMS.
!endif

!if no_command iswordof $wims_user_error
  No hay comando.
!endif

!if no_insnum iswordof $wims_user_error
  Ha solicitado una inserci�n din�mica, sin dar su n�mero.
!endif

!if no_module_name iswordof $wims_user_error
  Ha pedido una nueva sesi�n, sin nombre de m�dulo.
!endif

!if no_session iswordof $wims_user_error
  No hay n�mero de sesi�n.
!endif

!if parm_too_long iswordof $wims_user_error
  Su cadena de par�metros ha excedido el l�mite. No se permite por
  razones de seguridad, lo siento.
!endif

!if string_too_long iswordof $wims_user_error
  La definici�n de variable tiene una longitud que excede el l�mite.
!endif

!if too_many_variables iswordof $wims_user_error
  El n�mero de par�metros que transmiti� excede el l�mite autorizado 
  en este sitio WIMS.
!endif

!if unmatched_parentheses iswordof $wims_user_error
  Hemos detectado par�ntesis sin correspondencia en su solicitud. Puede
  corregir el error aqu�:
  !form $cmd
  $(name$bad_parentheses) =
  !for i in module,special_parm,worksheet
   !if $($i)!=$empty
    !set value=!translate " to $ $ in $($i)
    <input type="hidden" name="$i" value="$value"/>
   !endif
  !next i
  !for i=0 to $user_var_no-1
   !if $i!=$bad_parentheses
    !set value=!translate " to $ $ in $(value$i)
    <input type="hidden" name="$(name$i)" value="$value"/>
   !endif
  !next i
  !set value=!translate " to $ $ in $(value$bad_parentheses)
  !set len=!charcnt $value
  !set n=!linecnt $value
  !if $n<=1
   !if $len<55
    !set len=$[$len+3]
   !else
    !set len=59
   !endif
   <input size="$len" name="$(name$bad_parentheses)" value="$value"/><p>
  !else
   !if $n>10
    !set n=10
   !endif
   <textarea rows="$n" cols="50" name="$(name$bad_parentheses)">$value</textarea>
   <p>
  !endif
  Then
  <input type="submit" value="env�a la petici�n corregida."/>
  </form><p><hr/><div class="wimscenter">
  !href cmd=resume Descartar la �ltima solicitud
, or
  !href $ p�gina principal de WIMS
.</div>
  !exit
!endif
  
!if wrong_module iswordof $wims_user_error
  El m�dulo ``$module'' que ha solicitado no existe en este servidor.
!endif

!if wrong_session iswordof $wims_user_error
  El n�mero de sesi�n ``$session'' no es v�lido (o ha dejado de serlo).
  <a href="wims.cgi">Crear una nueva sesi�n.</a>.
!endif  

!if rafale iswordof $wims_user_error
 �Por favor no juegue con los ejercicios!
 <p>
 Debe tomarse su tiempo para pensar bien en c�mo resolver los ejercicios
 correctamente, en lugar de solicitar unos nuevos una y otra vez.
 !href cmd=resume Cancelar la �ltima petici�n
.
 !if $wims_user!=$empty and $wims_user!=supervisor
  <p><span class="wims_warning">$wims_name_warning.</span>! Don't repeat this error!
  Irregular activities may give you bad scores even when score registration is
  closed.
 !endif
 !goto end2
!endif

:examerr

!if exam_dep iswordof $wims_user_error
  Podr� hacer este ejercicio s�lo cuando haya hecho suficientes progresos en
  !if , isin $dep_list
   ejercicios $dep_list.
  !else
   ejercicio $dep_list.
  !endif
  Pruebe primero a hacer estos �ltimos.
  !goto examend
!endif

!if bad_exam iswordof $wims_user_error
  Ha solicitado una petici�n ilegal en una sesi�n de examen.
  !goto examend
!endif

!if exam_exo_finished iswordof $wims_user_error
  Ya ha realizado este ejercicio, con una puntuaci�n de $wims_exo_lastscore.
  No puede volver a hacerlo porque nos encontramos en un examen.
  !goto examend
!endif

!if expired_exam iswordof $wims_user_error
  No tiene m�s tiempo para trabajar en el examen.
  :examend
  !set pses=!translate _ to , in $wims_session
  !set pses=!item 1 of $pses
  !set pser=!randint 1,999
  !set wims_opener=window.opener.location='$wims_ref_name?session=$pses.$pser&cmd=reply&job=student';
  <p><center>
  <a href=# onclick="window.close();$wims_opener">Cerrar esta ventana</a>.
  </center><p>
  !exit
!endif

!if exam_closed iswordof $wims_user_error
 Este examen no est� accesible desde su conexi�n en este momento. Por favor, 
 verif�quelo con el supervisor de su clase.
 !goto examend
!endif

!if bad_ident iswordof $wims_user_error
 Su petici�n contiene un error de identificaci�n de usuario.
 �Est� intentando conectarse a la sesi�n de alg�n otro?
 <p>
 Por favor
 <a href="wims.cgi?special_parm=ignorecookie&special_parm2=$[randint(10^8)]">establezca una nueva conexi�n</a>.
 </body></html>
 !exit
!endif

!if no_access iswordof $wims_user_error
  Su petici�n ha sido rechazada por las normas de acceso de este sitio. Lo sentimos.
  !goto end
!endif  

!if class_closed iswordof $wims_user_error
  Sorry.
  <p>
  Access to this virtual class is temporarily closed by its supervisor.
  Come back later!
  <div class="wimscenter">
  !href cmd=close&module=home WIMS
  </div>
  </body></html>
  !exit
!endif  

:end
<p> Si ve este mensaje despu�s de seguir un enlace a otra p�gina,
probablemente es porque el enlace no est� bien preparado. En este caso,
por favor, contacte con el autor de la p�gina, e inf�rmele del error.
Tambi�n puede escribir al 
<a href="mailto:$wims_site_manager?subject=wims.cgi">administrador de este sitio</a>,
con tantos detalles como sean posibles sobre las circunstancias bajo
las cuales ocurri� el error.

:end2
<hr/><div class="wimscenter">
!href module=home&cmd=new P�gina principal de WIMS
</div>

</body></html>

