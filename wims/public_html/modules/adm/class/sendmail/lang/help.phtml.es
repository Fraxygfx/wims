!if $special_parm!=$empty
 !goto $special_parm
!endif

:filter
Si definieron variables t�cnicas asociadas a los participantes
(por ejemplo su grupo), lo que puede hacerse
<ul><li>
con ayuda de la conexi�n hoja de c�lculo,
</li><li>
directamente en las propiedades de la cuenta de los estudiantes
</li><li> 
por medio de un cuestionario no an�nimo
</li></ul>
(v�ase las documentaciones correspondientes), pueden filtrar
a los estudiantes relativamente a estas variables. Las condiciones en una misma l�nea
deben ser todas llenadas y en el caso de varias l�neas, las condiciones al menos de una l�nea
deben cumplirse.
<p> por ejemplo,</p>
<pre>
grupo=1
grupo=3
</pre>
seleccionar� los estudiantes que pertenecen al grupo 1 o al grupo 3.


:general
Pueden utilizar el m�todo de selecci�n y entrar al mismo tiempo nombres de logins.
El correo electr�nico se env�a al conjunto de los nombres seleccionados.
Si al mismo tiempo seleccionaron al filtro, el filtro se aplica a la lista
de los nombres seleccionados. Si no entran ninguna clave de acceso,
la lista de los logins utilizada es la lista de los participantes a la clase.

