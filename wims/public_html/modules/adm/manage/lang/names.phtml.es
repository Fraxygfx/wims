!set lang_exists=yes

!set name_intromain=Esta utilidad le permite al administrador del sitio llevar en l�nea el mantenimiento\
 de la instalaci�n WIMS. El acceso a ella est� controlado estrictamente mediante\
 definiciones en el fichero de configuraci�n

!set name_warning_wrongpass=Ha introducido una contrase�a err�nea.
!set name_try_wrongpass=Vuelva a intentarlo

!!list
 !distribute lines Tras la compilaci�n es necesario configurar la seguridad de la instalaci�n. �Por favor ejecute bin/wrapuid como root!\
   Lista de tareas que puede realizar en l�nea\
   Configuraci�n\
   Chequeo del sistema\
   tras la adici�n de nuevos recursos (m�dulos, hojas de trabajo) al servidor.\
   Maintain\
   Create/maintain\
into name_warning,name_online,name_configuration,name_checklist,name_mkindex,name_checkmaintain,\
  name_createmaintain

!set name_restore_class=Restore a class
!!help

!set name_warning_help=Por favor use los enlaces de ayuda espec�ficos de los distintos temas de ayuda.

!set name_visit=Visitar
!set name_click=Pulse aqu�

!set wims_name_download_module=Module download

!if $job=access
 !set title=Configuraci�n de la normativa de acceso
 !set name_subtitle=Definici�n de la normativa de acceso
 !exit
!endif

!if $job=activ
  !set title=Actividades actuales del servidor
  !distribute lines Hora del servidor\
    Media de carga\
    minuto\
    minutos\
    hora\
    horas\
    �ltimos\
    desde\
    N�mero de peticiones\
    Sesiones activas en los �ltimos 10 minutos\
    Sesi�n\
    IP del cliente\
    Peticiones\
    M�dulo\
  into name_servor_time,name_Load,name_min,name_mins,name_hour,name_hours,name_last,name_since,\
   name_requests,name_activesessions,name_session,name_IP,name_Requests,name_module
 !exit
!endif

!if $job=attrib
  !set title=Comprobaci�n de los permisos de los ficheros

  !distribute lines  Todos los permisos de acceso de esta instalaci�n de WIMS est�n en modo seguro.\
  Los siguientes archivos/directorios pueden ser le�dos por otros y no deber�an\
  Hay un n�mero muy grande de ficheros y directorios legibles por otros, lo que no deber�a de ocurrir.\
   El problema s�lo se ha corregido de forma parcial. Por favor\
   repita el proceso de nuevo \
   hasta que no queden ficheros/directorios con permisos incorrectos\
   Lista de los permisos corregidos esta vez\
   Los siguientes archivos/directorios tienen el permiso de escritura abierto a otros, lo que no deber�a de ocurrir\
   Hay un gran n�mero de ficheros/directorios que tienen el permiso de ejecuci�n abierto a otros, lo que no deber�a de ocurrir.\
   Hay un gran n�mero de ficheros/directorios que tienen el permiso de ejecuci�n abierto a otros, lo que no deber�a de ocurrir.\
   El due�o de los siguientes ficheros/directorios no es WIMS.\
   Los siguientes directorios/ficheros deben tener el permiso de ejecuci�n abierto a todo el mundo, y no lo tienen.\
into name_attrib1,name_attrib2,name_attrib3,name_attrib4,name_repeat,\
  name_attrib5,name_attrib6,name_attrib7,name_attrib8,name_attrib9,name_attrib10,
  name_attrib11

  !set name_warning1=WIMS directories should not contain files belonging to others.\
  Now you MUST manually check the origin of these files, and either erase\
  them, or change their ownership.
  !set name_warning2=Importante recomendaci�n de seguridad: por favor compruebe\
   el due�o de los ficheros.

 !set name_warning_chroot=If you use wims-chroot distribution, debe ejecutar \
 el gui�n <span class="tt">bin/setchroot</span> como root.
 !set name_warning_wimsd=If you use wimsd, debe ejecutar el gui�n <span class="tt">bin/setwimsd</span> como root.
 !set name_warning_wrapexec=debe ejecutar el gui�n <span class="tt">bin/setwrapexec</span> como root.\
   Esto es crucial para la seguridad de su instalaci�n.
 !set name_warning3=Estos permisos err�neos constituyen un riesgo de seguridad para su instalaci�n.\
  El problema acaba de ser corregido, pero debe estar alerta y comprobar\
  los permisos de acceso con m�s frecuencia. Si reaparece el mismo problema,\
  debe plantearse la posibilidad de una intrusi�n en su sistema, y los datos\
  de este servidor pueden estar en peligro.
 !exit
