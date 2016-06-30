!let lang_exists=yes

!read adm/lang/date.phtml.$moduclass_lang
!read adm/lang/sheetexam.phtml.$lang

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus
!set seriesaction=!nosubst $wims_name_change,$wims_name_erase,$wims_name_up
!set name_duplicateok=Feuille d'exercices dupliqu�e correctement.

!set name_name=Nom
!set name_ltvalue=Valeur(s)

!let name_shtab=!nosubst $wims_name_number,$wims_name_title,$wims_name_Description,Puntos,Points,$name_weight,$name_dependency,$wims_name_comment,$wims_name_action,Param�tres de la s�rie,$wims_name_feedbackexo

!if $activetest<=0
 !let wims_name_sheetadmin=P�gina de preparaci�n
 !set name_title=!nosubst Preparaci�n de la hoja de trabajo $sheet
 !set name_order=Order of the exercises of the series
!else
 !let wims_name_sheetadmin=P�gina de gesti�n
 !set name_title=!nosubst Gesti�n de la hoja $sheet
!endif
!let name_mksheet=Pulse para crearla

!distribute lines Informaciones generales \
Contenido de la hoja de trabajo\
Esta hoja de trabajo no tiene a�n contenido.\
El t�tulo original es\
Modificaci�n del ejercicio\
N�mero de puntos pedidos\
Corregir el c�digo fuente\
La fecha de expiraci�n de la hoja debe ser previa a la fecha de expiraci�n de la clase\
Se ignora pues su petici�n.\
into name_info,name_content,name_warning,name_oldtitle,name_prep_modify,\
name_pointsasked,name_correctsource,name_expiration1,name_expiration2

!set name_text1=Para a�adir un trabajo (ejercicio, herramienta, etc.) a la hoja, deben en primer lugar elegirlo\
(v�ase abajo); regule los distintos par�metros propuestos y lanza el ejercicio.\
A continuaci�n, utilizan el v�nculo sobre el borde del ejercicio para a�adirlo a la hoja.\
Para elegir su trabajo, tienen una de las posibilidades siguientes

!set name_text2= Pasar por el motor de investigaci�n
!set name_text3=Buscar un ejercicio entre
!set name_text4=Buscar un ejercicio de su cuenta
!set name_texttaxo= Find an exercise in some taxonomies
!set name_textsubject= Find an exercise by subject (keywords)

!set name_getsource=Voici le source de cette feuille. Vous pouvez copier ce source (entre les deux lignes compos�es de `*'; \
utilisez le presse-papier) dans un fichier, ce qui vous permettra de r�utiliser le contenu dans une autre feuille ult�rieurement.

!! be careful define variable below only if module help/teacher/program work in your lang. Keep , at the same place.
!!set name_helpprog=Ayudarse de esta correspondencia orientativa, entre los programas de la ense�anza francesa y los ejercicios Wims
!set name_helpprog=$empty
