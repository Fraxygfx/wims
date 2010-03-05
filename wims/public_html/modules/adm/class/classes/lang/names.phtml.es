!set lang_exists=yes
!if $class_type iswordof 2 4
   !if $class_type=2
    !set name_classe=agrupaci�n de clases
    !set name_sup=administrateur
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
Nuevo participante,inscrito,Tipo de conexi�n,Up\
into name_register,name_anonymous,name_open,name_protected,name_year,\
name_new_participant,name_registered,name_connexion,name_up

!set name_warning_external=N'utilisez le formulaire ci-dessous que si le lien en dessus\
 ne fonctionne pas.
 
!distribute line  No tiene cuenta en otras clases.\
Buscar su clase\
no hay ninguna clase disponible\
Ninguna clase corresponde a su investigaci�n.\
Puede cambiar directamente en&nbsp;\
into name_noaccount,name_searchclass,name_noavailable,name_nofound,name_direct

!let classification=Escuela,Colegio,Liceo,Universidad,otro

!set name_text1=Elija la l�nea correspondiente a la clase o al centro educativo que le corresponda. \
 <p>Si a�n no se ha inscrito, pulse en <tt>Inscribirse</tt> (si la clase tiene el estatuto de\
<tt>protegida</tt>, necesita que el profesor o el administrador le proporcione la contrase�a).\
 <p>De lo contrario pulse <tt>$wims_name_Enter</tt> para entrar.

!set name_text2=Para pasar a $name_level_else $sousclasses_else, elija el nombre de la clase de la tabla de abajo.
!set name_text3=O elegir $name_level_else $sousclasses_else de la tabla de abajo.
!set name_language=No hay clases en espa�ol en este sitio. �Quiz�s est� buscando una clase en otro idioma ?
!set name_language2=este sitio no contiene ninguna clase en espa�ol.

!set name_warning=<b>Error</b>. Ha pedido conectarse a $name_classess que no existe.\
 Por favor verifique su petici�n.
 
!set name_enter=!nosubst Para poder entrar en la clase <b><font color=green>$class_description</font></b> de\
<b><font color=green>$class_institution</font></b> como un\
<em>participante dado de alta</em>, introduzca por favor su nombre de usuario\
y su contrase�a personal.

!set name_entersup=!nosubst Para entrar en la clase <b><font color=green>$class_description</font></b> de\
<b><font color=green>$class_institution</font></b> como su\
<em>$name_sup</em>, por favor introduzca la contrase�a del $name_sup.

!set name_research1=Il y a beaucoup de classes virtuelles sur ce site. Pour retrouver la v�tre,\
  tapez une partie d'un mot se trouvant dans son titre ou dans le nom de l'enseignant.
!set name_research2=Il y a encore trop de classes correspondant � votre mot de recherche. Veuillez\
  donner un mot plus pr�cis.
  
!set name_supervisor_text=!nosubst Pulse sobre el nombre de su centro educativo o clase\
  para entrar como profesor. La inscripci�n a esta parte est� reservada a los profesores.

 !if $type=example
   !set name_example1=Lo sentimos, no se han encontrado clases de ejemplo en este sitio.
   !set name_example2= No hay clases en espa�ol en este sitio, solamente $clcnt clase(s) de ejemplo en otros idiomas.
   !set name_example3=!nosubst Hay $clcnt clase(s) de ejemplo en espa�ol en este sitio.
   !set name_example4=Estas clases de ejemplo sirven para mostrarle c�mo funcionan\
las clases virtuales desde el punto de vista del estudiante. Deber�a crear\
 su propia clase para verla desde el punto de vista del profesor,\
 que es mucho m�s completo.   
   !set name_instruction=<ul>\
<li>Pulse en <tt class="d">an�nimo</tt> para conectarse a una clase como invitado an�nimo.\
<li><p>Pulse en <tt class="d">inscrito</tt> para conectarse a la clase como usuario\
 dado de alta con identificador y clave (debe haberse inscrito anteriormente, y\
 es probable que su registro se elimine regularmente del servidor, porque son clases de\
 ejemplo).\
<li><p>Pulse en <tt class="d">Inscribirse</tt> para darse de alta en la clase.\
</ul>
  !set name_sheet_example=Vous trouverez aussi des feuilles d'exercices que vous pourrez ensuite importer \
    dans votre classe et modifier.
 !endif
 
