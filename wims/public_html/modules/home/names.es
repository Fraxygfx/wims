N_manage = Administraci�n de WIMS en l�nea

wims_name_mod_new = Lo nuevo
wims_name_mirror = r�plicas
wims_name_Mirror = R�plicas
wims_name_pref = Preferencias

N_within = en
N_clear = Empezar de nuevo
N_go = mostrar
N_at = en
N_hide = ocultar
name_allexampleclass=All open classes

V_title = Servidor Interactivo Multiprop�sito WIMS
V_cls = Clases virtuales
wims_name_n_participant = �rea de los estudiantes
wims_name_n_supervisor = �rea de los profesores
wims_name_mail = Escribir al supervisor
wims_name_pref = Cambiar las preferencias
wims_name_ref = lista de enlaces inversos
wims_name_stat = estad�sticas del sitio

CR_1 = Crear mis propios
CR_OEF = ejercicios interactivos
CR_mod = m�dulos a toda potencia

E_comp = compilada el
E_manager = Administrador del sitio:
E_faq = FAQ
E_dochelp = Documents d'aide

RE_prev = !nosubst Previous Results
RE_next = !nosubst Next Results
RE_found = !nosubst Encontrados $Gotcnt $tt para su b�squeda
RE_nomatch = !nosubst Su b�squeda no dio ning�n resultado
RE_pop = !nosubst Aqu� est�n los $gotcnt $tt m�s populares
RE_pop2 = !nosubst $gotcnt $tt por orden de popularidad\
(n�mero $[$list_start+1] - $[$list_start+$gotcnt])
RE_try = Pruebe

U_greet = !nosubst �Hola, $wims_firstname $wims_lastname! Bienvenido/a\
a $wims_classname, moderada por $supmail.

U_newmsg = Hay $$newmsgcnt nuevo(s) mensajes(s) en el foro de la clase.
U_nosheet = Esta clase no tiene a�n hojas de trabajo. Por favor, vuelva a entrar\
m�s tarde, cuando su profesor haya preparado una.
U_assign = El profesor ha preparado las siguientes hojas de trabajo.
U_expired = expirado
U_done = hecho
U_average = calidad
U_examworking = Usted estaba trabajando en un examen.
U_examdouble = En este caso no puede conectarse desde otro puesto.
U_examcont = Continuar el examen.
wims_name_U_oclass = Zonas de trabajo

wims_name_U_account = Mi cuenta

wims_name_coeff = coeficiente

U_gotoclass1 = Entrar como participante:
U_gotoclass3 = Entrar como profesor:
U_gotoclass = Sus zonas de trabajo:



U_inscription1 = Para inscribirse en una zona de trabajo, pulse una de las clases:
U_inscription2 = Inscribirse en una zona de trabajo como participante.
U_clickhere = Pulse aqu�
U_supervise = Inscribirse en una zona de trabajo como profesor.
U_creatclass = Crear una clase nueva.
name_gotosupervise=Pour aller dans une autre classe comme enseignant, contactez l'administrateur\
 du groupement de classes.
U_supconnected=L'enseignant est connect�.

SU_greet = !nosubst �Hola, $wims_firstname $wims_lastname! Bienvenido/a a la p�gina\
de mantenimiento de su clase
SU_Bhome = Volver a la p�gina principal del profesor
SU_log = acceso del profesor
SU_exp1 = la cual expira el
SU_exp2 =
SU_nosheet = Su clase todav�a no tiene recursos.
SU_shlist = Lista de recursos.
wims_name_SU_Gateway = Administraci�n de la estructura
SU_Bprogram = Vuelta al programa
SU_nopartconnected=Aucun participant n'est actuellement connect�
SU_numpartconnected=!nosubst Il y a actuellement $wims_numpartconnected participant(s) connect�(s)

wims_name_SE_list = Participantes y puntuaciones
wims_name_n_participant = P�gina inicial para el participante
wims_name_SE_mod = Mensaje del d�a
wims_name_SE_config = Config./Mantenim.
wims_name_SE_secu = Administraci�n de seguridad

ADD_1 = A�adir un
ADD_doc = documento
ADD_sheet = hoja de ejercicios
ADD_exam = examen
ADD_exo = ejercicio
ADD_vote = encuesta
ADD_class = clase
ADD_2 = ADD_3 = A�adir una
ADD_cdt = cuaderno de texto

CL_Names = Niveles,Clases,Programas,Cursos,Cursos interclase
CL_Name = nivel, clase,programa,Curso,Curso interclase
CL_Test = Zona de pruebas
CL_otherNames = Other $(CL_Names[2]),$(CL_Names[3]),$(CL_Names[4]) of the class

!if $wims_supertype = 4
 wims_name_U_oclass = Cambiar de zona
!else
 wims_name_U_oclass = Otras clases
!endif
!set name_deps = Tiene que mejorar sus puntuaciones en los ejercicios
!set name_dep = Tiene que mejorar su puntuaci�n en el ejercicio
!set name_dep2 = antes de recibir puntuaciones en este.
!set name_dep3 = return to worksheet.
