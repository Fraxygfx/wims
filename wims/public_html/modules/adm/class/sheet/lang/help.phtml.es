!goto $wims_read_parm
!exit

:dependancies

<center><b>$(name_shtab[6])</b></center>
  quiere decir que
  un participante debe primero lograr puntos en otros ejercicios de la hoja,
  antes de poder trabajar en este. Por ejemplo,
  <font color=blue><tt>1:50,2:30,3+4+5:60</tt></font>
  significa que el participante debe tener un �xito del 50% en el ejercicio 1,
  30% en el ejercicio 2, y una media de �xito del 60% en los ejercicios
  3, 4 y 5.

!exit

:allowtype

<center><b>Indicaci�n sobre el registro de las notas.</b> </center>

 En el modo selectivo puede imponer una
 restricci�n en el tiempo en el que se grabar�n las puntuaciones a�adiendo las
 palabras
 <font color=blue><b>
 <tt>&gt;aaaammdd.hh:mm</tt></b></font>
 (inicio) y/o
 <font color=blue><b>
 <tt>&lt;aaaammdd.hh:mm</tt></b></font>
 (fin). Las fechas y horas deben estar indicadas en tiempo local del SERVIDOR
 y estas palabras deber ir separadas unas de otras por espacios.

!exit
:sheetpage

<center><b>Utilizar un bloque de documento para la presentaci�n de una hoja de trabajo</b></center>

Pueden poner la direcci�n de un bloque de documento (como< tt> c1/main< /tt>)
para la p�gina de presentaci�n de una hoja de trabajo.
El propio documento no tiene necesidad de ser legible de los participantes.
<p>
Dejar este campo vacio si desean utilizar la p�gina de presentaci�n normal.
<p>
Los v�nculos a los ejercicios individuales deben ser definidos por el pedido
<tt> \ exercise< /tt>.
Pueden utilizar las variables siguientes predefinidas: <ul>
<li>< tt> \ scorerequire</tt> Puntos requeridos por cada ejercicio
<Li>< tt> \ scoregot</tt> Trabajo del participante por cada ejercicio
<Li>< tt> \ scoremean</tt> Resultado medio del participante por cada ejercicio
<Li>< tt> \ expiration</tt> fecha de expiraci�n de la hoja, aaaammdd
<Li>< tt> Fecha del d�a, aaaammdd

</ul>
