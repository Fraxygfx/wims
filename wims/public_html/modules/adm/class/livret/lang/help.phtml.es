
!let help_isread=yes
!if $wims_read_parm!=$empty
    !goto $wims_read_parm
!endif
<p>
El cuaderno de competencias permite obtener una rejilla de lectura sint�tica del conjunto
del trabajo tenido en cuenta de los alumnos de la clase.
< br> El cuaderno consta como m�ximo de competencias (� $maxcomp.) cada una de sus competencias
puede poseer varios grados (hasta� $maxpalier.).
</p><p>
Para cada grado, el profesor puede definir la lista de las series de ejercicios de la clase
para los cuales el resultado va a producir en el c�lculo del nivel de adquisici�n del grado.
</p><p>
El profesor de la clase puede decidir que se neutralizan algunas hojas virtuales para
el c�lculo del nivel de adquisici�n de los grados del cuaderno de competencias
(eso permite conservar los datos pedag�gicos de un a�o sobre el otro permitiendo
al mismo tiempo comenzar a validar algunas competencias).
</p><p>
El c�lculo del nivel de adquisici�n se efect�a de la siguiente forma:
</p>
<p class="wimscenter">
!insmath 10 \times \frac{\sum_{i=1}^{N} NM(x_{L[i;1],L[i;2]})}{\sum_{i=1}^{N} \delta_{L[i;1]}}
</p>
o�
<ul>
 <li> <i>N</i> es el n�mero de series de ejercicios que se producen en el grado.</li>
 <li> <i>L</i> es la lista de las series de ejercicios que se producen en el grado. Cada elemento de la lista contiene el n�mero de hoja (escrito L[i;1]) y
 el n�mero de la serie de ejercicios en la hoja (escrito)L[i;2]).</li>
 <li>
  !insmath X_{i,j}
  es la nota de calidad de la serie de ejercicios <i>j</i> de la hoja <i>i</i>.</li>
 <li>
  !insmath \delta_i
  vale 1 si la hoja <i> i</i> no est� en la lista de las hojas desactivadas para el c�lculo del nivel de adquisici�n de los grados y <i>0</i> si no. </li>
 <li> NM(a) vale <i> 1</i> si y es superior a la nota m�nima para considerar que se adquiere una serie y <i> 0</i> si no (fijar la nota m�nima a <i>0</i> neutraliza esta opci�n.</li>
</ul>

!exit

:color
Pour chaque couleur vous pouvez d�finir un texte qui sera affich�e dans la l�gende color�e en d�but de chaque tableau de comp�tences (pour les �l�ves et le supervisor).
<br\>
Les couleurs se retrouvant sans texte sont affich�es avec la plage de pourcentage de r�ussite auxquelles elles correspondent.
<br\>
En cas de l'utilisation des couleurs de la classe (et non celles du livret), la l�gende color�e est automatiquement affect�e de la plage de pourcentage de r�ussite correspondante. 

!exit
