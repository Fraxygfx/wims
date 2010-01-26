 !goto $wims_read_parm
 
:1
<ul><li>Une <b>classe individuelle</b> est pr�vue
 pour la gestion d'un groupe d'�l�ves par un enseignant.
 </li>
 <li>Un <b>groupement de classes</b> permet aux
 enseignants d'�changer ou de partager des mat�riels p�dagogiques, et aux
 �l�ves de passer d'une classe � l'autre sans retaper le mot de passe.
 </li><li>
 Une structure d'<b>�tablissement</b> est un rassemblement 
 multi-niveaux de classes
 virtuelles, capable de
 g�rer le besoin d'un �tablissement d'enseignement tout entier :
 bases de donn�es d'�l�ves et d'enseignants,
 diff�rents niveaux d'enseignement, programmes, sujets et classes d'�l�ves,
 responsabilit�s d'enseignants, etc.
 </li></ul>
 Pour les groupements et les �tablissements, le lien ci-dessus permet 
 de cr�er leur <b>portail</b>. Vous aurez ensuite � cr�er les classes 
 qu'ils contiennent.
 !exit
:2
 
  La cr�ation 
 !if $Cltype<2
   d'une <font color="blue">classe</font>
   est une op�ration r�serv�e � un <font color="blue">enseignant</font>. 
 !else
    de <font color="blue">$name_classe</font>
 est une op�ration r�serv�e � un <font color="blue">administrateur</font>
(qui peut �tre un enseignant).
 !endif
 Vous avez besoin d'une adresse �lectronique op�rationnelle pour l'op�ration.
 Apr�s la cr�ation de votre $name_classe, vous devez assumer la responsabilit� de
 sa maintenance. <p>
 Pour cr�er votre $name_classe, veuillez remplir les renseignements suivants :
!exit
 
:step1
Bonjour, $supervisor! <p>
 Vous �tes en train de cr�er 
 !if $Cltype<2
 la
!else
 le
 !endif
 $name_classe $classname sur le site WIMS � l'adresse
 $httpd_HTTP_HOST,
 !if $Cltype iswordof 0 1
  !let tmp=!positionof item $ilevel in $levelid
  de niveau ``<b><font color=green>$(leveldesc[$tmp])</font></b>'',
 !endif
 qui prendra fin le $exp_day/$exp_month/$exp_year. 
 Le nombre maximum de participants est de $ilimit ; 
 l'inscription est
 !if $pword!=$empty
  prot�g�e par le mot de passe $name_classesss.
 !else
  ouvert � tout le monde sur l'internet (en �tes-vous s�r? Sachez que le
  gestionnaire du site peut les refuser et les d�truire).
 !endif
 <p>
 Si vous d�celez une erreur dans les renseignements ci-dessus, veuillez
 !href module=$module&cmd=reply&step=0 la corriger.
 <p>Sinon, afin de v�rifier l'exactitude de vos mots de passe,
 veuillez les retaper encore une fois. 
 !exit
:step2
 
  Bonjour, $supervisor! <p>
 Maintenant vous avez besoin d'un code pour terminer l'op�ration de cr�ation
 de votre $name_classe sous WIMS sur le site $httpd_HTTP_HOST. <p>
 Ce code vient d'�tre envoy� � votre adresse �lectronique
 ``<tt>$email</tt>''. Veuillez consulter votre bo�te � lettre
 �lectronique (attendez quelques instants si n�cessaire) et lire le message
 qui vous a �t� envoy�. Relevez le code �crit dans le message et copiez-le ci-dessous.

!exit 
:step3
 
 Bonjour, $supervisor!<p>
 Votre $name_classe $classname est maintenant en place. F�licitations
 et amusez-vous bien&nbsp;!<p>
 Le nombre de participants est limit� � $ilimit participants (y compris vous)
 
!exit