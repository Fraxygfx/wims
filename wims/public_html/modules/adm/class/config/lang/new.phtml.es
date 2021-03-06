
!if $backdays>7
 !if $backdays>100
  <p>Su clase no se salvaguard� desde m�s de 100 d�as.</p>
 !else
  <p>�ltima protecci�n de su clase: hace $backdays d�as.</p>
 !endif
 !if backup iswordof $warn
  <p><span class="wims_warning">$wims_name_warning</span>.
  <br />
  �Es la responsabilidad de los profesores de salvaguardar sus recursos pedag�gicos!
No cuentan nunca con la protecci�n del servidor para recuperar su trabajo perdido.
Adem�s, las clases virtuales que no son   salvaguardadas regularmente se considerar�n
por el programa inform�tico como siendo inactivas y sin importancia,
y pueden borrarse a cada momento para dejar lugar a los otros.

 !else
  <p> �Protegen se contra los incidentes del servidor!
 !endif
 !href cmd=reply&job=arch Salvaguarde la clase regularmente.
 </p>
!endif

!if creation iswordof $warn
 <p><span class="wims_warning">$wims_name_warning</span>. �Su clase virtual es demasiado vieja! Ya tiene $creatdays d�as.
 </p><p>
 Se recomienda vivamente reconstruir una nueva estructura de clase virtual
a principios de cada nuevo a�o escolar. Seguir utilizando una vieja clase virtual
durante a�os conducir� inexorablemente a un desbordamiento de los ficheros
de registro y la cuota de espacio disco, lo que corre el riesgo de bloquear
el acceso a su clase en un momento crucial.
 </p>
 !if $class_type notin 13
  <p>
  Ah� tienes c�mo reconstruir su clase virtual sin rehacer sus recursos pedag�gicos.
  </p>
  <ol>
  <li>
  !href cmd=reply&job=arch Salvaguardar su clase al fin del a�o escolar.
  </li><li>
  <a href="$wims_ref_name?lang=$lang&module=adm/class/regclass">Crear</a>
una nueva clase virtual (o grupo de clase o p�rtico de
establecimiento) a principios del a�o escolar siguiente.
</li><li> restaurar los recursos pedag�gicos (ejercicios, hojas, ex�menes,
documentos) que salvaguardaron en la nueva clase.
(Sin restaurar las cuentas de alumnos y las actividades que son caducas.
)
  </li></ol>
 !else
  <p>
  Por favor informa al administrador del grupo de clases a cual
su clase pertenece.
  </p><p>
  Pueden
  !href cmd=reply&job=arch salvaguardar
  los recursos pedag�gicos de su clase actual luego restaurarlos
en la nueva.
  </p>
 !endif
!endif
!exit
!if $warn=$empty
 !set job=list
 !changeto list.phtml
!else
  <div class="wimscenter">
  !href cmd=reply&job=list Seguir con el mantenimiento de la clase.
 </div>
!endif


