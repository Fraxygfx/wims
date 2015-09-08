!set lang_exists=yes
!if $class_type iswordof 2 4
   !if $class_type=2
    !set name_classe=agrupaci�n de clases
    !set name_sup=aministrador
    !set name_classes= el name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= el $name_classe
   !else
    !set name_classe=centro educativo
    !set name_sup=administrador
    !set name_classes= el $name_classe
    !set name_classesss= del $name_classe
    !set name_classessss= el $name_classe
   !endif
     !set name_classess= un $name_classe
 !else
   !set name_classe=clase
   !set name_classes=la $name_classe
   !set name_classess=una $name_classe
   !set name_classesss= de la $name_classe
   !set name_classessss= La $name_classe
   !set name_sup=profesor
 !endif
 !if $splevel iswordof 1 2 3
   !set sousclasses=!item $splevel of clase,curso
   !set Name_level= !item $splevel of Nivel,Clase,Curso
   !set Name_levels= !item $splevel of Niveles,Clases,Cursos
   !set sousclasses_else=!item $splevel of o una clase, o un curso
   !set name_level_else= !item $splevel of un nivel,una clase,un curso
 !else
   !set sousclasses=subclases
   !set sousclasses_else=una clase o un centro educativo
 !endif

 !set CL_Name	=Nivel,Clase,Programa,Curso,Cursos interclases,P�rtico,Zona prueba
!set Name_program=Programas
!set name_program=programa

!set name_portalandgroup=Centros educativos y agrupamientos de clases
!set name_independantclass=Clases independientes

!distribute items Inscribirse,an�nimo,abierto,protegido,A�o,\
Nuevo participante,inscrito,Tipo de conexi�n,Up,copier\
into name_register,name_anonymous,name_open,name_protected,name_year,\
name_new_participant,name_registered,name_connexion,name_up,name_copy

!set name_warning_external=Utilice el formulario de abajo s�lo si el enlace arriba\
no funciona.

!distribute line  No tiene cuenta en otras clases.\
Buscar su clase\
no hay ninguna clase disponible\
Ninguna clase corresponde a su investigaci�n.\
Puede cambiar directamente en&nbsp;\
into name_noaccount,name_searchclass,name_noavailable,name_nofound,name_direct

!let classification=Escuela,Colegio,Liceo,Universidad,Language,Archives,Development

!set name_text1=Elija la l�nea correspondiente a la clase o al centro educativo que le corresponda. \
<p>Pulse <span class="wims_button disabled">$wims_name_Enter</span> para entrar, inscrito (si la clase tiene el estatuto de\
<span class="wims_label">$name_protected</span>, necesita que el profesor o el administrador le proporcione la contrase�a).

!set name_text2=Para pasar a $name_level_else $sousclasses_else, elija el nombre de la clase de la tabla de abajo.
!set name_text3=O elegir $name_level_else $sousclasses_else de la tabla de abajo.
!set name_language=No hay clases en espa�ol en este sitio. �Quiz�s est� buscando una clase en otro idioma ?
!set name_language2=este sitio no contiene ninguna clase en espa�ol.

!set name_warning=Ha pedido conectarse a $name_classess que no existe.\
 Por favor verifique su petici�n.

!set name_enter=!nosubst Para poder entrar en la clase <span class="wims_classdesc">$class_description</span> de\
<span class="wims_institutiondesc">$class_institution</span> como un\
<em>participante dado de alta</em>, introduzca por favor su nombre de usuario\
y su contrase�a personal.

!set name_entersup=!nosubst Para entrar en la clase <span class="wims_classdesc">$class_description</span> de\
<span class="wims_institutiondesc">$class_institution</span> como su\
<em>$name_sup</em>, por favor introduzca la contrase�a del $name_sup.

!set name_research1=Hay muchas clases virtuales en este sitio. Para encontrar la suya, \
escriba parte de una palabra en el t�tulo o en el nombre de la profesora.
!set name_research2=Hay todav�a demasiadas clases correspondientes a su palabra de b�squeda. Por favor,\
dar una palabra m�s espec�fica.

!set name_supervisor_text=!nosubst Pulse sobre el nombre de su centro educativo o clase\
  para entrar como profesor.\
<p>La inscripci�n a esta parte est� reservada a los profesores.

 !if $type=example
   !set name_example1=Lo sentimos, no se han encontrado clases de ejemplo en este sitio.
   !set name_example2= No hay clases en espa�ol en este sitio, solamente
   !set name_example3=!nosubst Hay $clcnt clase(s) de ejemplo en espa�ol en este sitio.
    !set name_example3b=!nosubst  Hay $othercnt clase(s) de ejemplo en otros idiomas
   !set name_example4=Estas clases de ejemplo sirven para mostrarle c�mo funcionan\
las clases virtuales desde el punto de vista del estudiante. Deber�a crear\
 su propia clase para verla desde el punto de vista del profesor,\
 que es mucho m�s completo.
   !set name_instruction=<ul>\
<li>Pulse en <span class="wims_button disabled">an�nimo</span> para conectarse a una clase como invitado an�nimo.\
</li><li>Pulse en <span class="wims_button disabled">inscrito</span> para conectarse a la clase como usuario\
 dado de alta con identificador y clave (debe haberse inscrito anteriormente, y\
 es probable que su registro se elimine regularmente del servidor, porque son clases de\
 ejemplo).\
</li><li>Pulse en <span class="wims_button disabled">Inscribirse</span> para darse de alta en la clase.\
</li></ul>
  !set name_sheet_example=Encontrar� tambi�n hojas de ejercicios que, a continuaci�n, podr� importar \
en su clase y cambiar.
 !endif

!set name_acceptcgu=Acepto las condiciones generales de uso
!set name_seecgu=Consulte las condiciones generales de uso

!set name_sendmailmess=Un message contenant un nouveau mot de passe vous a �t� envoy� � l'adresse �lectronique que vous avez d�finie.
