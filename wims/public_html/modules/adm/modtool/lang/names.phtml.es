!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_auth=Autenticaci�n del desarrollador
!set name_prop=Propiedades
!set name_modname=Lista de m�dulos para <em>$auth_name</em>
!set name_create=Crear un m�dulo
!set name_diff=Comprobar las diferencias
!set name_flist=Lista de ficheros
!set name_binfile=Ficheros binarios
!set name_del=Borrar un m�dulo
!set name_size=Tama�o
!set name_publish=!nosubst Publicar <em>$i_title</em><br>\
	<tt><font size="+0">$mod</font></tt>

!set name_file=Ficheros binarios existentes
!set name_nofile= Ning�n fichero depositado en el m�dulo.
!set name_depos=Depositar un fichero
!set name_in_module=en el m�dulo
!set name_replace=un fichero para sustituirlo&nbsp;
!set name_addfile=A�adir otro fichero&nbsp;
!set name_gestion=para ver los ficheros del documento, pulsen el v�nculo <tt>$wims_name_docgestion</tt>
!set name_your_module=Su m�dulo
!set name_file2=contiene los ficheros siguientes.
!set name_updateadress=Ponga la direcci�n al d�a
!set name_simpl_address=La direcci�n de este m�dulo es una direcci�n simplificada
!set gnu=&copy; $year (<a href=COPYING>GNU GPL</a>)

!set name_type=ejercicio, herramienta, documento, recreaci�n, OEF, deducci�n
!set name_zone=Zona
!set name_category=Categor�a
!set name_createnew=Nuevo m�dulo
!set name_noquicktool=Quicktool no esta instalado en este servidor
!set name_rename=cambiar nombre
!set name_duplicate=duplicar
!set name_increment=�No olvidan incrementarlo cuando publican una nueva versi�n!
!set name_backto=!nosubst Volver a $otit

!set name_this1=de se nuevo m�dulo
!set name_this2=del m�dulo actualmente en desarrollo
!set name_levellist=E: escuela primaria; H: escuela secundaria; U: universidad; <br>G: estudio doctoral; R: investigaci�n

!set name_accountchange=Cambiar las propiedades de su cuenta de desarrollo
!set name_empty=deje el campo �<tt> contrase�a< /tt> �vac�o si quieren conservar el antiguo
!set name_change=Se cambi� la contrase�a de su cuenta.

!if $job=modname
  !set name_moddevcnt=!nosubst Vous avez $totalcnt modules en d�veloppement.
  !set name_limited=!nosubst liste limit�e � $maxlist modules

  !distribute lines No mostrar m�s que los m�dulos cuya direcci�n contiene\
  Presione el t�tulo de un m�dulo para trabajar\
   No tienen a�n m�dulo en desarrollo. Pulse aqu� para \
   Restaurar un fichero de protecci�n\
  into name_browselist,name_clicktitle,name_nomodule,name_restore
!endif

!if $job iswordof move copy
  !distribute lines Copier,Renommer,Dupliquer,Renommer\
   faites une copie\
   Renommer le module va casser les feuilles de travail qui l'utilisent. Assurez-vous que ce n'est pas le cas\
into name_choice,name_copy,name_warning1
!set name_public_module=!nosubst le module public <em>$otit</em> (<tt>$original2</tt>) dans votre espace \
de d�veloppement sous l'adresse 
!set name_warning2=Renommer ou dupliquer un module d'adresse publique peut conduire � la duplication \
  de sa publication. Soyez tr�s prudent ! Renommer ou dupliquer un module d'adresse publique\
  peut conduire � la duplication de sa publication. Soyez tr�s prudent !\
  <p>Si vous voulez faire des tests sur le module, choisissez la zone <tt>test</tt>.
!set name_warning3=Si vous avez d�j� publi� ce module, veuillez changer cette adresse exactement selon \
  son adresse publique. Sinon vous risquez une duplication de sa publication.
!endif

!if $job=auth
  !set name_intro=Esta herramienta es para desarrollar en l�nea, m�dulos para WIMS. \
    Es una herramienta sofisticada y solamente desarrolladores registrados podr�n \
    acceder a ella. <p> Por favor, introduzca los datos de su identificaci�n.
    
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
 !set name_save=Voici le fichier de sauvegarde du module
 !set name_internal_error= Erreur interne : impossible de g�n�rer le fichier de sauvegarde. Veuillez contacter le
!endif