!endif

!if $job=backup

 !distribute lines  La realizaci�n de copias de seguridad de los datos no est� activada en este servidor.\
   Pulse aqu�\
   para configurar la salvaguardia diaria autom�tica de los datos.\
   �ltima salvaguardia de los datos\
   Descargar las copias de seguridad\
   Para recuperar una copia de seguridad vieja, escriba el nombre del fichero (debe ser un archivo *.tgz)\
   Necesitar� una conexi�n r�pida si el fichero que quiere descargar es grande.\
into name_backup,name_click,name_daily,name_last,name_download,name_restore,name_fast
 !exit
!endif

!if $job=badconf

  !set name_warning1=!nosubst �El fichero $fname tiene permisos de lectura por todo el mundo!\
   Hay un riesgo serio de que se haya producido una filtraci�n de la configuraci�n \
   del administraci�n del sitio y/o su contrase�a. DEBE cambiar ahora mismo las \
   propiedades de $fname haci�ndolo legible s�lo por su due�o,
  !set name_warning2=y aumentar la seguridad de las definiciones del fichero en tanto sea posible.
  !set name_warning3=y definir una nueva contrase�a de administrador.
  !set name_warning4=Una vez haya hecho esto vuelva a intentar abrir esta p�gina.

 !exit
!endif

!if $job iswordof class bestclass
  !set title=
  !distribute lines Pulse aqu�\
   para configurar la normativa de acceso del sitio con respecto a las clases virtuales.\
    No hay clase virtual correspondiente a su b�squeda. \
    Lista de clases de este sitio\
    creada\
    expira\
    se refiere al n�mero de horas de conexi�n acumuladas en el �ltimo mes.\
    mejor actividad de clase, en este per�odo\
    Participante\
    Lista de clases independientes\
    significa la conexi�n del alumno acumulativa de hora desde\
    mejor clase de horas de conexi�n acumulativa desde\
    Su clase virtual de WIMS\
    Lista de clases\
    carga\
    formato\
  into name_click,name_config,name_noclass,name_list,name_created,name_expire,name_cumul,name_best,\
  name_part,name_listindependant,name_cumul_student,name_bestcumul,name_yourclass,name_listclass,\
  name_load,name_format

  !set name_search1=There are many virtual classes on this site. To find a class, please type a search keyword.
  !set name_search2=There are still too many classes corresponding to your search word. Please give a more precise word.
  !set name_total=!nosubst There are $nbcls class groups or classes in this server.

  !if $job2 iswordof modify erase
  !set title=
  !distribute lines Propiedades importantes de la clase virtual \
     de\
     n�mero de serie\
     Esta clase viene con la distribuci�n de WIMS.\
     Contrase�a del profesor\
     Contrase�a para la inscripci�n de participantes\
     Borrar esta contrase�a hace que todo el mundo pueda acceder a la clase.\
     Estaciones de trabajo seguras\
     Fecha de expiraci�n\
     notificar al superviso\
     de la clase acerca de sus cambios.\
     Otras clases\
     L�mite de participantes\
    �Est� seguro de querer borrar esta clase?\
    Su clase virtual de WIMS\
    Modificaci�n de una clase de Wims\
  into name_prop,name_of,name_serial,name_distrib,name_supervisor_p,name_supervisor_r,\
    name_warning,name_secure,name_expire,name_notify,name_change,name_other,name_limit,name_erase,\
    name_yourclass,name_yourclassmod
  !set name_creation=!nosubst is created on $class_creation and
  !set name_expires=!nosubst expires on $class_expiration

  !set name_remark=<b>Nota</b>. Los cambios en estos campos s�lo tienen sentido si es el \
     profesor responsable de la clase el que los solicita (y ha perdido el  control de la clase).\
     Usted probablemente deber�a
!exit
!endif

 !exit
!endif

!if $job=conf
  !set title=!nosubst Configuraci�n de $cattit
  !distribute lines La configuraci�n no ha cambiado porque no ha hecho modificaciones.\
