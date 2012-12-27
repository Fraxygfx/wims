!if $special_parm!=$empty
 !read help/$special_parm.phtml
 !goto end
!endif

!if $login=$empty
<p>
 Esta herramienta permite la creaci�n y el desarrollo en l�nea de m�dulos de actividades WIMS ordinarios.
 </p><p>
Tal m�dulo puede ser un ejercicio de plena potencia (comparado a los ejercicios OEF que son m�s f�ciles de escribir pero tienen capacidades limitadas&nbsp;; ver
 !href module=adm/createxo Createxo
 ) or a sophisticated computational tool. o una herramienta de c�lculo sofisticada. Deben escribirle en la lengua interpretada de WIMS, tal como se explica en
 !href target=wims_help module=help/wimsdoc WIMS technical documentation
.
 </p><p>
 Si se interesan, se puede pedir a
 !mailurl $wims_site_manager the manager of this WIMS site\
WIMS Modtool id
 una identificaci�n de acceso/contrase�a de desarrollador que les permitir� utilizar esta herramienta.
</p>
 !exit
!endif

!if $mod=$empty
<p>
 Para trabajar sobre un m�dulo, deben en primer lugar crearlo. Para crear un
 nuevo m�dulo, hay que presionar los v�nculos convenientes y luego llenar los formularios
 a tal efecto.
 </p>
!endif
<p>
Quiere consultar
 !href target=wims_help module=help/wimsdoc WIMS technical documentation
 con el fin de conocer la estructura de un m�dulo WIMS as� como el sintaxis y el formato de su contenido.
</p><p>
Encontrar�n aqu� la
!href target=wims_help module=adm/createxo $wims_name_docoef
</p><p>
Indicaciones especiales&nbsp;:
</p>
<ol>
<li>Para eliminar errores de un fichero, pueden colocar una l�nea
<pre>
$!debug ...
</pre>
en este fichero, donde� puede ser cualquier cadena de texto. Cuando
prueban su m�dulo, la ejecuci�n va a par a esta l�nea y el contenido de� se les mostrar�. Si� incluye variables,
se substituyen estos �ltimos seg�n las normas
habituales de sustituci�n de variables de WIMS.

</li></ol>

:end
