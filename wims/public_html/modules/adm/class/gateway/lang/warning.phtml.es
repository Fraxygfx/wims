!goto $wims_read_parm

:dellevel

<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
�Y <font color="red">TODO</font>
lo que hay en este nivel ser� borrado <font color="red">DEFINITIVAMENTE</font>:
clases, programas, cursos, cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar este nivel?


!exit

:delclass

<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
�Y <font color="red">TODO</font>
lo que hay en esta clase ser� borrado <font color="red">DEFINITIVAMENTE</font>: 
cursos, cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar esta clase?

!exit

:delprog
<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
�Y <font color="red">TODO</font>
lo que hay en este programa ser� borrado <font color="red">DEFINITIVAMENTE</font>:
cursos, actividades, notas!
<p>
�Est� seguro de que quiere borrar este programa? 

!exit

:delcourse
<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
�Y <font color="red">TODO</font>
lo que hay en este curso ser� borrado <font color="red">DEFINITIVAMENTE</font>:
cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar este curso?

!exit

:delteacher
<<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
<p>
�Est� usted seguro de que queire borrar la cuenta de profesor <tt>$del</tt>
($user_firstname $user_lastname)?

!exit

:deltest
<font color="red"><b>AVISO</b>.</font> �Esta operaci�n es irreversible!
�Y <font color="red">TODO</font>
lo que hay en esta zona de pruebas ser� borrado <font color="red">DEFINITIVAMENTE</font>!
<p>
�Est� seguro de que quiere borrar la zona de pruebas?

!exit