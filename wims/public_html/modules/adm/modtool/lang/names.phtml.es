!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_auth=Autenticaci�n del desarrollador
!set name_prop=Propiedades
!set name_modname=Lista de m�dulos para <em>$(auth_name[1]) $(auth_name[2])</em>
!set name_create=Crear un m�dulo
!set name_diff=Comprobar las diferencias
!set name_flist=Lista de ficheros
!set name_binfile=Ficheros binarios
!set name_del=Borrar un m�dulo
!set name_size=Tama�o
!set name_publish=!nosubst Publicar $i_title<br /><span class="tt">$mod</span>

!set name_validation_message=Demander au gestionnaire du site de v�rifier l'installation.
!set name_compile=Compile

!set name_file=Ficheros binarios existentes
!set name_file1=Fichero
!set name_nofile= Ning�n fichero depositado en el m�dulo.
!set name_depos=Depositar un fichero
!set name_in_module=en el m�dulo
!set name_replace=un fichero para sustituirlo&nbsp;
!set name_addfile=A�adir otro fichero&nbsp;
!set name_help_addfile=(the name of a file of the OEF exercise source\
   must be of the form <span class="tt"> src/name_file.oef</span>)
!set name_gestion=Para ver los ficheros del documento, pulsen el v�nculo <span class="wims_button disabled">$wims_name_docgestion</span>
!set name_your_module=Su m�dulo
!set name_file2=contiene los ficheros siguientes
!set name_updateadress=Ponga la direcci�n al d�a
!set name_simpl_address=La direcci�n de este m�dulo es una direcci�n simplificada
!set gnu=!nosubst &copy; $year (<a href=\"COPYING\">GNU GPL</a>)

!set name_type=ejercicio, herramienta, documento, recreaci�n, OEF, deducci�n
!set name_zone=Zona
!set name_Category=Categor�a
!set name_category=!nosubst $wims_name_Type
!set name_createnew=Nuevo m�dulo
!set name_noquicktool=Quicktool no esta instalado en este servidor
!set name_rename=cambiar nombre
!set name_duplicate=duplicar
!set name_increment=�No olvidan incrementarlo cuando publican una nueva versi�n!
!set name_backto=!nosubst Volver a $otit
!set name_this1=de se nuevo m�dulo
!set name_this2=del m�dulo actualmente en desarrollo
!set name_levellist=E: escuela primaria; H: escuela secundaria; U: universidad; <br />G: estudio doctoral; R: investigaci�n

!set name_accountchange=Cambiar las propiedades de su cuenta de desarrollo
!set name_empty=deje el campo <span class="wims_label"> contrase�a</span> vac�o si quieren conservar el antiguo
!set name_change=Se cambi� la contrase�a de su cuenta.

!set name_translation_language=Other languages

!distribute lines Test options\
  Formula\
  Low image,High image, Mathml\
  Zoom\
  Letter spacing\
  normal,spaced\
  Size of the mathematical formulas\
into name_optiontest,name_formule,name_useropts1, name_useropts2,name_fonte,name_useropts3,\
  name_useropts4

!if $job=modname
  !set name_moddevcnt=!nosubst Tienen $totalcnt m�dulos en desarrollo.
  !set name_limited=!nosubst lista limitada a $maxlist m�dulos

  !distribute lines No mostrar m�s que los m�dulos cuya direcci�n contiene\
  Presione el t�tulo de un m�dulo para trabajar\
   No tienen a�n m�dulo en desarrollo. Pulse aqu� para \
   Restaurar un fichero de protecci�n\
  into name_browselist,name_clicktitle,name_nomodule,name_restore
!endif

!if $job iswordof move copy
  !distribute lines Copiar, cambiar nombre, duplicar, cambiar nombre\
   Hacer una copia\
   Cambiar el nombre del m�dulo va a romper las hojas de trabajo que lo utilizan. Garantizan que no es el caso\
into name_choice,name_copy,name_warning1
!set name_public_module=!nosubst el m�dulo p�blico <span class="tt wims_fname">$original2</span>) en su espacio \
de desarrollo bajo la direcci�n
!set name_warning2=Cambiar el nombre o duplicar un m�dulo de direcci�n p�blica puede conducir a la duplicaci�n \
  de su publicaci�n. �Sea muy prudente! Cambiar el nombre o duplicar un m�dulo de direcci�n p�blica\
  puede conducir a la duplicaci�n de su publicaci�n. �Sea muy prudente!\
  <p>Si quieren hacer pruebas sobre el m�dulo, eligen la zona <span class="wims_fname">pruebas</span>.
!set name_warning3=Si ya publicaron este m�dulo, quiere cambiar esta direcci�n exactamente seg�n \
  su direcci�n p�blica. Si no arriesgan una duplicaci�n de su publicaci�n.</p>
!endif

!if $job=auth
  !set name_intro=Esta herramienta es para desarrollar en l�nea, m�dulos para WIMS. \
    Es una herramienta sofisticada y solamente desarrolladores registrados podr�n \
    acceder a ella. <p> Por favor, introduzca los datos de su identificaci�n.</p>

  !distribute lines escriba\
   al encargado de este servidor\
   si ha olvidado su contrase�a.\
    Si usted tiene inter�s en desarrollar m�dulos WIMS, por favor\
    para conseguir una identificaci�n de desarrollador (usuario, contrase�a).\
    Tambi�n usted puede usar\
    para escribir ejercicios interactivos de una manera f�cil, sin necesidad de identificaci�n.\
  into name_manager,name_forget,name_developer,name_identification,name_createxo1,\
    name_createxo2

