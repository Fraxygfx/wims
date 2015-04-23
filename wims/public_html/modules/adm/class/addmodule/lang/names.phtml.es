!set lang_exists=yes

!set wims_name_sheetcheck=Compruebe la hoja de trabajo
!set wims_name_moduback=Vuelta al m�dulo

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
!set name_endallexo=!nosubst $addexo s�ries d'exercices ont �t� ins�r�es avec succ�s dans la feuille <span class="wims_mod_title">$title</span>.
!set name_endallexo2=!nosubst Les $notadd ressources suivantes n'ont pas pu �tre ins�r�es car elles existaient d�j� : 

!set name_choose_exo=Cette ressource sera ins�r�e comme une nouvelle s�rie d'exercices de la feuille.
!set name_choose_helpexo=Cette ressource sera ins�r�e comme une aide pour l'une des s�ries d'exercices de la feuille lorsque la note est inf�rieure �
!set name_choose_series=Cliquez sur le nom de la s�ries d'exercices � laquelle vous souhaitez ajouter l'aide
!set name_actualhelp=Aide actuelle
!set name_series=S�ries d'exercices
!set name_orderchange=Changer l'ordre des exercices

!if $job=addallexo
!! il s'agit d'une copie de la partie intro du fichier oef/lang/names

!distribute line  Lo sentimos, este m�dulo no tiene ejercicios disponibles por ahora. �Vuelva m�s tarde!\
Este m�dulo contiene en estos momentos solamente un ejercicio\
 Pru�belo.\
 Elija los ejercicios&nbsp;\
 Ejercicios que contienen\
 Una serie tendr�;\
 Nivel de severidad\
 Tiempo l�mite\
 segundos\
 N�mero de �tems mostrados en los ejercicios de opciones m�ltiples&nbsp;\
 Dar una soluci�n (si est� disponible)&nbsp;\
 Configuraci�n simplificada\
 Configuraci�n experta\
 Seleccionar t�tulos que contengan el t�rmino\
 ejercicios\
 Set-up\
into name_noexercise,name_oneexercise,name_tryit,name_chooseexo,name_exercisescontaining,name_oneserie,\
name_levelseverity,name_chrono,name_secondes,name_qcmanswer,name_solutiongiven,\
name_simplifiedmenu,name_expertmenu,name_select,name_exercices,name_menu

 !set name_datamodule=Este m�dulo necesita el m�dulo de datos <span class="tt">$module_data</span> \
  que no est� instalado en este servidor. Si desean utilizarlo, \
  pidan  al gestor del lugar instalarlo.

!set name_choice=nunca,si la nota no es m�xima,siempre

!set name_choice_check=Siempre a�adir una respuesta correcta en los ejercicios con opciones m�ltiples,\
  Penalizaci�n por respuestas incorrectas en los ejercicios de opciones m�ltiples.,\
  Mostrar la respuesta correcta.,\
  Permitir las pistas (cuando existan).

!set name_aleaseries= Propose the exercises of the series in order.
!set name_remarkintro1=After having selected an exercise from the list,\
click on <span class="wims_button disabled">$wims_name_work</span>. Los ejercicios se tomar�n aleatoriamente de la lista generada \
por sus opciones. Si su elecci�n est� vac�a, se utilizar�n todos los ejercicios disponibles.

!!leave on one line
!set name_remarkintro3=Puede poner dos n�meros en el campo del l�mite de tiempo, un n�mero seguido de otro m�s grande. En este caso, el primer l�mite se�ala el momento de comenzar la reducci�n de la calificaci�n, hasta llegar a 0 cuando se alcance el segundo l�mite.


!endif
