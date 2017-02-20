!if $special_parm!=$empty
 !changeto help/$module_language/$special_parm.phtml
!endif

!if $wims_user!=supervisor
 Lo sentimos, no hay ayuda para los participantes.
 !tail
 !exit
!endif

!if $wims_read_parm=$empty
El contenido de una encuesta puede ser un texto html, reforzado con los mismos
elementos que los mensajes de los foros. Adem�s se pueden utilizar las siguientes
�rdenes: <dl>
 <dt><span class="tt wims_code_variable">\menu{S�,No}</span>
	<dd>Elecci�n mediante un men�.
	</dd>
 <dt><span class="tt wims_code_variable">\list{A,B,C,D}</span>
	<dd>Elecci�n mediante botones en una lista vertical.
	</dd>
 <dt><span class="tt wims_code_variable">\radio{muy mal, bastante mal, bastante bien, muy bien}</span>
	<dd>Una elecci�n con botones horizontales.
	</dd>
<dt><span class="tt wims_code_variable">\checkbox{A,B,C,D}</span>
	<dd>Plusieurs choix possibles par boutons horizontaux.
	</dd>
 <dt><span class="tt wims_code_variable">\uservar{vname,val0,val1,...}</span>
	<d>Grabar la elecci�n inmediatamente precedente en una variable
	individual para el participante, de nombre <span class="tt wims_code_variable">vname</span>. Esta
	variable tendr� el valor <span class="tt">val0</span> por defecto, <span class="tt">val1</span> si
	el participante hab�a escogido la primera opci�n, etc. <br />
	Esta variable puede posteriormente utilizarse para definir accesos
	individualizados a las hojas de trabajo o a los ex�menes, poniendo
	la palabra <span class="tt wims_code_variable">\vname</span> entre las restricciones de la hoja o examen.
	Dans ce cas, il est possible de fixer le nombre maximum de participants choisissant une option.
	Pour cela, chacun des choix doit commencer par le nombre maximum de participants
	suivi de <span class="tt wims_code_words">:</span>
	Par exemple,
<pre>
\list{46:S�ance 1 � partir de 8h,
46:S�ance 2 � partir de 10h,
40:S�ance 3 � partir de 13h}
</pre>
Attention cependant, utiliser la m�me variable technique dans plusieurs questionnaire peut g�n�rer des conflits.
  </dd>
</dl>

Una encuesta puede contener hasta $max_parms campos de elecci�n.
!tail
!exit
!endif

!if generalinfo iswordof $wims_read_parm
<ul>
 <li><b>$wims_name_title</b> : le titre du questionnaire.</li>
 <li><b>$wims_name_Type</b> :
  <ul>
   <li><b>$name_anonymous</b> : questionnaire anonyme, personne ne conna�t les r�ponses apport�es
   (il est impossible de conna�tre sa propre r�ponse une fois qu'on a vot�)</li>
   <li><b>$name_trace</b> : questionnaire anonyme r�pondant aux m�mes crit�res que pr�c�demment.
   Cependant il est possible de conna�tre les r�ponses effectu�es par un participant
   sans pour autant pouvoir identifier ce participant.</li>
   <li><b>$name_nominative</b> : les r�ponses de chaque participant peuvent �tre
   consult�es (il n'est pas possible d'utiliser des zones de r�ponses
   libres dans ce type de questionnaire).</li>
  </ul>
 </li>
 <li><b>$wims_name_Status</b> : l'un des statuts ci-dessous :
     <ul>
      <li><b>$name_0</b> : le questionnaire est modifiable, les participants ne peuvent pas le voir.</li>
      <li><b>$name_1</b> : le questionnaire n'est plus modifiable, les participants
      peuvent r�pondre au questionnaire.</li>
      <li><b>$name_2</b> : le questionnaire n'est plus modifiable, les participants
      ne peuvent plus r�pondre au questionnaire.</li>
      <li><b>$name_3</b> : le questionnaire n'est plus modifiable, les participants
      ne voient plus le questionnaire.</li>
     </ul>
 </li>
 <li><b>$name_result</b> : si les r�sultats sont $(name_publish)s, les participants peuvent les consulter
 (une fois qu'ils ont vot�). Dans le cas contraire, seul l'enseignant de la classe acc�de aux r�sultats.</li>
 <li><b>$name_whovote</b> : si la liste des votants est $name_publish2, alors l'enseignant
 et les participants peuvent la consulter (� condition qu'il y ait un nombre suffisant de votants
 ou que le vote soit nominatif).
 Dans le cas contraire, personne ne peut savoir qui a vot� !</li>
</ul>
 !goto guidedmode
!tail
!exit
!endif

!if guidedmode iswordof $wims_read_parm
:guidedmode
Plusieurs modes sont possibles :
<ul><li>
  <b>$name_free</b> :  vous pouvez cr�er
  un questionnaire en utilisant librement les commandes qui se trouvent dans l'aide.
  </li><li>
!readproc adm/lang/sheetexam.phtml.$lang
  <b>$name_accessvar</b> : avec ce formulaire, vous pourrez permettre l'inscription sur des tranches horaires.
  La variable technique alors cr��e vous permettra par exemple de d�finir un acc�s individualis�
  � des feuilles ou � des examens. Pour cela, il vous suffira de s�lectionner
  <span class="tt wims_code_words">$(name_allowtype[4])</span>.
  </li><li>
  <b>$name_group</b> : vous pourrez constituer des groupes. Un nom de variable vous sera demand�
  (disons que vous l'avez appel� <span class="tt wims_code_variable">ma_variable</span>. A l'aide
  de celui-l�, vous pourrez ensuite envoyer des mails ou constituer le trombinoscope selon le groupe,
  trier les fichiers csv obtenus dans la classe selon le groupe (� condition <b>dans ce dernier cas</b>
  d'avoir demand� la variable <span class="tt wims_code_variable">var_ma_variable</span>).
  D'autres utilisations sont pr�vues.
  </li>
<li>Attention cependant, utiliser la m�me variable technique dans plusieurs questionnaire peut g�n�rer des conflits.</li></ul>

Le nom des variables doit �tre diff�rent des noms de variables d�j� utilis�s par WIMS (par exemple,
ne pas utiliser
<span class="tt wims_code_variable">exam1</span>, ... , <span class="tt wims_code_variable">sheet1</span>, ...,
<span class="tt wims_code_variable">manual1</span>, ...).
<br/>
Les mod�les <span class="tt wims_code_words">$name_free</span> et <span class="tt wims_code_words">$name_group</span> ne sont pas disponibles lorsque les questionnaires sont partag�s avec une autre classe.
!tail
!exit
!endif
!tail

