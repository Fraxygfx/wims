
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
		Copiar a Modtool\
	into wims_name_search,\
	wims_name_work,wims_name_resume,\
	wims_name_home,wims_name_intro,wims_name_help,wims_name_about,\
	wims_name_titleintro,\
	wims_name_back,wims_name_back2,\
	wims_name_manager,wims_name_author,wims_name_authors,\
	wims_name_translatedby,wims_name_exit,\
	wims_name_whelp,wims_name_ref,wims_name_forum,wims_name_forums,\
	wims_name_sheet,wims_name_tools,\
	wims_name_modify

!if $wims_class!=$empty
 !distribute items P�gina principal de la clase,\
                Inserte en$ una hoja de trabajo,\
		Escriba al profesor,Cierre la clase,\
		El registro de puntuaci�n est� cerrado.,\
		Ha suspendido el registro de puntuaci�n.,\
		Usted es el profesor de la clase,\
		Registrar los detalles de este ejercicio\
	into wims_name_home,wims_name_add,\
	wims_name_wsup,wims_name_visitor,\
	wims_name_scoreclose,\
	wims_name_scoresuspend,\
	wims_name_syou,\
	wims_name_exolog
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
!endif