por defecto\
recommended\
   into name_config,name_default,name_recommended

  !set name_updated=!nosubst El fichero <span class="tt">wims.conf</span> hasido actualizado. Puede recuperar \
  la informaci�n de configuraci�n antigua en <span class="tt">$backdir/wims.conf.old</span>.

  !set name_warning=Los par�metros con un asterisco `*' en su t�tulo son importantes.\
Los que tienen un signo de peligro `!' pueden da�ar la instalaci�n si comete alg�n error.\
De todas formas recuerde que si borra el fichero <span class="tt">log/wims.conf</span>\
volver� a empezar con una configuraci�n por defecto. Tambi�n puede recuperar\
las configuraciones guardadas en el directorio log.
!!confcat=6
 !distribute lines Pulsar aqu� \
   para administrar las protecciones y \
   aqu�\
  para administrar su m�dulo manualmente.\
 into name_click,name_backup,name_here,name_manual

!!ressources
  !set name_config_site=para configurar las normas de restricci�n de acceso del sitio.

!!graphics and software
   !distribute line para comprobar los efectos de la nueva configuraci�n.\
   Compruebe las aplicaciones de c�lculo utilizadas por numerosos m�dulos de WIMS\
   si quiere comprobar las aplicaciones gr�ficas\
   orden\
   importancia\
   disponibilidad\
   No disponible\
   Ejemplo de m�dulos que dependen de �l\
   Este software va normalmente incluido en la distribuci�n de WIMS. Quiz�s  haya fallado su compilaci�n o usted la ha excluido deliberadamente.\
   Para comprobar los efectos del nuevo ajuste.\
 into name_check,name_checksoftware,name_checkgraphics,name_command,name_importance,\
   name_availability,name_Unavailable,name_dependingonit,name_fail,name_refresh


!set name_warning_program=WIMS no ha podido encontrar los siguientes programas que usan algunos de sus\
 m�dulos. Estas aplicaciones o bien no est�n instaladas en el sistema\
 (en cuyo caso por favor inst�lelas) o bien est�n instaladas en un directorio\
 que no est� incluido en el par�metro PATH (ruta) en

!set name_imagemagick=<b>ERROR</b>! No hemos encontrado una instancia funcional de ImageMagick en su sistema.\
 Sin este paquete la mayor�a de las im�genes y animaciones de WIMS estar�n mal.\
 En consecuencia le recomendamos vivamente que instale ImageMagick antes de continuar.

!set name_dynamic=Comprobar las im�genes din�micas (puede plantearse hacerlo en distintos navegadores)
!set name_tex=Esta f�rmula usa una inserci�n din�mica escrita en TeX. Deber�a verse correctamente, a no ser \
 que TeX no est� instalado correctamente en su sistema.
!set name_size= Puede cambiar la escala de cambio del tama�o de los tipos de letra si aparecen\
 demasiado grandes o demasiado peque�os
!set name_mathml=This formula uses dynamic MathML. If it does not appear correctly, it is certainly\
because the browser you use does not treat correctly MathML.

!set name_drawing=Las siguientes dos im�genes han sido generadas por la utilidad interna\
  de dibujo din�mico. La primera es una imagen est�tica, la segunda es animada.\
  �Las ve correctamente? De lo contrario pruebe otros formatos gr�ficos y de animaci�n.


!set name_gnuplot1=La siguiente representaci�n gr�fica usa <b>gnuplot</b>.
!set name_gnuplot2= Las curvas deben tener colores
diferentes. Si el resultado no es correcto pruebe con distintos formatos gr�ficos.

!set name_graphviz1=The following colored horizontal graph uses <b>graphviz</b> and is not affected by the above formats. \
  If it does not appear, then
!set name_graphviz2=is not correctly installed.

!set name_povray1=La siguiente imagen de traza de rayos es independiente de los formatos anteriores. \
Si no aparece, entonces
!set name_povray2=no est� correctamente instalado.

 !exit
!endif


!if $job=crontab
  !set title=Mantenimiento diario autom�tico
 !distribute  Se ha encontrado una tarea cron (crontab) instalada a mano. Debe o bien continuar admnistrando las tareas de cron de forma manual o bien borrar este fichero crontab antes de pasar a utilizar la herramienta en l�nea. �Nunca use esta herramienta si tiene un crontab personalizado!\
    Error extra�o: no pudo recuperar mi directorio de trabajo. Compruebe su instalaci�n: no funciona normalmente.\
   Trabajos de mantenimiento disponibles\
   Copia de seguridad de los datos a las\
   elija una hora en la que el servidor no est� ocupado\
   Contabilidad de la actividad (necesaria para las estad�sticas del sitio)\
