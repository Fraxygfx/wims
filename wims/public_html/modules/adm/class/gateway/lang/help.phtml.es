!goto $wims_read_parm

:pass

<h2 class="wimscenter">Contrase�a de inscripci�n</h2>
<p>
Hay dos tipos de contrase�as de inscripci�n:
</p><p>
La contrase�a de inscripci�n en la plataforma permite crear cuentas
de profesores. Esta contrase�a no debe d�rsele NUNCA a los alumnos, puesto
que todos los que se inscriben directamente en la plataforma son reconocidos
como profesores, con los derechos de los profesores.
</p><p>
La contrase�a de inscripci�n de una clase o de un curso permite crear
cuentas de alumnos. Un alumno debe inscribirse en una clase dada en tanto 
que alumno, pero todas las inscripciones quedan registradas para todo el Centro.
</p><p>
S�lo las clases y ciertos cursos tienen necesidad de contrase�a de
inscripci�n: en las otras zonas (nivel, programa) no est� permitida
la inscripci�n de los alumnos.
</p><p>
Cuando quiera modificar las propiedades y no quiera cambiar la contrase�a
no tiene m�s que dejar el campo en blanco.
</p>

!exit
:passs

<h2 class="wimscenter">Contrase�a de profesor</h2>
<p>
Estas contrase�as permiten a los profesores acceder a la administraci�n
de los niveles, clases, programas o cursos. Por defecto se instala la
contrase�a de profesor de la zona superior.
</p><p>
Cuando modifique las propiedades y no quiera cambia la contrase�a no tiene
m�s que dejar el campo en blanco.


!exit

:progopt


<h2 class="wimscenter">Opciones de un programa</h2>

Si un programa es <em>obligatorio</em>, todos los alumnos de una clase que
tengan un curso que dependa del programa est�n autom�ticamente
inscritos en dicho curso. Dicho de otra forma, todos los cursos del programa
son obligatorios para las clases correspondientes.
</p><p>
Por contra, para un programa <em>optativo</em>, los alumnos deben
inscribirse espec�ficamente en sus cursos. Esto es �til cuando el programa
es opcional.
</p><p>
Si se encuentra en "s�" la instalaci�n autom�tica de los cursos del
programa, se crear� un curso por cada clase del nivel, en el momento de
la creaci�n del programa. Adem�s, se crear� autom�ticamente un curso
del programa cuando se cree una nueva clase en ese nivel.
</p><p>
Si la instalaci�n autom�tica de los cursos est� puesta a "no", los
profesores de las clases deben crear manualmente los cursos correspondientes
al programa.
</p>

!exit

:sechost
!reset wims_prefix
!set special_parm2=secure
!read wimshome/public_html/modules/adm/class/config/lang/help.$moduclass_lang/config.phtml

!exit

:structure

!read help/$moduclass_lang/structure.phtml

!exit

:supervisor


<h2 class="wimscenter">Profesor responsable de una zona</h2>
<p>
Cada zona (nivel, clase, programa, curso) de una estructura de centro educativo
debe tener un ense�ante responsable. Los derechos de acceso a las p�ginas
de administraci�n de la zona se rigen normalmente desde una cuenta de profesor.
</p><p>
Por defecto, el profesor responsable de la zona ser� el de la zona superior.
</p><p>
Si embargo cualquier otro ense�ante del centro puede tener tambi�n acceso 
a la administraci�n de la zona, si conoce la contrase�a del profesor-responsable
de la misma. La �nica diferencia es que el nombre y la direcci�n de correo electr�nico
que aparecer�n en las p�ginas de los alumnos de la zona ser�n los del profesor
responsable "oficial".
</p>

!exit
