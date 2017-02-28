!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!distribute lines M�todo guiado\
  M�todo bruto\
  M�todo fichero\
  modelos preparados\
  Enviar el fichero\
  Fichero fuente de su ejercicio\
  Volver al men� inicial\
  Continuar al contenido del ejercicio\
  Modificar un ejercicio existente de la clase\
   Volver a la etapa precedente\
  Enviar el c�digo fuente\
  Vaciar\
  Demostraci�n\
  Adaptar\
  Probar el ejercicio\
  Corregir el error\
  Volver a\
  La realizaci�n de su ejercicio ser� como sigue.\
  Ah� tienes los modelos de ejercicios disponibles. Elija uno.\
 M�dulo que contiene temporalmente su ejercicio\
into wims_name_normalmode, wims_name_rawmode,wims_name_filemode,\
  name_model,name_sendfile,name_source,name_menuback,name_continue,name_modify,\
  name_prevstep,name_sendsource,name_clean,name_demo,wims_name_adapt,name_testexo,\
  name_correction,name_backmodule,name_realisation,name_availablemodels,name_temp_module

!set name_normal=!lowercase $wims_name_normalmode
!set name_raw=!lowercase $wims_name_rawmode
!set name_file=!lowercase $wims_name_filemode

!set name_modefile1=Est� en modo fichero para la creaci�n de ejercicios.\
  Bajo este modo puede enviar un fichero fuente OEF local al servidor.\
 Para crear un ejercicio desde cero preferir� el
 !set name_modefile2=Para corregir en l�nea, pueden tambi�n utilizar el

!distribute line Ejercicios b�sicos\
Ejercicios con una lista de datos\
Chemistry exercises\
Games\
Exercises with images or audio\
Select items\
Different kinds of questions\
Fill in the gaps\
Put in order\
Classify\
into name_first,name_datalist,name_chemistry,name_game,name_imaudio,\
name_select,name_question,name_gapfill,name_order,name_classify

!set name_save=!nosubst  Aqu� est� el c�digo fuente de su ejercicio\
 <span class="wims_warning">$oef_title</span>, en formato OEF (Open Exercice Format).\
 Para guardarlo, corte el texto situado entre las dos l�neas horizontales, y \
 p�guelo en un archivo.

!distribute lines N�mero de par�metros\
  N�mero de respuestas\
  Tambi�n puede enviar un fichero de imagen\
  O modificar el fichero fuente y despu�s\
  a�adir este ejercicio a su clase, bien\
  para sustituir al antiguo\
  para hacer de �l uno nuevo\
  reenviarlo\
  Ponerlo en el m�dulo de desarrollo\
  hacer una copia \
  de seguridad del c�digo fuente !\
into name_parameter_cnt,name_answer_cnt,name_deposit,name_modify,name_putinclass,\
name_replace,name_new,name_sendagain,name_developer,name_savesource,name_download

!set name_success=El software ha reconocido su ejercicio como v�lido

!if $level=1
!distribute lines Dele un t�tulo al ejercicio que quiere crear\
  Formato del enunciado del problema\
  Este ejercicio pedir�\
  respuestas libres y \
  respuestas de opciones m�ltiples\
  Las respuestas num�ricas no calculadas (como <span class="tt">3*5-sin(pi/3)</span>) ser�n\
  aceptadas,rechazadas\
  condiciones especiales para corregir las respuestas libres\
into name_givetitle,name_giveformat,name_exo,name_answer1,name_answer2,\
name_nonnumeric,name_prompt,name_condition
!endif

!if $level=2
 !set types=!sort nocase lines \
auto,default\
expresi�n literal,litexp\
expresi�n algebraica,algexp\
expresi�n formal,formal\
texto aproximado,atext\
texto convertido en min�sculas,nocase\
texto exacto,case\
texto bruto,raw\
ecuaci�n,equation\
conjunto finito,set\
matriz,matrix\
n�mero,numeric\
n�mero con zona,range\
n�mero con unidad,units\
funci�n num�rica,function\
vector,vector\
palabras en una lista,wlist