!if $job=publish
  !distribute lines Nom de votre compte de publication \
  Type de publication\
  version d�veloppement,version stable - modifier un module existant, version stable - ajouter un nouveau module\
  Est-ce une traduction <br> d'un module existant <br>cr�� par un autre auteur ?\
  Modificateurs autoris�s\
  Lisez ceci d'abord !\
  Le module publi� appara�tra dans le moteur de recherche du site d'ici quelques minutes.\
  Si c'est une erreur, veuillez demander au gestionnaire du site d'enlever manuellement le module que vous avez publi�.\
  Vous allez recevoir un mail confirmant la r�ception de l'envoi.\
  D'accord, allez-y\
 into name_publishaccount,name_publishtype,name_prompt,name_translation,name_authorized,name_readhelp,\
   name_local,name_error,name_emailsend,name_goahead

 !set name_warning0=!nosubst Ce module a une adresse publique. Il doit donc �tre publi� au centre de\
   publication <tt>$centralhost</tt>. Veuillez entrer votre identification de publication.
 !set name_warning1=Avez-vous incr�ment� la version du module, si vous publiez une nouvelle version d'un \
   module existant ? Sinon, personne ne mettra � jour votre nouvelle version.
 !set name_warning2=Votre module a une adresse locale. Il ne peut �tre publi� que sur l'espace local \
   de ce serveur. Voulez-vous continuer ?
!set name_warning3=Le principal avantage d'une publication dans l'espace local est de faire apparaitre\
  le module dans le moteur de recherche du serveur local.
!set name_cheat1=!nosubst Ce module d�clare qu'il se contente de WIMS-$Wver2,\
 alors qu'il a probablement �t� d�velopp� ou modifi� sous ce serveur qui est \
 de version $wims_version. Vous devez mettre � jour le fichier INDEX du module\
 en modifiant la version de wims dans <tt>Propri�t�s</tt>.
!set name_cheat2= Si vous �tes s�r de ce que vous faites, vous pouvez tricher\
 pour faire croire aux serveurs que vous �tes sur un serveur ancien (OPERATION TRES RISQUEE) !

!endif

!if $job=diff
  !distribute lines Aucune diff�rence n'est trouv�e entre la version de d�veloppement et la version publique du serveur.\
  Trop de diff�rences existent entre la version de d�veloppement et la version publique du serveur.\
  Diff�rences entre la version de d�veloppement et la version publique du serveur&nbsp;:\
into name_diff1,name_diff2,name_diff3
!endif

!if $job=restore

 !set name_warning1=Votre fichier n'a pas l'air d'un fichier de sauvegarde d'un module&nbsp;!<p> \
   Vous ne pouvez restaurer un fichier que s'il a �t� t�l�charg� auparavant � partir de Modtool. R�essayez.

 !distribute lines  Je n'ai pas pu reconna�tre votre fichier comme une sauvegarde de module. Erreur dans le fichier&nbsp;!\
   Aucune diff�rence n'est trouv�e entre le module existant (dans votre espace de d�veloppement) et la sauvegarde.\
   Trop de diff�rence existe entre le module existant (dans votre espace de d�veloppement) et la sauvegarde.\
   Differences entre le module existant (dans votre espace de d�veloppement) et la sauvegarde&nbsp;\
   Donnez le fichier de sauvegarde � restaurer\
   faire montrer les diff�rences entre les modules d'abord.\
   Aller travailler sur le module\
   Module restaur�\
  into name_norecognize,name_diff1,name_diff2,name_diff3,name_restore,name_show_diff,name_gotowork,\
    name_restored
  
!set name_illegal= Votre sauvegarde contient des fichiers de types ill�gaux ! Restauration impossible.\
 <p> Est-ce une sauvegarde d'une ancienne version ? Maintenant vous devez copier les fichiers un par un.
!set name_warning2=Seules les sauvegardes depuis Modtool ou les fichiers t�l�charg�s\
   depuis le centre de publication <a href="$downloadsite">$downloadsite</a>\
   sont accept�s. Aucune modification manuelle du fichier d'archives n'est autoris�e.
!set name_warning_diff=!nosusbt Ce module va remplacer compl�tement le module existant � la m�me adresse, \
  sans possibilit� de retour. Mais vous pouvez
  
!endif

!exit
:del
 Un module effac� l'est
d�finitivement. 
!href cmd=reply&jobreq=backup $wims_name_modsave

<p>
<b>Et n'oubliez pas</b> : Une classe virtuelle ou une feuille de
travail qui r�f�rencent votre module ne fonctionneront plus si ce
module est effac�.

<p>
Etes-vous s�r de vouloir effacer le module

!exit
:delconfirm
Le fichier 
 <font color=blue><em>$fname</em></font>
 du module
 <font color=blue><em>$title</em></font> est effac�.
!exit

:delfile

�tes-vous s�r de vouloir effacer le fichier
<font color=blue><em>$fname</em></font>
du module
<font color=blue><em>$title</em></font>&nbsp;?
!exit