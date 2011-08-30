 !goto $wims_read_parm

:1
Una <font color=blue>agrupaci�n de clases</font> permite a los
 profesores intercambiar o compartir materiales pedag�gicos, y a los
 alumnos pasar de una clase a otra sin tener que volver a introducir la
 contrase�a. Puede crear aqu� su <font color=blue>p�gina de entrada</font>.
 <p>
 Una <font color=blue>estructura de centro educativo</font> es un conjunto
 multinivel de clases virtuales, capaz de dar respuesta a las necesidades
 de un centro educativo al completo: bases de datos de alumnos y de
 profesores, diferentes niveles de ense�anza, programas, asignaturas y
 clases de alumnos, responsabilidades de los profesores, etc.
 Puede crear aqu� su p�gina inicial, llamada tambi�n
 <font color=blue>portal</font>.
 !exit
:2

  La creaci�n
 !if $Cltype<2
   de una <font color="blue">clase</font>
   es una operaci�n reservada a los <font color="blue">profesores</font>.
 !else
   !if $Cltype=2
    de una <font color="blue">p�gina de entrada a una $name_classe</font>
   !else
    de una <font color="blue">$name_classe</font>
   !endif
   es una operaci�n reservada a un <font color="blue">administrador</font>
  (que puede ser un profesor).
 !endif
 Necesitar� una direcci�n de correo activa para poder hacerlo.
 Despu�s de crear su  $name_classe,
 ha de asumir la responsabilidad de su mantenimiento. <p>
 Para crear su $name_classe, por favor, rellene la siguiente informaci�n.
!exit

:step1
 �Bienvenido/a, $supervisor!<p>
 Est� creando
 !if $Cltype<2
  la
 !else
  el
 !endif
 $name_classe $classname en el sitio WIMS $httpd_HTTP_HOST,
 !if $Cltype=1
  de nivel <b><font color=green>$name_level</font></b>,
 !endif
 que expirar� el $exp_day/$exp_month/$exp_year. El n�mero
 m�ximo de participantes es de $ilimit;
 la inscripci�n est�
 !if $pword!=$empty
  protegida por la contrase�a $name_classesss.
 !else
  abierta a todo el mundo en internet (�Est� usted seguro? Sepa que
  el administrador del sitio puede rechazarlas y eliminarlas).
 !endif
 <p>
 Si encuentra un error en la informaci�n anterior, por favor
 !href module=$module&cmd=reply&step=0 corr�jala.
 <p>En caso contrario, para poder verificar la exactitud de sus contrase�as,
  escr�balas de nuevo.
 !exit
:step2

 �Bienvenido/a, $supervisor!<p>
 Ahora necesita una clave para terminar la operaci�n de creaci�n de
 su $name_classe bajo WIMS en el sitio $httpd_HTTP_HOST. <p>
 Esta clave acaba de ser enviada a su direcci�n de correo
 <tt class="wims_address">$email</tt>. Por favor, compruebe su buz�n de correo electr�nico (espere
 un poco si no llega), y lea el mensaje que se le ha enviado. Copie la clave del
 mensaje a continuaci�n.

!exit
:step3

�Bienvenido/a, $supervisor!<p>
 Su $name_classe $classname ya ha sido creada. �Felicidades, y que se divierta!<p>
 El n�mero de participantes est� limitado a $ilimit (incluido usted).

!exit
