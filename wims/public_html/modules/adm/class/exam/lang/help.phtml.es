!goto $wims_read_parm


:allowtype

!read adm/title.phtml 1\
Indicaci�n sobre el registro de las notas.

En modo selectivo, puede imponer una
 restricci�n en el tiempo de registro de las notas a�adiendo las
 palabras
 <tt class="wims_code_words">
&gt;aaaammjj.hh:mm</tt>
 (comienzo) y/o
 <tt class="wims_code_words">
&lt;aaaammjj.hh:mm</tt>
 (fin). Las fechas y horas deben ser en tiempo local del SERVIDOR
- y estas palabras deben estar separadas por espacios.
 <br/>
 Las horas tope tienen la finalidad de permitir que la gente haga
 un examen en sesiones diferentes. Un participante que haya trabajado
 en el examen antes de una hora de corte no puede volver a trabajar
 en �l despu�s del tope.
 <br/>
 Formato de las horas tope: <tt class="wims_code_words">aaaammjj.hh:mm</tt> (separe varias
 horas tope con espacios).

!! for translation copy the part of the lang/help.phtml.fr corresponding to the record :variable
!read lang/help.phtml.fr variable

!if $wims_read_parm!=$empty
 !exit
!endif

:dependency
  <p class="wimscenter" style="font-weight:bold;">dependencias de puntuaciones</p>
La expresi�n ``dependencias de puntuaciones''
  se refiere a que un participante debe primero lograr puntos
  en otros ejercicios de la hoja, antes de poder trabajar en este.
  Por ejemplo,
  <tt class="wims_code_words">1:50,2:30,3+4+5:60</tt>
  significa que el participante debe tener un �xito de 50% en el ejercicio 1,
  30% en el ejercicio 2, y una media de �xito del 60% en los ejercicios
  3, 4, 5.
!if $wims_read_parm!=$empty
 !exit
!endif

:options
  <p class="wimscenter" style="font-weight:bold;">Options.</p>
 Una �nica opci�n est� disponible por el momento
  <ul>
   <li><em>autogen</em> quiere decir que se genera el ejercicio autom�ticamente aunque el usuario no pulsa arriba. Para que pueda consultar el ejercicio registrado cuando se cierra la sesi�n.
Formalmente desaconsejado excepto para ejercicios a correcci�n manual.
 </li>
  </ul>
!if $wims_read_parm!=$empty
 !exit
!endif

:contenu
  <p class="wimscenter" style="font-weight:bold;">Contenu d'un exercice</p>
Este ejercicio se puede elegir (aleatoriamente) de una lista de ejercicios
existentes en las hojas de trabajo. Por favor, marque los ejercicios de la
hoja de trabajo de la siguiente lista, los cuales ser�n candidatos
a ejercicio de este examen.
!if $wims_read_parm!=$empty
 !exit
!endif
