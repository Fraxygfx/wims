!goto $wims_read_parm

:dellevel

<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�Y <span class="wims_warning">TODO</span>
lo que hay en este nivel ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
clases, programas, cursos, cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar este nivel?


!exit

:delclass

<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�Y <span class="wims_warning">TODO</span>
lo que hay en esta clase ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>: 
cursos, cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar esta clase?

!exit

:delprog
<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�Y <span class="wims_warning">TODO</span>
lo que hay en este programa ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cursos, actividades, notas!
<p>
�Est� seguro de que quiere borrar este programa? 

!exit

:delcourse
<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�Y <span class="wims_warning">TODO</span>
lo que hay en este curso ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>:
cuentas de alumnos, actividades, notas!
<p>
�Est� seguro de querer borrar este curso?

!exit

:delteacher
<<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
<p>
�Est� usted seguro de que queire borrar la cuenta de profesor <tt>$del</tt>
($user_firstname $user_lastname)?

!exit

:deltest
<span class="wims_warning">AVISO</span>. �Esta operaci�n es irreversible!
�Y <span class="wims_warning">TODO</span>
lo que hay en esta zona de pruebas ser� borrado <span class="wims_warning">DEFINITIVAMENTE</span>!
<p>
�Est� seguro de que quiere borrar la zona de pruebas?

!exit

:progshare
Partage de ressources d'un autre programme

Votre programme va partager l'ensemble de ressources p�dagogiques
(exercices, feuilles, examens, documents, questionnaires) avec le programme
<em>$other_description</em> du niveau <em>$other_level</em>. Cela signifie
que tout changement sur les ressources d'un des deux programmes se r�percute
automatiquement dans l'autre programme.

<p><span class="wims_warning">$wims_name_warning</span>. Cette op�ration exp�rimentale va effacer les ressources
existantes dans votre programme et est <span class="wims_warning">IRREVERSIBLE</span>&nbsp;!
Vous ne pourrez pas arr�ter le partage et les programmes partageant les
ressources ne doivent pas �tre effac�s&nbsp;!

<p>
�tes-vous s�r de vouloir continuer&nbsp;?

!exit