!distribute lines Ahora, por favor, introduce el contenido de tu ejercicio \
 Puedes definir los par�metros aleatorios aqu�\
 La explicaci�n del ejercicio \
 Respuestas libres\
 Soluci�n correcta\
 Precisi�n requerida para respuestas numericas\
 Las funciones (numericas) ser�n comparadas en el intervalo\
 Condiciones para el an�lisis de respuestas (num�ricas)\
 Nombre de la condici�n\
 Definici�n de la condici�n\
 Elecciones \
 Elecciones correctas\
 Elecciones incorrectas\
 Puedes dar opcionalemente una nota y/o soluci�n\
 Indicaci�n\
 Soluci�n\
into name_content,name_alea,name_statement,name_free,name_goodsol,name_precision,name_function,\
 name_condition_numeric,name_name_condition,name_definition,name_multiple,name_goodchoice,name_badchoice,\
 name_option,name_indication,name_solution

!endif

!if $level=4
  !set name_update1=!nosubst L'exercice <span class="tt">$existing.oef</span> a �t� mis � jour avec succ�s dans le module
  !set name_update2=Echec de mise a jour de l'exercice <span class="tt">$existing</span> dans le module
  !set name_update3=Su ejercicio se ha instalado con �xito.
   !set name_update4= Hemos encontrado un ejercicio id�ntico en su clase. Se ignoran los registros   dobles.\
  !set name_update5=Este ejercicio ser� accesible �nicamente a los participantes de su clase, \
    y solamente si lo pone en una hoja de trabajo.
  !distribute lines Ahora puede\
    Consultar los ejercicios de clase\
    y eventualmente a�adirlos a las hojas de trabajo\
 into name_youcan, name_consult,name_sheet
!endif

!if $level=7
 name_warning_empty=Veuillez choisir le nom du fichier source.
 name_choice_module=S�lectionner un module
 name_choice_filename=Nom du fichier source de l'exercice (n'utiliser que des symboles alphanum�riques)
 name_register_dev=Save the exercise source file in the modtool account
!endif

!distribute lines Est�n en m�todo bruto de creaci�n de ejercicios. \
  Puesto que este ejercicio se basa en un modelo normal, intentelo \
  Entre la fuente en totalidad \
  para registrar un fichero fuente que existe, copian el fichero en la ventana.\
 Ah� tienes la fuente de un ejercicio existente de su clase. \
  Pueden modificarlo en la ventana siguiente. \
  Ah� tienes la fuente de un ejercicio p�blico que quieren importar. Pueden modificarlo en la ventana siguiente antes de ponerlo en la clase. \
Pueden probar algunos programas externos con el \
probador de escritura \
 into name_brut,name_try,name_allsource,name_copy,name_source2,name_modify_window,name_public,name_test_extern,name_testerscript

!exit
:delete
El ejercicio <em>$deltitle</em> se ha eliminado de la lista de ejercicios de la
clase.

En el caso en que haya sido un error y desee repararlo, aqu� tiene
el c�digo fuente del ejercicio, que puede guardar como medida de seguridad,
y copiarlo posteriormente en

!exit
:model
<b>Note</b>. Estos modelos tienen por objeto permitir a los m�s apremiados construir
r�pidamente sus ejercicios. Tienen pues a menudo una estructura simplificada
y estandarizada, y no ofrecen la plena potencia de la sintaxis OEF.
Pero pueden siempre poner los ejercicios en m�todo bruto para a�adir m�s
funcionalidades o modificarlos seg�n su gusto.
!exit

:register
Su ejercicio se ha registrado con �xito en este servidor. Le agradecemos
sinceramente su contribuci�n, en nombre de todos aquellos que se
beneficiar�n de �l.
<p>
El administrador de este sitio verificar� su ejercicio, y decidir� si ponerlo
o no en una categor�a apropiada. Esto podr�a tardar alg�n tiempo.
</p>
!exit
