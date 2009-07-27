!if $wims_name_home!=$empty
 !exit
!endif

!distribute items Buscar,\
		Al trabajo,Volver al trabajo,\
		P�gina inicial de WIMS,Introducci�n/Configuraci�n,Ayuda,Acerca de,\
		Introducci�n,\
		Cerrar esta ventana,Atr�s,\
		Administrador del sitio,Autor de la p�gina,Autores de la p�gina,\
		Traducido por,Salir,\
		Ayuda de WIMS,Referencias,\
		Foro de discusi�n,Foro,\
		Hoja de trabajo,Herramientas,\
		Copiar a Modtool,\
		Print,\
		Importar a su clase,\
		Versi�n imprimible,\
		Otro nuevo,\
		mostrar,\
		Refresh,\
		Save,\
		yes,\
		no,\
	into wims_name_search,\
	wims_name_work,wims_name_resume,\
	wims_name_home,wims_name_intro,wims_name_help,wims_name_about,\
	wims_name_titleintro,\
	wims_name_back,wims_name_back2,\
	wims_name_manager,wims_name_author,wims_name_authors,\
	wims_name_translatedby,wims_name_exit,\
	wims_name_whelp,wims_name_ref,wims_name_forum,wims_name_forums,\
	wims_name_sheet,wims_name_tools,\
	wims_name_modify,wims_name_print,wims_name_import,\
	wims_name_printable,wims_name_renew,wims_name_testgo,\
	wims_name_printable,wims_name_renew,wims_name_testgo,\
	wims_name_refresh,wims_name_tosave,\
	wims_name_yes,wims_name_no

!if $wims_class!=$empty
 !distribute items P�gina principal de la clase,\
        Inserte en una hoja de trabajo,\
		Escriba al profesor,Cierre la clase,\
		El registro de puntuaci�n est� cerrado.,\
		Ha suspendido el registro de puntuaci�n.,\
		Open score registration,Close score registration,\
		Usted es el profesor de la clase,\
		Registrar los detalles de este ejercicio,\
		P�gina de gesti�n de las hojas de trabajo\
	into wims_name_class_home,wims_name_add,\
	wims_name_wsup,wims_name_visitor,\
	wims_name_scoreclose,\
	wims_name_scoresuspend,\
	wims_name_scorereopen,wims_name_scoreclose2,\
	wims_name_syou,\
	wims_name_exolog,\
	wims_name_sheetmanagement
 !set wims_name_score=!nosubst Ha conseguido $[$wims_homeref_got] de \
	$[$wims_homeref_req] puntos en este trabajo. <br>Puntuaci�n media \
	$[$wims_homeref_mean]/10.
 !set wims_name_you=usted es <b>$wims_firstname $wims_lastname</b>, accediendo a
 !if _exam isin $session
  !distribute items Otros ejercicios del examen,\
	Tiempo restante de examen:,\
	cuando se cargue esta p�gina\
	into wims_name_back,wims_name_examremain,wims_name_whenloaded
 !endif
 !if _check isin $session
  !let wims_page_name=Page
 !endif
 !set wims_name_sequence=!defof sequence_Title in wimshome/log/classes/$wims_class/seq/.def
 !default wims_name_sequence=Sequence
!endif

!if adm/class isin $module
 !distribute line �rea de los profesores\
	�rea de los estudiantes\
	Clases de ejemplo\
	Autentificaci�n del profesor\
	Autentificaci�n de los participantes\
	Ense�anza primaria\
	Ense�anza secundaria\
	Universidad\
	List of classes\
    List of classes and portals\
    Individual class\
    Superclasse\
    Portal\
	into wims_name_n_supervisor,wims_name_n_participant,wims_name_n_example,\
	wims_name_n_authsupervisor,wims_name_n_authparticipant,wims_name_n_E,wims_name_n_H,wims_name_n_U,\
	wims_name_classlist,wims_name_portal_list,\
	wims_name_create_class,wims_name_create_superclass,wims_name_create_portal
!endif

!if adm/new isin $module
  !distribute line nuevos m�dulos\
  actualizaciones de m�dulos\
  �ltimos cambios del sistema\
  RSS nuevos m�dulos\
  RSS actualizaciones de m�dulos\
  into wims_name_mod_new,wims_name_mod_modif,wims_name_mod_sys,wims_name_rss_new,wims_name_rss_modif
!endif

!if $wims_user=$empty
  !distribute line Create a class\
  into wims_name_classcreate
!endif

!if adm/modtool isin $module or adm/createxo isin $module or $wims_user!=$empty
  !distribute line Test the module\
   Document manager\
   Module content\
   Other files\
   Properties\
   Save\
   Check diff\
   Publish it\
   New Module\
   List of modules\
   Binary files\
   Backup the module\
   Account properties\
   Script Tester\
   OEF Documentation \
   Script Library\
   Answer types\
   Doc technic\
   Back to file list\
   Edit file\
   Modify\
   Up\
   Erase\
 into wims_name_test,wims_name_docgestion,wims_name_modcontent,wims_name_otherfiles,\
