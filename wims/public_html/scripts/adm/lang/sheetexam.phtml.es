!! definici�n de los nombres para los v�nculos en el menubox (definidos por wims_menu_items)
 !distribute items insertar un archivo fuente,\
	 Obtener el c�digo fuente de la hoja \
into wims_name_putsource,wims_name_sheetsource

!distribute items A�adir un ejercicio,\
		A�adir todos los ejercicios de una hoja,\
into wims_name_addexo,wims_name_addsexo

!set name_desc_title=!nosubst limitado a  $title_limit caracteres
!set name_desc_desc=!nosubst limitado a $desc_limit caracteres; se admiten los tags y v�nculos HTML

!let name_shinfo=!nosubst $wims_name_title,$wims_name_Status,\
Texto de explicaci�n,\
Fecha de caducidad,P�gina de presentaci�n,Registro de las notas,para todas las clases compartiendo :,$wims_name_comment,Duraci�n de una sesi�n de examen,N�mero de pruebas por sesi�n


!let name_allowtype=abierto para todos, abierto para simulaci�n, cerrado para todos, abierto para siguientes puestos (y/o horas):,ajustado por una variable t�cnica
!if exam notin $module
 !let name_allowtype=$(name_allowtype[1,3,4,5])
!endif
!set name_desc_allowtechvar=Elecci�n de la variable t�cnica
!set name_desctableval=Tabla de filtr de acuerdo con el valor de la variable t�cnica
!set name_value=Valor
!set name_filtre=Filtro
!set name_EMPTY=(ning�n valor)

!set name_desc_comment=Visible solamente por el profesor.
!let name_selectsheet=Indicar solamente los ejercicios de la hoja


!if $job=student
  !set name_title=Hoja de trabajo n�mero $sheet<br/>$title (presentaci�n para los participantes)
  !set name_assignedwork=Tareas asignadas en esta hoja&nbsp;
  !set name_quality=0 de $[$re] puntos obtenidos, calidad
!endif

!set name_sheetempty=�La hoja est� vac�a! No se le ha asignado nada todav�a. Posiblemente se trata de un error de su profesor.


!set name_deps=Tiene que mejorar sus puntuaciones en los ejercicios
!set name_dep=Tiene que mejorar su puntuaci�n en el ejercicio
!set name_dep2= antes de recibir puntuaciones en este.

!distribute items Peso,Coeficiente,Nota\
into name_weight,name_coeff,name_Score

!set name_dependency=Dependencias de las puntuaciones&nbsp;
