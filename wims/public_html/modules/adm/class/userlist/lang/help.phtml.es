
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
</p>
$table_header
$table_hdtr<th>Nivel</th><th>F�rmula</th><th>Explicaci�n</th></tr>
$table_tr<td align="center">0</td><td align="center">$scoremax max(x,y)
 </td><td>Muy laxa: el m�ximo entre el porcentaje y la calidad.</td></tr>
$table_tr<td align="center">1</td><td align="center">$scoremax x
 </td><td>la calidad no se tiene en cuenta. Se logra la nota m�xima
 cuando se obtienen todos los puntos requeridos.</td></tr>
$table_tr<td align="center">2</td><td align="center">$scoremax x y<sup>0.3</sup>
 </td><td>La calidad tiene un efecto reducido sobre la nota.</td></tr>
$table_tr<td align="center">3</td><td align="center">$scoremax x y<sup>0.5</sup>
 </td><td>El efecto de la calidad es mayor.</td></tr>
$table_tr<td align="center">4</td><td align="center">$scoremax x y
 </td><td>Para tener una nota de $scoremax, debe lograr todos los puntos
  requeridos (el 100%) sin cometer errores (calidad=10).</td></tr>
$table_tr<td align="center">5</td><td align="center">$scoremax x<sup>2</sup> y
 </td><td>El porcentaje de trabajo no terminado est� sobrepenado.</td></tr>
$table_tr<td align="center">6</td><td align="center">$scoremax x<sup>2</sup> y<sup>2</sup>
 </td><td>Cualquier error est� sobrepenado.</td></tr>
$table_end

Remarque : En niveau 0 et 1, si la note de qualit� est 
inf�rieure � 1 pour un exercice, le pourcentage de r�ussite (points obtenus) 
est mis � 0% pour cet exercice lors du calcul de x ; si la note de qualit� est comprise entre 1 et 2, 
le pourcentage de r�ussite pour cet exercice est divis� par 2 lors du calcul de x. 