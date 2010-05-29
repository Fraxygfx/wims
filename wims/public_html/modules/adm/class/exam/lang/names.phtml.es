!set lang_exists=yes
!set classname=<b><font color=green>$wims_classname</font></b>\
 from <b><font color=green>$wims_institutionname</font></b>

!if $activetest<=0
!! !let wims_name_sheetadmin=P�gina de preparaci�n
 !set name_title=!nosubst Preparaci�n del exament $sheet
!else
!! !let wims_name_sheetadmin=P�gina de gesti�n
 !set name_title=!nosubst Gesti�n del examen $sheet
!endif

!read adm/lang/date.phtml.$lang
!!---------------------
!!  old part of names.phtml
!!
!set classname=<b><font color=green>$wims_classname</font></b>
 de <b><font color=green>$wims_institutionname</font></b>

!set months=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre

!set wims_name_endexam=Terminar esta sesi�n de examen
!set wims_name_scoreexam=Mi puntuaci�n

!set wims_name_mainpage=P�gina principal del examen
!set name_dependency=Dependencias de las puntuaciones&nbsp;
!set name_Options=Opciones
!set name_All=Todas
!set name_title=Preparaci�n del examen
!set name_expire=Darlo por expirado ahora mismo
!set name_done=hecho

!distribute items poids,Coeficiente,Puntuaci�n\
into name_weight,name_coeff,name_Score

!distribute lines Terminar esta sesi�n de examen\
Volver a trabajar en el examen\
Punto de vista del profesor sobre el examen\
Presentaci�n a los participantes\
Detalle de la puntuaci�n actual\
�Este examen est� vac�o! No se le ha asignado nada. Posiblemente un error de manipulaci�n de su supervisor.Contenido del examen\
Contenido del examen\
Actualmente, este examen est� cerrado a su conexi�n.\
Solo puede realizar una vez este examen.\
por lo tanto no puede mejorar su puntuaci�n.\
Es su �ltimo intento disponible. �Preste atenci�n!\
la cuenta atr�s comenzar�, y se incrementar� en 1 el n�mero de intentos.\
la cuenta atr�s comenzar�.\
Requiere el �xito sobre otros ejercicios\
Puntuaci�n de esta sesi�n del examen\
into wims_name_endexam,wims_name_backexam,wims_name_teacherview,name_presentation,\
name_scoreexam,name_empty,name_content,name_examclosed,name_exam1,name_exam5,\
name_lasttry,name_exam7,name_exam8,name_depend,name_scoreexam2

!set name_exam2=!nosubst Puede registrar hasta $stries puntuaciones en este examen.
!set name_exam3=!nosubst Ya ha terminado su sesi�n de examen con $tried ensayos,
!set name_exam4=!nosubst Ya lo ha intentado $tried veces,
!set name_exam6=!nosubst Y todav�a puede hacer $tryremain nuevos intentos.

!set name_exam9=!nosubst Tiene $sdure minutos para trabajar en el examen.
     Cuando pulse en un ejercicio de los anteriores,

!set name_simulation=Este examen est� en modo simulaci�n. Funciona exactamente igual
que el examen verdadero pero no se puede guardar la puntuaci�n y el intento no se tendr� en cuenta.

!set wims_name_examremain=Tiempo restante de examen: $

!distribute lines pendiente\
 Todav�a no ha comenzado a trabajar en este examen.\
 Comenzar a trabajar.\
 La puntuaci�n actual no se tomar� en cuenta, porque el examen est� en modo simulaci�n.\
into name_pending,name_begin1,name_begin2,name_simulation2

!set name_timeleft=!nosubst �Se acab� el tiempo! Ya ha usado los $sdure minutos permitidos para este examen.
!set name_realscore=!nosubst Su puntuaci�n real para esta hoja de examen es $lastscore
!set name_bestscore =!nosubst Su mejor puntuaci�n para este examen es $lastscore (la mejor puntuaci�n es la que se tomar� en cuenta).


!! ---------------------------
!! nueva parte

!set statutname=!defof SU_Uprep,SU_Uprep,SU_Ac,SU_Ex,SU_Hi in wimshome/public_html/modules/home/names.$lang

!! -------------- title description for file examinfo.phtml
!let name_shinfo=!nosubst $wims_name_title,$wims_name_Status,\
Texto de explicaci�n, \
Fecha de expiraci�n, Registro de las notas, para todas las clases compartiendo el examen: , Comentario, Duraci�n de un examen, N�mero de pruebas por sesi�n

!! ------- value for description of option
!set name_desc_title=!nosubst limitado a  $title_limit caracteres
!set name_desc_desc=!nosubst limitado a $desc_limit caracteres; se admiten los tags y v�nculos HTML

!!set name_desc_dependancy=Un participante debe en primer lugar adquirir puntos en otros ejercicios de la hoja, antes de poder trabajar sobre �ste. Por ejemplo,  <font color=blue><tt>1:50,2: 30,3+4+5: 60</tt></font> significa que el participante debe tener un �xito del  50% sobre el ejercicio 1, 30% sobre el ejercicio 2, y una media de �xito del 60% sobre los ejercicios 3, 4, 5.

!set name_desc_comment=Visible solamente por el profesor.
!set name_desc_duration=en minutos
!let name_mkexam=Crear el examen
!let name_allowtype=abierto para todos, abierto para simulaci�n, cerrado para todos, abierto para siguientes puestos (y/o horas):
!let name_shinfo_cutt=Horas de corte

!! definici�n de los nombres para los v�nculos en el menubox (definidos por wims_menu_items)
!distribute items Vista de los participantes,\
		A�adir un ejercicio,\
		A�adir una serie de ejercicios,\
into wims_name_participantview,wims_name_addexo,wims_name_addsexo


!! distintos comentarios de la p�gina de gesti�n
!distribute lines Informaci�n general&nbsp;\
Contenido del examen&nbsp;\
Este examen no tiene a�n contenido.\
into name_info,name_content,name_warning

!! t�tulo del cuadro de contenido del examen (file examcontent.phtml)
!let name_extab=!nosubst No,$wims_name_title,Content,$name_weight,$name_dependency,$wims_name_comment,$name_Options,$wims_name_action

!set name_contenu=Elecci�n del contenido
!let name_cpsheet1=Van a a�adir una vez cada serie de ejercicios de la hoja siguiente tras los ejercicios ya presentes. Cada ejercicio tendr� como peso 1. Si no llenan el campo de texto abajo, conservar� el t�tulo que ten�a en la hoja de ejercicios.
!let name_cpsheet2=Hoja
!let name_cpsheet3=T�tulo de ejercicio gen�rico
!let name_cpsheet4=se numerar�n los ejercicios

!set name_warning_nonfinished=Todav�a no ha completado todos los ejercicios de este examen. Si los acaba\
  ahora congelar� la puntuaci�n y consumir� una oportunidad de hacer\
  el examen, y tendr� que empezar desde el principio la pr�xima vez.<p>\
  �Seguro que quiere terminarlos?

!let name_selectsheet=Indicar solamente los ejercicios de la hoja
