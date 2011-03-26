!set lang_exists=yes

!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>

!set months=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus
!set seriesaction=!nosubst $wims_name_change,$wims_name_erase,$wims_name_up

!! definici�n de los nombres para los enlaces en el menubox (definidos por wims_menu_items)
!distribute items insertar un archivo fuente,\
		Punto de vista de los participantes ,\
		Obtener el c�digo fuente de la hoja \
into wims_name_putsource,wims_name_participantview,wims_name_sheetsource

!let name_shtab=!nosubst No,$wims_name_title,$wims_name_Description,Puntos,Peso,D�pendancias,$wims_name_comment,Acciones

!if $activetest<=0
 !let wims_name_sheetadmin=p�gina de preparaci�n
 !set name_title=!nosubst Preparaci�n de la hoja de trabajo $sheet
!else
 !let wims_name_sheetadmin=P�gina de gesti�n
 !set name_title=!nosubst Gesti�n de la hoja $sheet
!endif

!let name_shinfo=!nosubst $wims_name_title <small>(limitado a $title_limit caracteres)</small>,Estado,\
Y un texto explicativo <br></small>(limitado a $desc_limit caracteres; se permiten etiquetas y enlaces html)</small>,\
Fecha de expiraci�n,P�gina de presentaci�n,El registro de puntuaciones,para todas las clases que comparten la hoja,$wims_name_comment
!let name_allowtype=abierto a todos, cerrado a todos,abierto para las siguientes estaciones de trabajo (y/o horas)siguientes :
!let name_mksheet=Pulse para crearla

!distribute lines Informaciones generales \
Contenido de la hoja de trabajo\
Esta hoja de trabajo no tiene a�n contenido.\
El t�tulo original es\
Modificaci�n del ejercicio\
N�mero de puntos pedidos\
de peso\
Corregir el c�digo fuente\
La fecha de expiraci�n de la hoja debe ser previa a la fecha de expiraci�n de la clase\
Se ignora pues su petici�n.\
into name_info,name_content,name_warning,name_oldtitle,name_titlemodif,\
name_pointsasked,name_ofweight,name_correctsource,name_expiration1,name_expiration2

!set name_text1=Para a�adir un trabajo (ejercicio, herramienta, etc.) a la hoja, deben en primer lugar elegirlo\
(v�ase abajo); regule los distintos par�metros propuestos y lanza el ejercicio.\
A continuaci�n, utilizan el v�nculo sobre el borde del ejercicio para a�adirlo a la hoja.\
Para elegir su trabajo, tienen una de las posibilidades siguientes

!set name_text2= Pasar por el motor de investigaci�n
!set name_text3=Buscar un ejercicio entre
!set name_text4=Buscar un ejercicio de su cuenta


!if $job=student
  !set name_title=Hoja de trabajo n�mero $sheet<br>$title (presentaci�n para los participantes)
  !set name_sheetempty=�La hoja est� vac�a! No se le ha asignado nada todav�a. Posiblemente se trata de un error de su profesor.
  !set name_assignedwork=Tareas asignadas en esta hoja&nbsp;
  !set name_quality=0 de $[$re] puntos obtenidos, calidad
!endif

!set name_regmodif=Modificaci�n registrada
!! be careful define variable below only if module help/teacher/program work in your lang. Keep , at the same place.
!!set name_helpprog=Ayudarse de esta correspondencia orientativa, entre los programas de la ense�anza francesa y los ejercicios Wims
!set name_helpprog=$empty
