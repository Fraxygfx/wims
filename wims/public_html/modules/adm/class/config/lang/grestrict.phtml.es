
!form renew
 <input type="hidden" name="job" value="grestrict"/>
 Desde aqu� puede configurar las restricciones a nivel de clase de los sitios
 a los que se les permita recibir calificaciones. Estas restricciones 
 se aplicar�n siempre independientemente de la configuraci�n individual
 de las hojas.
 <p>
 <table border="0">
 <tr><td align="right">Sitios a los que se les permite recibir calificaciones:
 <td><input size="35" name="allow" value="$allow"/>
 <tr><td align="right">Exceptuados:
 <td><input size="35" name="except" value="$except"/>
 </table> <p>
 <input type="submit" name="save" value="Guardar"/>&nbsp;&nbsp;&nbsp;
 <input type="submit" name="abandon" value="Cancelar"/>

!formend

<p>
Puede introducir una o varias palabras en cada campo. El servidor
verificar� cada palabra contra el nombre o el n�mero IP de cada sitio que se conecte.
La regla correspondiente se aplicar� cada vez. Una palabra definida aqu� es
una subcadena de caracteres del nombre de la estaci�n de trabajo o de su n�mero IP.
<p>
<div class="wims_smallremark"><b>Sugerencia.</b> En el campo 
<span class="wims_label">Sitios a los que se les permite recibir calificaciones</span>, puede imponer una
 restricci�n en el tiempo disponible para el registro de las notas a�adiendo 
 las palabras
 <span class="tt wims_code_words">
&gt;aaaammdd.hh:mm</span>
 (inicio) y/o
 <span class="tt wims_code_words">
&lt;aaaammdd.hh:mm</span>
 (fin). Las fechas y horas deben indicarse en tiempo local del SERVIDOR,
 y estas palabras deben estar separadas unas de otras por espacios.
  </div>