into name_manually,name_warning,name_strange,name_available,name_daily,name_notbusy,name_accounting


 !exit
!endif

!if $job2=del1
  !set name_warning=�Est� seguro de que quiere borrar la cuenta de desarrollador

 !exit
!endif

!if $job=developer
  !set title=
  !set wims_name_adddevel=A�adir una nueva cuenta de desarrollador
  !set wims_name_develaccount=Lista de cuentas de desarrolladores
  !set name_dev=Desarrolladores de m�dulos registrados en este servidor
  !set name_visit=Visitar
  !set name_allowed=Desarrolladores a los que se les permite instalar m�dulos en el subdirectorio\
   local del sitio (escriba sus identificadores de usuario)

 !exit
!endif

!if $job=file
  !distribute lines Este es el fichero que va a descargar\
      �De verdad quiere borrar el fichero\
     modificado por �ltima vez\
     bytes\
     es una imagen\
     es un fichero binario\
     es demasiado largo para poder mostrarlo o editarlo.\
     Este fichero pertenece a la distribuci�n, no deber�a ser modificado.\
     Descargar el fichero\
     Contenido de\
   into name_file,name_erase,name_last,name_bytes,name_image,name_binary,name_toolong,\
   name_distrib,name_download,name_content

!exit
!endif

!if $job=fs
!distribute lines Directorio actual\
  Subdirectorios (pulse para ir)\
  Enlaces simb�licos\
  A�adirle un nuevo fichero\
  Ficheros\
  No hay ning�n fichero normal en este directorio.\
into name_current,name_sub,name_symbolic,name_add,name_files,name_file

 !exit
!endif

!if $job=no_right
  !set name_warning=Lo sentimos pero no se ha identificado correctamente como administrador\
de este sitio. No est� autorizado a acceder a este m�dulo.
!exit
!endif
!if $job=mkindex
  !set title=Reconstrucci�n del �ndice de recursos
  !distribute lines Se ha planificado la reconstrucci�n del �ndice de recursos. Recibir� un correo electr�nico con el resultado de la reconstrucci�n.\
    La reconstrucci�n del �ndice de recursos ocupa muchos recursos del servidor,y debe ser evitada cuando el servidor se encuentre muy ocupado.\
    Resultado de la �ltima reconstrucci�n del �ndice de recursos, el $lastdate\
    Pulse aqu�\
    para reiniciar una reconstrucci�n del �ndice de recursos (no deber�a).\
    para iniciar la reconstrucci�n del �ndice de recursos.\
  into name_scheduled,name_rebuilding,name_result,name_click,name_restart,name_start
!exit
!endif

!if $job=mod2
  !set name_error1=!nosubst El identificador de usuario (login) <span class="tt">$devlogin</span> \
 est� ya siendo usado por otra cuenta. Por favor escoja otro identificador.
  !set name_error2=!nosubst No ha introducido el campo <span class="tt">$badfield</span> correctamente.\
 Por favor corr�jalo.

!exit
!endif

!if $job=modform
  !set name_modification= Modificaci�n de las propiedades de una cuenta de desarrollador\
    (deje el campo de la contrase�a en blanco si no desea modificar la contrase�a).
 !set name_add= Para crear una nueva cuenta de desarrollador especifique por favor (todos \
     los campos son obligatorios):
!exit
!endif

!if $job=modules
   !set title=Module download
  !set name_scheduled=!nosubst  Se ha recibido la petici�n de ejecutar su orden <span class="tt wims_code_words">$auto</span>. El resultado \
   se le enviar� por correo electr�nico.<p> Por favor no repita la orden hasta que se haya completado su ejecuci�n.
  !distribute lines  entre los anuncios de m�dulos\
    m�dulos de la zona\
    the general search zone, or <tt>all</tt> for all zones\
    sample : H1\
    y categor�a\
    the general search category, or <tt>all</tt> for all categories\
    sample : geometry\
    modificados al menos hace\
    d�as\
    Reduce the risk of getting new bugs\
    Download configuration\
  into name_mod, name_zone, muzone_help, muzone_placeholder,\
    name_cat, mucat_help, mucat_placeholder, name_change, name_ago,\
    mudelay_help, wims_name_config_module

  !distribute lines Error en la descarga del m�dulo \
      Error al instalar/actualizar\
      Instalaci�n/actualizaci�n de\
       Deber�\
       �xito.\
       probarlo\
       reconstruir el �ndice de m�dulos\
       Instalar\
       Actualizar\
       contra\
       Cambios\
       Nueva versi�n de\
       M�dulo nuevo\
       Tiene que\
      despu�s de una actualizaci�n de m�dulos.\
      Pulse aqu�\
      para configurar la actualizaci�n diaria autom�tica de m�dulos.\
      Pueden tambi�n poner al d�a\
      Here you can update / download modules.\
    into name_error1,name_error2,name_install,name_successful,name_need,name_test,name_rebuild,name_Install,\
      name_Update,name_versus,name_Changes,name_version,name_newmodule,name_youneed,name_after,\
      name_click,name_automatic,name_rss,name_canupdate

