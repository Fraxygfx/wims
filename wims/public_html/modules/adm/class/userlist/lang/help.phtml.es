
!if $special_parm!=$empty
 !changeto lang/help.$moduclass_lang/$special_parm.phtml
!endif

!read adm/title.phtml 1\
\
Niveles de severidad de las hojas de trabajo
<p>
El servidor calcula dos medias para el trabajo de cada participante en
cada una de las hojas: un porcentaje de los puntos obtenidos con respecto al n�mero
de puntos requeridos y la calidad de los puntos obtenidos en los ejercicios
de la hoja. Sean `x' este porcentaje e `y' la calidad, ambos tendiendo por 
proporcionalidad a valores entre 0 y 1. Las siguientes son las f�rmulas para
el c�lculo de las notas:
<p>$table_header
$table_hdtr<th>Nivel<th>F�rmula<th>Explicaci�n
$table_tr<td align="center">0<td align="center">$scoremax max(x,y)
 <td>Muy laxa: el m�ximo entre el porcentaje y la calidad.
$table_tr<td align="center">1<td align="center">$scoremax x
 <td>la calidad no se tiene en cuenta. Se logra la nota m�xima
 cuando se obtienen todos los puntos requeridos.
$table_tr<td align="center">2<td align="center">$scoremax x y<sup>0.3</sup>
 <td>La calidad tiene un efecto reducido sobre la nota.
$table_tr<td align="center">3<td align="center">$scoremax x y<sup>0.5</sup>
 <td>El efecto de la calidad es mayor.
$table_tr<td align="center">4<td align="center">$scoremax x y
 <td>Para tener una nota de $scoremax, debe lograr todos los puntos
  requeridos (el 100%) sin cometer errores (calidad=10).
$table_tr<td align="center">5<td align="center">$scoremax x<sup>2</sup> y
 <td>El porcentaje de trabajo no terminado est� sobrepenado.
$table_tr<td align="center">6<td align="center">$scoremax x<sup>2</sup> y<sup>2</sup>
 <td>Cualquier error est� sobrepenado.
$table_end <p>

