!set lang_exists=yes
!set name_title=Actividades individuales globales
!set name_noparticipant=Esta clase no tiene participante todav�a.
!set name_lastconnexion=�ltima conexi�n
!set name_total=tiempo total
!set name_click=Pulse un nombre para ver el detalle de su trabajo.
!set name_nbsessions=Numero de sesiones
!set name_exo=ejercicios
!set name_time=Tiempo
!set name_cnt_exo=Numero de ejercicios

!set name_showsheet=Seleccione las hojas de cuales desea ver la actividad.

!set name_ylabel=# ex.

!set name_expert0=Si desean seleccionar a algunos participantes, se proponen varios m�todos. \
Marcan el m�todo deseado.

!distribute items  Menu expert,Par liste de logins,Par s�lection,\
  Par participant,days,Montrer les graphiques, Tous les participants\
into name_menu,name_loginlist,name_select,name_shiftpart,name_days,\
 name_graphics, name_allpart

!distribute lines Vous pourrez ensuite faire d�filer les participants (m�thode par d�faut dans le cas o� les graphiques sont demand�s).\
Le nombre de participants s�lectionn�s est limit� � $limitpart, seuls les $limitpart premiers seront affich�s\
Dans le cas o� les graphiques sont affich�s, le nombre de participants affich�s est limit� � $limitpart\
Uniquement dans le cas o� les graphiques ne sont pas demand�s.\
dans le cas o� les graphiques sont demand�s\
into name_help1,name_help2,name_help3,name_help0,name_help00
