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
 into name_year,name_category,name_primary,name_secondary,name_university,name_graduate,,\
 name_research

!endif
