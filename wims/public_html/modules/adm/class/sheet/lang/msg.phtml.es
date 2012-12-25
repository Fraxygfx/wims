!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero la operaci�n de preparaci�n / modificaci�n de una hoja
 de trabajo est� reservada a los profesores registrados de la clase.
 !exit
!endif

!if bad_source=$error
 El elemento n�mero $bad_source del fichero fuente que acaba de enviar no es v�lido.
 !href cmd=reply&job=prep_putsource&source=$source Corrija los fuentes
 .
 !exit
!endif

!if bad_sheet=$error
 Su n�mero de hoja de trabajo no es v�lida. �Error del software?
 !exit
!endif

!if no_title=$error
 Ha intentado grabar una hoja de trabajo sin t�tulo, lo cual no est�
 permitido. �Error de manipulaci�n?
 !exit
!endif

!if $error=not_secure
 Esta operaci�n s�lo puede ser realizada desde una estaci�n de trabajo segura.
 !if $sec=$empty
  No ha definido estaciones de trabajo seguras. Acceso prohibido. Puede
  solicitar al administrador del sitio que lo haga por usted.
 !else
  Acceso prohibido.
 !endif
 !exit
!endif

!if $error=sharing_sheet
 <span class="wims_warning">���Peligro!!!</span>.
 �Sus hojas est�n siendo compartidas por otras clases!
 !if $wims_ismanager<2
  Deber� pedir al administrador del sitio que desactive la hoja
  por usted.
  !exit
 !endif
 Se arriesga a poner las clases vecinas en un desorden total si desactiva
 esta hoja. Por consiguiente esta operaci�n est� <b>fuertemente desaconsejada</b>.
 <p>
 �De verdad quiere desactivar la hoja?
  <div class="wimscenter">
 !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
.&nbsp;&nbsp;
 !href cmd=resume $wims_name_no; $wims_name_giveup
. </div>
 <b>�Antes de continuar, pida al menos a los profesores de las clases vecinas que
 hagan copias de seguridad de sus clases!</b> Cuando los problemas aparezcan, aunque sea
 despu�s de varios meses, estar� obligado a volver al estado ANTERIOR a la
 desactivaci�n, y perder� todo lo ocurrido DESPU�S, �y esto para todas las clases
 que comparten la hoja! Esperamos haberle avisado suficientemente.
 !exit
!endif

!if $error=sheet_in_exam
 Imposible desactivar esta hoja, porque tiene ex�menes 
 basados en su contenido.
 !exit
!endif

!if $error=non_empty_activities
 �Quiere desactivar la hoja $sheet cuando los participantes ya han empezado
 a trabajar en ella!

 !if share iswordof $confirmed
  Adem�s la hoja la comparten otras clases, que pueden estar trabajando en ella 
  y tener puntuaciones tambi�n. Por tanto est� prohibido desactivarla.
  !exit
 !endif
 Todas las puntuaciones obtenidas en el trabajo en esta hoja quedar�n borradas
 si la desactiva. �Est� usted seguro de querer hacerlo?
  <div class="wimscenter">
 !href cmd=reply&job=deactivate&confirm=yes $wims_name_yes; $(wims_name_actionlist[3])
.&nbsp;&nbsp;
 !href cmd=resume $wims_name_no; $wims_name_giveup
. </div>
 Lista de cuentas que ya han trabajado en esta hoja:
 <p>
 <span class="tt">$worktest</span>
 </p>
 <b>Nota</b>. Esta acci�n no debe realizarse salvo si se trata de una clase de 
 pruebas. �No siga adelante si los participantes son sus verdaderos alumnos!
 !exit
!endif

!if prep_activate=$error
 Ha solicitado activar la hoja de trabajo $sheet, es decir, hacerla 
 accesible a los participantes de la clase. <p>
 Por favor tenga en cuenta que, una vez activada una hoja de trabajo, no 
 puede ser modificada sin previamente desactivarla, y la desactivaci�n de 
 la hoja conlleva la p�rdida de las puntuaciones que se han conseguido en 
 el trabajo en la misma, si dicha desactivaci�n no est� prohibida 
 por la situaci�n.
 <p>
 �Desea continuar?
 </p>
  <div class="wimscenter">
 !href cmd=reply&job=activate $wims_name_yes; $(wims_name_actionlist[1])
 .&nbsp;&nbsp;
 !href cmd=resume $wims_name_no; $wims_name_giveup
 . </div>
 !exit
!endif

!if prep_erase=$error
 �Realmente quiere borrar la hoja de trabajo #$sheet ($title)?
  <div class="wimscenter">
 !href cmd=reply&job=erase $wims_name_yes; $wims_name_erase
.&nbsp;&nbsp;
 !href cmd=resume $wims_name_no ; $wims_name_giveup
.</div>
 !exit
!endif

!if prep_expire=$error
 Esta hoja n�mero $sheet ($title) expira normalmente el $expday
 !item $expmon of $months
 $expyear. �Quiere hacerla expirar ahora?
  <div class="wimscenter">
 !href cmd=reply&job=expire $wims_name_yes ; $(wims_name_actionlist[2])
 .&nbsp;&nbsp;
 !href cmd=resume $wims_name_no ; $wims_name_giveup
 . </div><b>Nota.</b> Sus estudiantes no pueden continuar trabajando en una hoja
 que ha expirado. Pero las puntuaciones anteriores se conservar�n (y se tomar�n en 
 cuenta en las estad�sticas), y puede seguir consult�ndolas.
 !exit
!endif

!if prep_putsource=$error
 Si tiene el fichero fuente de una hoja de trabajo guardada anteriormente, puede
 insertarlo directamente en la hoja actual, copiando estos 
 fuentes en la ventana siguiente, y pulsando despu�s el bot�n 
 <span class="wims_button disabled">$wims_name_send</span>Enviar</span>.
 Tambi�n puede utilizar este formulario para insertar los fuentes de una
 hoja p�blica por el proceso de copiar y pegar.
 
 !set wims_menu_items=!append line sheetadmin,1,cmd=resume \
to $wims_menu_items

 !form reply
 <input type="hidden" name="job" value="putsource" /><p class="wimscenter">
 <textarea cols="55" rows="10" name="source">$source</textarea></p>
 <p class="wimscenter"><input type="submit" value="$wims_name_send" />
 </p>
!formend
 <span class="wims_warning">Atenci�n</span>. �No inserte un fichero fuente modificado! Se arriesga a
 inutilizar su hoja de trabajo.
 !exit
!endif

!if prep_modify=$error
 !set cnt=!recordcnt wimshome/log/classes/$wims_class/sheets/.sheet$sheet
 !if $modif>$cnt or $modif<1
  Has enviado una solicitud no v�lida. Ignorada.
 !else
  !set exo=!record $modif of wimshome/log/classes/$wims_class/sheets/.sheet$sheet
  !changeto exomodify.phtml $exo
 !endif
 !exit
!endif

!if $error=toolate
 $name_expiration1 ($l_date). $name_expiration2

<p>
!href cmd=resume $wims_name_back2
 ($wims_name_sheetmanagement)
</p>
 !exit
!endif
!msg $error
