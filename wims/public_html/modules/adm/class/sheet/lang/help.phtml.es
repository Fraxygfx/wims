!if $wims_read_parm!=$empty
 !goto $wims_read_parm
!endif

:dependancies
!read adm/title.phtml 1\
$(name_shtab[6])

  quiere decir que
  un participante debe primero lograr puntos en otros ejercicios de la hoja,
  antes de poder trabajar en este. Por ejemplo,
  <tt class="wims_code_words">1:50,2:30,3+4+5:60</tt>
  significa que el participante debe tener un �xito del 50% en el ejercicio 1,
  30% en el ejercicio 2, y una media de �xito del 60% en los ejercicios
  3, 4 y 5.
<div class="emptyline"></div>

!if $wims_read_parm!=$empty
 !exit
!endif

:allowtype

!read adm/title.phtml 1\
Indicaci�n sobre el registro de las notas.

 En el modo selectivo puede imponer una
 restricci�n en el tiempo en el que se grabar�n las puntuaciones a�adiendo las
 palabras
 <tt class="wims_code_words">
&gt;aaaammdd.hh:mm</tt>
 (inicio) y/o
 <tt class="wims_code_words">
&lt;aaaammdd.hh:mm</tt>
 (fin). Las fechas y horas deben estar indicadas en tiempo local del SERVIDOR
 y estas palabras deber ir separadas unas de otras por espacios.

!exit

:feedback
!read adm/title.phtml 1\
$(name_shtab[10])
!! for translation copy the part of the lang/help.phtml.fr corresponding to the record :feedback
!read lang/help.phtml.fr feedback

!exit
