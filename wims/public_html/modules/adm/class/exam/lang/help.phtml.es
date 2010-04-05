!goto $wims_read_parm
!exit

:allowtype

<center><b>Indicaci�n sobre el registro de las notas.</b> </center>
                             En modo selectivo, puede imponer una
 restricci�n en el tiempo de registro de las notas a�adiendo las
 palabras
 <font color=blue><b>
 <tt>&gt;aaaammjj.hh:mm</tt></b></font>
 (comienzo) y/o
 <font color=blue><b>
 <tt>&lt;aaaammjj.hh:mm</tt></b></font>
 (fin). Las fechas y horas deben ser en tiempo local del SERVIDOR
- y estas palabras deben estar separadas por espacios.
 <br>
 Las horas tope tienen la finalidad de permitir que la gente haga
 un examen en sesiones diferentes. Un participante que haya trabajado
 en el examen antes de una hora de corte no puede volver a trabajar
 en �l despu�s del tope.
 <br>
 Formato de las horas tope: <tt>aaaammjj.hh:mm</tt> (separe varias
 horas tope con espacios).
!exit

:dependency
 <center><b>dependencias de puntuaciones</b></center>
La expresi�n ``dependencias de puntuaciones''
  se refiere a que un participante debe primero lograr puntos
  en otros ejercicios de la hoja, antes de poder trabajar en este.
  Por ejemplo,
  <font color=blue><tt>1:50,2:30,3+4+5:60</tt></font>
  significa que el participante debe tener un �xito de 50% en el ejercicio 1,
  30% en el ejercicio 2, y una media de �xito del 60% en los ejercicios
  3, 4, 5.
!exit

:options
 <center><b>Options.</b></center>
 Una �nica opci�n est� disponible por el momento
  <ul>
   <li><em>autogen</em> quiere decir que se genera el ejercicio autom�ticamente aunque el usuario no pulsa arriba. Para que pueda consultar el ejercicio registrado cuando se cierra la sesi�n.
Formalmente desaconsejado excepto para ejercicios a correcci�n manual.</li>
  </ul>
!exit

:contenu
 <center><b>Contenu d'un exercice</b></center>
Este ejercicio se puede elegir (aleatoriamente) de una lista de ejercicios
existentes en las hojas de trabajo. Por favor, marque los ejercicios de la
hoja de trabajo de la siguiente lista, los cuales ser�n candidatos
a ejercicio de este examen.
!exit
