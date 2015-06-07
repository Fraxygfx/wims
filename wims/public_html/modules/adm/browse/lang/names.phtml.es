!set lang_exists=yes

!set name_A=todos
!set name_X=ejercicios
!set name_T=herramientas
!set name_R=matem�ticas recreativas
!set name_L=referencias
!set name_S=hojas de ejercicios
!set name_P=herramientas emergentes

!if $job=subject
  !set title=B�squeda por tema
  !set name_domain=Por favor, seleccione una de las siguientes �reas.

  !set name_available=!nosubst En la �rea <span class="wims_emph">$name</span>, los siguientes temas\
 est�n disponibles.
 !set wims_name_other=Otras �reas
!endif

!if $job=level
 !set title=B�squeda por nivel
 !distribute lines A�o\
   Categor�a \
   Escuela primaria \
   Secondaria\
   Universidad\
   3er ciclo\
   Investigaci�n \
 into name_year,name_category,name_primary,name_secondary,name_university,name_graduate,\
 name_research

!endif

!distribute lines Usted puede explorar el contenido de este sitio web siguiendo varios m�todos.\
  Por �rea\
  Por nivel educativo\
  escuela primaria, secundaria y bachillerato, universidad, etc.\
  Por fecha\
  las �ltimas incorporaciones al servidor.\
  Et pouvez �galement utiliser les s�lections faites pour vous.\
  Por tipo de recursos\
  herramientas gr�ficas y de c�lculo, ejercicios, referencias, etc.\
  Una breve introducci�n\
  a alguna de las mejores actividades del servidor.\
  Correspondance indicative\
  avec les programmes de l'enseignement fran�ais\
  Fold / Unfold\
  By taxonomy\
into name_h_browse,name_by_subject,name_by_level,name_by_level2,name_by_date,name_news,\
  name_selected,name_by_type,name_by_type2,name_introduction,name_thebest,name_french1,\
  name_french2,name_fold,name_by_taxo
