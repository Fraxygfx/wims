!set lang_exists=yes

!! definici�n de los nombres para los v�nculos en el menubox (d�finis par wims_menu_items)
!distribute items Insertar un fichero fuente,\
		Volver a la vista normal de la hoja,\
		mostrar el fichero fuente, \
into wims_name_putsource,wims_name_participantview,wims_name_sheetsource

!set name_student1=!nosubst Puede trabajar en esta hoja hasta el $expday $expmon $expyear.
!set name_student2=Esta hoja ha expirado. Puede seguir \
 trabajando en ella, pero sus puntuaciones ya no ser�n tenidas en cuenta.\
!set name_student3= Por el momento no est� autorizado a consultar el contenido de esta hoja.
  Por favor contacte con su profesor.
!set name_student4=��La hoja est� en blanco! No se le ha asignado nada en ella;\
   probablemente se trate de un error de su profesor.
!set name_score=!nosubst $[$got] de $[$require] puntos obtenidos, calidad
!set name_score2=!nosubst $[$require] puntos exigidos.
!set name_deps=Tiene que mejorar sus puntuaciones en los ejercicios
!set name_dep=Tiene que mejorar su puntuaci�n en el ejercicio
!set name_dep2= antes de recibir puntuaciones en este.
!set name_scoresuspend=El registro de las puntuaciones suspendido por usted mismo.
!set name_scoreopen=El registro de las puntuaciones est� abierto
!set name_scoreclose=El registro de las puntuaciones cerrado para su conexi�n.


!set name_textsource= Este es el fichero fuente de la hoja. Puede importarlo a su clase \
  simplemente mediante el sistema de cortar y pegar.
!set name_answer=Respuestas del ejercicio

!set name_title=!nosubst Hoja de trabajo n�mero $sh
!set name_empty=�Esta hoja est� en blanco! Se trata probablemente de un error.

!set name_exo=!defof name_exo in wimshome/public_html/scripts/oef/$modu_lang/names
!set name_noprint=!defof name_noprint in oef/$modu_lang/names
!set name_answers=!defof name_answers in oef/$modu_lang/names

!distribute items nivel aproximado, duraci�n \
into name_level,name_duration