!endif

!if $job=backup
 !set name_save=Ah� tienes el fichero de protecci�n del m�dulo
 !set name_internal_error= Error interno: imposible de generar el fichero de protecci�n. Quiere contactar el
!endif

!if $job=publish
  !distribute lines Nombre de su cuenta de publicaci�n \
  Tipo de publicaci�n\
  versi�n desarrollo, versi�n estable - modificar un m�dulo existente, versi�n estable - a�adir un nuevo m�dulo\
  Es una traducci�n �de un m�dulo que existe <br /> creado por otro autor?\
  Modificantes autorizados\
  �Lea esto en primer lugar!\
  El m�dulo publicado aparecer� en el motor de b�squeda del sitio de aqu� a algunos minutos.\
  Si es un error, quiere pedir al gestor del lugar retirar manualmente el m�dulo que publicaron.\
  Van a recibir un correo electr�nico que confirma la recepci�n del env�o.\
  De acuerdo, ande\
 into name_publishaccount,name_publishtype,name_prompt,name_translation,name_authorized,name_readhelp,\
   name_local,name_error,name_emailsend,name_goahead

 !set name_warning0=!nosubst Este m�dulo tiene una direcci�n p�blica. Deben publicarle pues en el centro de\
   publicaci�n $publishname (<span class="tt">$centralhost</span>). Quiere entrar su identificaci�n de publicaci�n.
 !set name_warning1=�Incrementaron la versi�n del m�dulo, si publican una nueva versi�n de un  \
   m�dulo existente? Si no, nadie pondr� al d�a su nueva versi�n.
 !set name_warning2=Su m�dulo tiene una direcci�n local. No pueden publicarle sino sobre el espacio local  \
   de este servidor. �Quieren seguir?
!set name_warning3=La principal ventaja de una publicaci�n en el espacio local es evidenciar \
  el m�dulo en el motor de b�squeda del servidor local.
!set name_cheat1=!nosubst Este m�dulo declara que se satisface con WIMS-$Wver2,\
 mientras que se desarroll� probablemente o modificado bajo este servidor que es  \
 de versi�n $wims_version. Deben poner al d�a el fichero �NDICE del m�dulo \
 modificando la versi�n de wims en <span class="tt"> Propiedades< /tt>.
!set name_cheat2= �Si est�n seguros de lo que hicieron, pueden enga�ar \
 para hacer creer a los servidores que est�n en un servidor antiguo (OPERACI�N MUY ARRIESGADA)!

!endif

!if $job=diff
  !distribute lines Ninguna diferencia se encuentra entre la versi�n de desarrollo y la versi�n p�blica del servidor.\
  Demasiadas diferencias existen entre la versi�n de desarrollo y la versi�n p�blica del servidor.\
  Diferencias entre la versi�n de desarrollo y la versi�n p�blica del servidor&nbsp;:\
into name_diff1,name_diff2,name_diff3
!endif

!if $job=restore

 !set name_warning1=Su fichero no tiene el aire de un fichero de protecci�n de un m�dulo&nbsp;!<p> \
   No pueden restaurar un fichero sino si fue telecargado antes a partir de Modtool. Vuelva a intentar.</p>

 !distribute lines  No pude reconocer su fichero como una protecci�n de m�dulo. Error en el fichero&nbsp;!\
   Ninguna diferencia se encuentra entre el m�dulo existente (en su espacio de desarrollo) y lo salvaguarda.\
   Demasiada diferencia existe entre el m�dulo existente (en su espacio de desarrollo) y la salvaguarda.\
   Diferencias entre el m�dulo existente (en su espacio de desarrollo) y la salvaguarda&nbsp;\
   D� el fichero de protecci�n que debe restaurarse\
   hacer mostrar las diferencias entre los m�dulos en primer lugar.\
   Ir a trabajar sobre el m�dulo\
   M�dulo restaurado\
  into name_norecognize,name_diff1,name_diff2,name_diff3,name_restoref,name_show_diff,name_gotowork,\
    name_restored

!set name_illegal= �Su protecci�n contiene ficheros de tipos ilegales! Restauraci�n imposible.\
 <p> �Es una protecci�n de una antigua versi�n? Ahora deben copiar los ficheros uno a uno</p>
!set name_warning2=Solas las protecciones desde Modtool o los ficheros cargados a distancia \
   desde el centro de publicaci�n  <a href="$downloadsite">$downloadsite</a>\
   se aceptan. Ninguna modificaci�n manual del fichero de archivos se autoriza.
!set name_warning_diff=!nosubst Este m�dulo va a sustituir completamente al m�dulo existente a la misma direcci�n,  \
  sin posibilidad de vuelta. Pero pueden

!endif

!exit
:del
 Un m�dulo borrado
lo es definitivamente.
!href cmd=reply&jobreq=backup $wims_name_modsave

<p>
<b>Y no olvidan</b> : Una clase virtual o una hoja de
trabajo que hace referencia a su m�dulo no funcionar�n
ya si se borra este m�dulo.

</p><p>
Est�  seguro de querer borrar el m�dulo
!!</p> close after the name of the module
!exit
:delconfirm
El fichero
 <span class="wims_fname">$fname</span>
 del m�dulo
 <span class="wims_mod_title">$title</span> esta borrado.
!exit

:delfile

Est�  seguro de querer borrar el m�dulo
<span class="wims_fname">$fname</span>
del m�dulo
<span class="wims_mod_title">$title</span>&nbsp;?
!exit
