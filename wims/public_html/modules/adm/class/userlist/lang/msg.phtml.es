!set wims_module_log=error: $error

<b>$wims_name_Error</b>.

!if not_supervisor=$error
 Lo sentimos pero la operaci�n de preparaci�n /modificaci�n de una hoja
 de trabajo est� reservada a los profesores registrados de la clase.
 !exit
!endif

!if not_superclass=$error
 Operaci�n prohibida porque usted participa en una agrupaci�n de clases.
 �nicamente el administrador de la agrupaci�n puede realizarla.
 !exit
!endif

!if bad_classpass=$error
 Lo sentimos pero no ha introducido la contrase�a correcta de la clase.
 No est� autorizado a cambiar la informaci�n sobre los participantes.
 !exit
!endif

!if no_login iswordof $error
 Los datos que ha enviado deben tener obligatoriamente una columna
 correspondiente a los identificadores de usuario de los participantes.
 !exit
!endif

!if bad_filename iswordof $error
 Su fichero no parece ser un fichero de hoja de c�lculo en formato de texto.
 :csvformat
 Por favor guarde los datos en formato de texto (con los valores separados
 or comas o tabuladores y las extensiones .csv, .tsv o .txt), antes de
 enviarlo a la clase.
 !exit
!endif

!if binary_upload iswordof $error
 �Sus datos de hoja de c�lculo est�n en formato binario! Este formato no 
 est� reconocido, lo sentimos.
 <p>
 !goto csvformat
!endif

!if no_manual iswordof $error
 Por favor primero
 !href module=adm/class/grades cree una columna de notas manuales
 antes de enviar datos en ella.
 !exit
!endif

!if not_secure iswordof $error
 S�lo se aceptan el env�o y recepci�n de datos procentes de hojas de c�lculo en
 conexiones desde estaciones de trabajo seguras. Por favor compruebe la
 configuraci�n de su clase.
 !exit
!endif

!if bad_user=$error
 Error de llamada: el participante <tt class="wims_login">$checkuser</tt> no existe.
 !exit
!endif

!if bad_exo=$error
 El art�culo que se quiere verificar no existe.
 !exit
!endif

!if bad_op=$error
 Operaci�n incorrecta. Cierre la ventana.
 !exit
!endif

!msg $error

