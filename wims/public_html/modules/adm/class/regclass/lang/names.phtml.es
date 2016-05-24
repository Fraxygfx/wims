!set lang_exists=yes

!set lev_E=educaci�n primaria
!set lev_H=educaci�n secundaria
!set lev_U=universidad
!set lv1=!char 1 of $ilevel
!set lv2=!char 2 of $ilevel
!set name_level=$(lev_$lv1), a�o $lv2
!set levelid=E1,E2,E3,E4,E5,E6,H1,H2,H3,H4,H5,H6,H7,U1,U2,U3,U4,U5,G,R
!set leveldesc=$levelid
!set nblevel=!itemcnt $levelid

!set name_listclass=clase,clase,agrupaci�n de clases,clase,portal de centro educativo

!default Cltype=$cltype
!if $Cltype iswordof 2 4
   !if $Cltype=2
    !set name_classe=$(name_listclass[$Cltype+1])
    !set name_sup=del profesor-administrador
   !else
    !set name_classe=$(name_listclass[$Cltype+1])
    !set name_sup=del administrador
   !endif
     !set name_classes= el $name_classe
     !set name_classess= un $name_classe
     !set name_classesss= del $name_classe
     !set name_classessss= El $name_classe
 !else
   !set name_classe=$(name_listclass[$Cltype+1])
   !set name_classes=la $name_classe
   !set name_classess=una $name_classe
   !set name_classesss= de la $name_classe
   !set name_classessss= La $name_classe
   !set name_sup=del profesor
 !endif

!distribute lines Seguir\
  Reiniciar la operaci�n\
  Creaci�n de $name_classess\
  Nombre del centro educativo\
a lo sumo\
a lo menos\
  Reservado a los expertos\
  caracteres\
  Volver de nuevo al principio de la operaci�n.\
  Seleccione el tipo de clase virtual que desea crear.\
  entre 4 y 16 caracteres, d�gitos o letras sin acentuar\
 into name_continue,name_again,title,name_Name_portal,name_atmost,name_atleast,name_expert,\
   name_characters,name_comeback,name_choose,name_warningpass

!if $regpolicy=file
  !set noright=(no est� autorizado para hacer eso).
 !else
  !set noright=(�nicamente el administrador del sitio puede hacerlo).
 !endif

!set name_regpolicy=la creaci�n de una clase no tendr� �xito a menos que d� una direcci�n\
   de correo correcta a la que tenga acceso en este momento

!set name_help1=Esta contrase�a le permitir� acceder a la $name_classe como su supervisor.\
  Debe ser la �nica persona que la conozca.

!set name_help2=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de los participantes en la clase; as� que deber� comunic�rsela a sus estudiantes.

!set name_help3=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de los profesores $name_classesss; sus estudiantes y alumnos no deben conocerla.

!distribute lines Es la fecha a la cual se archivar� autom�ticamente su clase.\
  L�mite de participantes de la $name_classe\
  Acceso seguro\
  Opcional\
  Esta clave es de un solo uso. �No puede usarse para conectar a la $name_classe!\
  Clave de la $name_classe\
  into name_help_date,name_help_limit,name_secure,name_optional,name_warning_code,name_code,name_cas

!set name_host=!nosubst Nombres de las estaciones de trabajo desde las que efectuar� las operaciones\
 sensibles sobre su $name_classe. Si vous ne mettez rien, un email vous sera envoy� � chaque op�ration \
 sensible (conseill�). Mettre le mot <span class="tt wims_code_words">all</span> d�sactivera cette mesure de s�curit�.

!set name_cas_help=Ne remplissez ce champ que si vous d�sirez utiliser l'authentification externe du type CAS\
(fourni par votre ENT par exemple).

!set name_cpexempleintro=!nosubst Vous allez cr�er une copie de la classe <span class="tt wims_code_words">$source_title</span>
!set name_choosemode=Vous devez choisir le mode de copie de cette classe
!distribute item Int�grale,Partielle into name_btcpexemplemeth0,name_btcpexemplemeth1

!set name_cpexemplemeth0=Toutes les ressources seront copi�es. Les ressources pourront �tre d�sactiv�es puis supprim�es ou adapt�es en fonction des d�pendances.
!set name_cpexemplemeth1=les examens ne seront pas copi�s. Les ressources seront d�sactiv�es automatiquement. Vous pourrez alors d�cider de celles que vous souhaitez supprimer, adpater ou garder.
!set name_cpexemplecomment=Dans tous les cas, les dates d'expiration seront adapt�es � la date de fermeture de la classe cr��e.
!set name_research1=Il y a beaucoup de classes virtuelles sur ce site. Tapez une partie d'un mot se trouvant dans son titre ou dans le nom de l'enseignant pour trouver celle que vous cherchez.
!set name_research2=Il y a encore trop de classes correspondant � votre mot de recherche. Veuillez donner un mot plus pr�cis.
!set name_searchclass=Rechercher une classe
!set name_nofound=Aucune classe ne correspond � votre recherche.

!distribute items Libre, Prot�g�, Non autoris�, Clonage, \
Cliquez sur la classe � cloner\
into name_free,name_protected,name_disallowed,name_cloning,name_clickclone

!set name_getcloningpwd=!nosubst Vous allez cr�er une copie de la classe \
<span class="tt wims_code_words">$source_title</span>. \
Pour cela vous devez saisir le mot de passe de clonage que \
l'administrateur de la classe vous a communiqu�.

!set name_subclass=Sous-classe de

