!if $wims_read_parm=$empty
   !let code=$wims_class
 !else
   !let code=$wims_read_parm
 !endif

Diversos enlaces a su $name_classe:<ul>
 <li>El enlace
  <a href="http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/classes&type=authsupervisor&class=$code">http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/classes&type=authsupervisor&class=$code</a>
  le lleva a la p�gina de mantenimiento $name_classesss (preparaci�n de hojas de trabajo, lista de los participantes y de sus progresos, etc.). 
 <p></li>
 <li>El enlace
  <a href="http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/reguser&class=$code&subclass=yes">http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/reguser&class=$code&subclass=yes</a>
  permite a sus alumnos autoinscribirse en una clase (o le permite inscribirles)
  !if $Cltype>=2
    cuando haya creado las clases del $name_classe.
  !endif
  !if $password!=$empty
    (necesitar�n la contrase�a de la clase para inscribirse por s� mismos).
  !endif
 <p></li>
 !if $Cltype>=2
  <li>El enlace
   <a href="http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/reguser&class=$code">http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/reguser&class=$code</a>
   permite a los profesores inscribirse en su $name_classe (o le permite a usted inscribirles).
   !if $password!=$empty
    (necesitar�n la contrase�a de la clase para inscribirse por s� mismos).
   !endif
  <p></li>
 !endif
 <li>Finalmente, el enlace
  <a href="http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/classes&type=authparticipant&class=$code">http://$httpd_HTTP_HOST$httpd_SCRIPT_NAME?lang=es&module=adm/class/classes&type=authparticipant&class=$code</a>
  lleva a los estudiantes inscritos a la p�gina inicial $name_classesss. Las hojas de trabajo que prepare les ser�n accesibles desde esta p�gina de inicio.
 <p></li>
</ul>
<p><span class="wims_warning">Importante</span>. 
�Guarde estos enlaces antes de salir de esta p�gina!
<p>
Tambi�n le aconsejamos que anote el n�mero de la clase : <tt>$code</tt>.