!!check
!distribute lines No se ha hallado ning�n anuncio de m�dulo que se corresponda con su b�squeda.\
    Pulse en la direcci�n de un m�dulo para comprobar/instalar/actualizarlo.\
    Se han hallado versiones nuevas\
    Se han hallado versiones nuevas\
    actualizar todo\
    instalar todos\
    actualizado<br />por\
    Nueva<br />versi�n\
    Hallados m�dulos nuevos\
    Versi�n del<br />servidor\
    hecho p�blico<br />por\
  into name_check1,name_click_adress,name_foundv,name_foundm,name_all_u,name_all_i,name_updated,name_newv,name_newm,name_server,name_published

!exit
!endif

!if $job=restore

   !set name_warning1=Archivo comprimido en mal estado: no se ha encontrado ning�n contenido en �l.
   !set name_warning2=Se han recuperado/instalado con �xito datos en los siguientes directorios
 !exit
!endif

!if $job=sess
  !set title=Sesi�n de usuario
  !distribute lines Contenido de la sesi�n\
    Contenido del fichero de variables de la sesi�n\
    Contenido del fichero\
    Lista de sesiones activas\
  into name_content_s,name_content_v,name_content_f,name_listsessions
!exit
!endif

!if $job=upload
 !set name_warning=Para subir recursos al servidor, inserte el cdrom o pendrive usb que contiene\
el recurso y busque el fichero "wims-resource.tgz" en el siguiente campo de entrada
 !set name_need=Necesitar� una conexi�n r�pida si el fichero que va a subir es grande.
!exit
!endif

!if $job=rss
   !set title= Reconstruir la conexi�n RSS
   !set name_start=Comenzar a reconstruir la conexi�n RSS.
 !exit
!endif

!if $job=otherdownload
  !set name_text1=Otros recursos pueden cargarse a distancia manualmente.
  !set name_shtooka=Cargar a distancia los recursos Shtooka (palabras audio)

!exit
!endif

!if $job=swac
  !set name_mkindex=Make the index
  !set name_text_swac= Pueden cargar a distancia los ficheros MP3 de algunos vol�menes del proyecto Shtooka.\
</p><p>Si los m�dulos que los llaman son muy solicitados por el servidor WIms, deber�an hacerlo.\
Si no, estos m�dulos ir�n a buscar los ficheros MP3 sobre el sitio http://shtooka.net\
\
Para cargar a distancia las colecciones, hagan lo por l�nea de pedido con el script\
<span class="tt">$wims_home/bin/swac </span>. Instalar� algunos paquetes swac al buen lugar.\
</p><p class="small">Porque los ficheros wims se cifran ISOlatino, no es a�n \
posible utilizar los paquetes cir�licos.</p>
!exit
!endif

!if $job=sendmail
 !distribute item Subject,Message \
into name_subject,name_message
 !let name_dest=Recipient,Server administrator,Individual class supervisor,Superclass administrator,Portal administrator,Teacher of a superclass,Teacher of a portal
 !let name_sending=Your message has been send to all Recipient
 !exit
!endif

!if $job=classrestore
  !distribute lines Choose the class to restore in the following list\
  There is no class to restore.\
  There are many archived classes. You must enter the identifier of the class to restore.\
into name_restore_choose, name_restore_noclass,name_toomuchbackup
!set name_restore_done=!nosubst La classe $clrestore a �t� restaur�e. Veuillez pr�venir\
l'enseignant que la nouvelle date d'expiration est le $date. Il est d�conseill� de refaire\
cette op�ration une seconde fois.

  !exit
!endif

