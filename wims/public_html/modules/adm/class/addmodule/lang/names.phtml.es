!set lang_exists=yes

!set wims_name_sheetcheck=Compruebe la hoja de trabajo
!!set wims_name_moduback=Vuelta al m�dulo

!set name_choose=Elija la hoja en la cual quiere insertar el elemento de trabajo&nbsp;
!set name_title=Insertar en una hoja de trabajo

!set name_insert=Quiere insertar el elemento de trabajo
!set name_parm= con los par�metros de inicializaci�n
!set name_modifytitle=Tambi�n puede modificar el t�tulo y el texto de la descripci�n.

!set name_required=N�mero de puntos que los participantes deben obtener&nbsp;
!set name_repeat=cada respuesta correcta en el ejercicio da 10 puntos; ponga \
 m�s de 10 puntos aqu� si quiere que el participante repita el ejercicio.

!set name_weight=Peso de los puntos obtenidos en este trabajo
!set name_weight_hint=para el c�lculo de la media
!set name_end=!nosubst  El recurso <span class="wims_mod_title">$title</span> se ha a�adido con �xito a la hoja de trabajo
!set name_endallexo=!nosubst une s�rie d'exercices a �t� ins�r�e avec succ�s dans la feuille <span class="wims_mod_title">$title</span>.
!set name_endallexos=!nosubst $addexo s�ries d'exercices ont �t� ins�r�es avec succ�s dans la feuille <span class="wims_mod_title">$title</span>.
!set name_endallexo2s=!nosubst Les $notadd ressources suivantes n'ont pas pu �tre ins�r�es car elles existaient d�j� :
!set name_endallexo2=!nosubst La ressource suivante n'a pas pu �tre ins�r�e car elle existait d�j� :

!set name_choose_exo=Cette ressource sera ins�r�e comme une nouvelle s�rie d'exercices de la feuille.
!set name_choose_helpexo=Cette ressource sera ins�r�e comme une aide pour l'une des s�ries d'exercices de la feuille lorsque la note est inf�rieure �
!set name_choose_series=Cliquez sur le nom de la s�ries d'exercices � laquelle vous souhaitez ajouter l'aide
!set name_actualhelp=Aide actuelle
!set name_series=S�ries d'exercices
!set name_orderchange=Changer l'ordre des exercices

!if $job=addallexo
  !read oef/es/intronames
!endif

