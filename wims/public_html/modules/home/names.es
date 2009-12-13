
N_manage	=Administraci�n de WIMS en l�nea
N_best		=los mejores
N_new		=lo nuevo
N_New		=Lo nuevo
N_mirror	=r�plicas
N_Mirror	=R�plicas
N_forum		=foros
N_Forum		=Foros
N_pref		=preferencias
N_Pref		=Preferencias
N_help		=ayuda
N_Help		=Ayuda
N_within	=en
N_clear		=Empezar de nuevo
N_go		=mostrar
N_at		=en
N_or		=o
N_import	=importar
N_Mboard	=Foro de discusi�n
N_hide		=ocultar

S_tip		=<b>Consejo</b>. Dejar la b�squeda vac�a en algunas categor�as\
devuelve la lista de los recursos m�s populares.

V_title		=Servidor Interactivo Multiprop�sito WIMS
V_cls		=Clases virtuales
V_stu		=�rea de los estudiantes
V_sup		=�rea de los profesores
V_ex		=clases de ejemplo
V_Quit		=Cerrar la clase
V_Wsup		=Escribir al supervisor
V_Chpref	=Cambiar las preferencias
V_Chpass	=Cambiar la contrase�a
V_sh		=hoja de trabajo
V_shs		=hoja de trabajo
V_exam		=examen

CR_1		=Crear mis propios
CR_OEF		=ejercicios interactivos sencillos
CR_mod		=m�dulos a toda potencia

E_doc		=documentaci�n t�cnica
E_src		=Bajar los fuentes
E_ref		=lista de enlaces inversos
E_stat		=estad�sticas del sitio
E_comp		=compilada el
E_manager	=Administrador del sitio:

RE_found	=!nosubst Encontrados $gotcnt $tt para su b�squeda
RE_nomatch	=!nosubst Su b�squeda no dio ning�n resultado
RE_pop		=!nosubst Aqu� est�n los $gotcnt $tt m�s populares
RE_pop2		=!nosubst $gotcnt $tt por orden de popularidad\
(n�mero $[$list_start+1] - $[$list_start+$gotcnt])
RE_try		=Pruebe

U_greet		=!nosubst �Hola, $wims_firstname $wims_lastname! Bienvenido/a\
a $wims_classname, moderada por $supmail.



U_newmsg	=Hay $$newmsgcnt nuevo(s) mensajes(s) en el foro de la clase.
U_nosheet	=Esta clase no tiene a�n hojas de trabajo. Por favor, vuelva a entrar\
m�s tarde, cuando su profesor haya preparado una.
U_assign	=El profesor ha preparado las siguientes hojas de trabajo.
U_expired	=expirado
U_done		=hecho
U_average	=calidad
U_Doc		=Documento
U_Sheet		=Hoja
U_Exam		=Examen
U_cdt           =Cuaderno de texto
U_Vote		=Encuesta
U_myscore	=Mis puntuaciones
U_examworking	=<b><font color=red>Atenci�n.</font></b> Usted estaba trabajando en un examen.
U_examdouble	=En este caso no puede conectarse desde otro puesto.
U_examcont	=Continuar el examen.
U_oclass	=Zonas de trabajo
U_back=		=Atr�s
U_account	=Mi cuenta
U_teacher	=profesor
U_Docstatus=ni leer ni escribir en,leer pero no escribir en,leer y escribir en
U_weight    = coeficiente

U_gotoclass1	=Entrar como participante:
U_gotoclass3	=Entrar como profesor:
U_gotoclass	=Sus zonas de trabajo:



U_inscription1	=Para inscribirse en una zona de trabajo, pulse una de las clases:
U_inscription2	=Inscribirse en una zona de trabajo como participante.
U_clickhere	=Pulse aqu�
U_supervise	=para entrar a una zona como profesor.
U_creatclass	=Crear una clase nueva.


SU_greet	=!nosubst �Hola, $wims_firstname $wims_lastname! Bienvenido/a a la p�gina\
de mantenimiento de su clase
SU_Bhome	=Volver a la p�gina principal del profesor
SU_log		=acceso del profesor
SU_exp1		=la cual expira el
SU_exp2		=	
SU_Uprep	=En preparaci�n
SU_Ac		=Activo
SU_Ex		=Expirado
SU_Hi		=Expirado+Oculto
SU_nosheet	=Su clase todav�a no tiene recursos.
SU_Crone	=Crear un recurso.
SU_shlist	=Lista de recursos.
SU_shno		=N�mero
SU_shti		=T�tulo
SU_shst		=Estado
SU_Howsh	=C�mo a�adir una tarea a una hoja de ejercicios
SU_classexo	=Ejercicios de la clase (es decir, sus creaciones)
SU_Gateway	=Administraci�n de la estructura
SU_Bprogram=Vuelta al programa

SE_list		=Participantes y puntuaciones
SE_part		=P�gina inicial para el participante
SE_mod		=Mensaje del d�a
SE_prop		=Config./Mantenim.
SE_secu		=Administraci�n de seguridad

ADD_1		=A�adir un
ADD_doc		=documento
ADD_sheet	=hoja de ejercicios
ADD_exam	=examen
ADD_exo		=ejercicio
ADD_vote	=encuesta
ADD_class	=clase
ADD_2		=	
ADD_3           =A�adir una
ADD_cdt         =cuaderno de texto



CL_Names	=Niveles,Clases,Programas,Cursos,Cursos interclase
CL_Name	=nivel, clase,programa,Curso,Curso interclase
CL_Test		=Zona de pruebas
CL_otherNames=Other $(CL_Names[2]),$(CL_Names[3]),$(CL_Names[4]) of the class

ER_expression	=<b>Atenci�n.</b> �Busca usted una expresi�n matem�tica? \
 Aqu� no tiene sentido.

!if $wims_supertype=4
 U_oclass	=Cambiar de zona
!else
 U_oclass	=Otras clases
!endif
