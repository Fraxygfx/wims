!! definici�n de los nombres para los v�nculos en el menubox (definidos por wims_menu_items)
!distribute items Vista de los participantes,\
		A�adir un ejercicio,\
		A�adir una serie de ejercicios,\
into wims_name_participantview,wims_name_addexo,wims_name_addsexo

 !distribute items insertar un archivo fuente,\
	 Obtener el c�digo fuente de la hoja \
into wims_name_putsource,wims_name_sheetsource

!set name_desc_title=!nosubst limitado a  $title_limit caracteres
!set name_desc_desc=!nosubst limitado a $desc_limit caracteres; se admiten los tags y v�nculos HTML

!let name_shinfo=!nosubst $wims_name_title,$wims_name_Status,\
Texto de explicaci�n, \
Fecha de expiraci�n, Page de pr�sentation, Registro de las notas, para todas las clases compartiendo : , Comentario, Duraci�n de un examen, N�mero de pruebas por sesi�n

!let name_shinfo=!nosubst $wims_name_title,$wims_name_Status,\
Texte d'explication,\
Date d'expiration,Page de pr�sentation,Enregistrement des notes,pour toutes les classes en partage :,$wims_name_comment,Dur�e d'une session d'examen,Nombre d'essais par session

!let name_allowtype=abierto para todos, abierto para simulaci�n, cerrado para todos, abierto para siguientes puestos (y/o horas):,r�glage par variable technique

!if exam notin $module
 !let name_allowtype=$(name_allowtype[1,3,4,5])
!endif
!set name_desc_allowtechvar=Choix de la variable technique
!set name_desctableval=Table de filtre en fonction de la valeur de la variable technique
!set name_value=Valeur
!set name_filtre=Filtre
!set name_EMPTY=Vide

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

!distribute items poids,Coeficiente,Score\
into name_weight,name_coeff,name_Score

!set name_dependency=Dependencias de las puntuaciones&nbsp;
