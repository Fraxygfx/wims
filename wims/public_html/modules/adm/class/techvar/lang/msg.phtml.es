!set wims_module_log=error: $error

!if badoldvaluesnb=$error
 Le nombre de valeurs prises par cette ancienne variable technique est trop �lev� pour qu'elle puisse �tre r�cup�r�e.
 !exit
!endif


!if not_supervisor=$error
 D�sol�, mais seul l'enseignant peut utiliser cette fonctionnalit�.
 !exit
!endif

!if nameforbidden=$error
 D�sol�, les variables techniques ne peuvent pas porter des noms du type exam, sheet, vote, manual suivis d'un num�ro.
 !exit
!endif

!if bad_class=$error
 Vous n'�tes pas connect� � une classe.
 !exit
!endif

!if toomanytechvar=$error
 Vous avez d�j� atteint le nombre maximum de variables techniques autoris�. 
 !exit
!endif

!if badnamelen=$error
 Le nom de variable technique propos� n'est pas de la bonne longueur : trop de caract�res ou pas assez (limitation � $MAXcharname caract�res). 
 !exit
!endif

!if namealreadyuse=$error
 Le nom de variable technique propos� est d�j� utilis�. Choisissez en un autre !
 !exit
!endif

!if badvaluenb=$error
 La liste des valeurs possibles doit �tre non vide et contenir au plus $MAXnbvalue �l�ments. 
 !exit
!endif

!if badtechvarnumber=$error
 Probl�me d'identification de la variable technique. Ne jouez pas avec la barre d'adresse du navigateur !
 !exit
!endif

!if valuedisappear=$error
 Pour l'instant la liste des nouvelles valeurs doit au moins contenir les anciennes valeurs. 
 (Interface en cours d'am�lioration : soyez patient !)
 !exit
!endif

!if nolocalvartech=$error
 Il n'y a pas de variable technique modifiable pour cet �l�ve.
 !exit
!endif

!if nooldvar=$error
 Il n'y a pas d'ancienne variable technique d�tect�e dans cette structure.
 !exit
!endif

!if $error=oldvar_nouser
 L'ancienne variable technique que vous souhaitez cr�er n'est d�finie pour aucun �l�ve de votre classe. Probablement que cette variable appartient � une autre classe du groupement. La cr�ation n'a pas eu lieu.
!exit
!endif

!if $error=oldvar_badvar
 L'ancienne variable que vous essayer de transf�rer ne correspond � aucune ancienne variable transf�rable. Ne jouez pas avec la barre d'adresse du navigateur !
!exit
!endif

!if $error=witholdvar
 D'anciennes variables techniques sont d�tect�es. Peut-�tre devriez-vous les r�cup�rer, en utilisant le lien <i>$wims_name_oldvar</i>, avant de cr�er de nouvelles variables ?
 !exit
!endif

!msg $error
