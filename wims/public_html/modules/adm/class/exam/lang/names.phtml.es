!set lang_exists=yes

!set name_duplicateok=Examen dupliqu� correctement.
!set wims_name_mainpage=P�gina principal del examen
!set name_title=Preparaci�n del examen

!if $activetest<=0
 !let wims_name_sheetadmin=P�gina de preparaci�n
 !set name_title=!nosubst Preparaci�n del exament
!else
 !let wims_name_sheetadmin=P�gina de gesti�n
 !set name_title=!nosubst Gesti�n del examen
!endif

!read adm/lang/date.phtml.$lang
!read adm/lang/sheetexam.phtml.$lang

!! ---------------------------------------------------------------------------------------------------
!! ancien fichier name du module exam.fr

!set wims_name_scoreexam=!nosubst $wims_name_myscore

!set name_Options=Opciones
!set name_All=Todas

!set name_expire=Darlo por expirado ahora mismo
!set name_done=hecho

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
!set name_exam4=!nosubst Ya lo ha intentado <strong>$tried veces</strong>,
!set name_exam6=!nosubst Y todav�a puede hacer <strong>$tryremain</strong> nuevos intentos.

!set name_exam9=!nosubst Tiene <strong>$sdure minutos</strong> para trabajar en el examen.
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

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus

!set name_desc_duration=en minutos
!set name_units_duration=minutos
!let name_mkexam=Crear el examen

!let name_shinfo_cutt=Horas de corte

!! distintos comentarios de la p�gina de gesti�n
!distribute lines Informaci�n general&nbsp;\
Contenido del examen&nbsp;\
Este examen no tiene a�n contenido.\
into name_info,name_content,name_warning

!! t�tulo del cuadro de contenido del examen (file examcontent.phtml)
!let name_extab=!nosubst $wims_name_number,$wims_name_title,Content,$name_weight,$name_dependency,$wims_name_comment,$name_Options,$wims_name_action

!set name_contenu=Elecci�n del contenido
!let name_cpsheet1=Van a a�adir una vez cada serie de ejercicios de la hoja siguiente tras los ejercicios ya presentes. Cada ejercicio tendr� como peso 1. Si no llenan el campo de texto abajo, conservar� el t�tulo que ten�a en la hoja de ejercicios.
!let name_cpsheet3=T�tulo de ejercicio gen�rico
!let name_cpsheet4=se numerar�n los ejercicios

!set name_warning_nonfinished=Todav�a no ha completado todos los ejercicios de este examen. Si los acaba\
  ahora congelar� la puntuaci�n y consumir� una oportunidad de hacer\
  el examen, y tendr� que empezar desde el principio la pr�xima vez.<br />\
  �Seguro que quiere terminarlos?

!set wims_name_cpexam=Copy an active exam.

!set name_cpexam1=You are about to copy the content of an other active exam into this one. You will be able to modify the contents of this exam until you will activate it