wims_name_properties,wims_name_modsave,wims_name_checkdiff,wims_name_publish,wims_name_createnew,\
wims_name_modlist,wims_name_binfile,wims_name_restore,\
wims_name_account_property,\
wims_name_scripttest,wims_name_docoef,wims_name_docslib,wims_name_docanswer,wims_name_doctec,\
wims_name_back3,wims_name_edfile,wims_name_change,wims_name_up,wims_name_erase

!distribute line Back to the exercise creation\
   Model list\
   Prepared models\
into wims_name_backcreatexo,wims_name_modellist,wims_name_model

!distribute line Test\
Modify the source\
Save in the development module\
Save into your class\
Save as a new exercise\
Send an image file\
Replace the old one\
eliminar este ejercicio\
into wims_name_testexo,wims_name_exomodify,\
wims_name_putmodtool,wims_name_putclass,wims_name_newversion,\
wims_name_downloadbinary,wims_name_replace,wims_name_exoerase

!endif

!distribute line New document\
New  sheet\
New exam\
New class\
Crear una nueva encuesta / votaci�n\
New exercise\
Class exercises\
into wims_name_add_doc,wims_name_add_sheet,wims_name_add_exam,wims_name_add_class,wims_name_add_vote,\
wims_name_add_exo,wims_name_classexo

!!! for documents

!distribute items WIMS,Clase,Docs,Arriba,Prev.,Sig.,Hist.,Recargar,\
    Versi�n interactiva,Versi�n para imprimir,\
    Volver a doc.,Ayuda,Acerca de,\
    Dep�sito de archivos,\
    Back to the file list,\
	P�gina de entrada del documento\
    into wims_name_doch_wims,wims_name_doch_class,wims_name_doch_docs,wims_name_doch_up,\
    wims_name_doch_prev,wims_name_doch_next,wims_name_doch_hist,wims_name_doch_reload,\
    wims_name_doch_interactive,wims_name_doch_printable,\
    wims_name_doch_back,wims_name_doch_help,wims_name_doch_about,\
	wims_name_doch_upload,wims_name_doch_filelist,wims_name_doch_main

!! for sequence et document

!distribute line Document\
hiden,visible\
Title\
Organize\
Insert in the class\
Create a new document\
Write on a try document\
Status\
into wims_name_doc,wims_name_status,wims_name_title,wims_name_reorder,wims_name_adddoc,\
wims_name_createdoc,wims_name_doctry,wims_name_Status

 !distribute line Add a date\
   Add file\
   Add work\
   Configure\
  into wims_name_adddate,wims_name_addfile,wims_name_addtodo,wims_name_config


!set wims_name_supervisor=administrador
!set wims_name_teacher=Cuentas de profesores
!set wims_name_addteacher=Nuevo profesor
!set wims_name_modteacher=Propiedades del profesor
!set wims_name_delteacher=Borrar un profesor
!set wims_name_student=Cuentas de alumnos
!set wims_name_addstudent=Nuevo alumno
!set wims_name_modstudent=Propiedades del alumno
!set wims_name_delstudent=Borrar un alumno
!set wims_name_backstruct=Hacer una copia de seguridad de la estructura

!if config isin $module
 !distribute line P�gina principal de configuraci�n\
 Gesti�n de la estructura\
 Copias de seguridad y recuperaci�n\
into wims_name_config, wims_name_struct,wims_name_save

!endif
!set wims_name_backgateway=Gestion of

!distribute line Add a course\
Add a interclass course\
Add a class\
Add a program\
Add a level\
login de gestion\
Zone change\
into wims_name_addcourse,wims_name_addicourse,wims_name_addclass,wims_name_addprog,wims_name_addlevel,\
wims_name_login,wims_name_chzone

!distribute line Statistiques d'activit�\
Activit�s globales des participants\
Changer les niveaux de s�v�rit�\
Notes manuellement attribu�es\
spreadsheet data\
into wims_name_class_stat,wims_name_activity,wims_name_formula,wims_name_grades,\
wims_name_csv

!if adm/class/userlist isin $module
!distribute line Lista de los participantes\
Puntuaciones del participante\
Cerrar esta sesi�n de examen\
Detalles de su trabajo\
Dar de baja al participante\
Datos en bruto\
cambiar su contrase�a\
Datos tratados\
Livret de comp�tences\
into wims_name_part_list,wims_name_scores,wims_name_partexamclose,wims_name_workdetail,\
wims_name_delprep,wims_name_rawdata,wims_name_passwd,wims_name_getraw,wims_name_livret
!endif

!if adm/manage isin $module
  !distribute line Other maintenance tasks\
  into wims_name_sitegestion
!endif

!if adm/class/livret isin $module
 !if $wims_user=supervisor
  !let tmp=Gestion des participants et notes
 !else 
  !let tmp=Mes notes
 !endif
 !distribute line Nouvelle comp�tence\
Configurer\
$tmp\
Livret de la classe\
  into wims_name_add_competence,wims_name_config,wims_name_go_userlist,wims_name_cls_livret
!endif

!distribute lines Modtool\
   Createxo\
   Quicktool\
   Latex2wims\
   into wims_name_modtool,wims_name_createxo,wims_name_quicktool,wims_name_latex2wims
   
