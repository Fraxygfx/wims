
!set wims_module_error=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if bad_sheet iswordof $error
 Nombre de hoja de trabajo inv�lido.
 !exit
!endif

!if too_many_print iswordof $error
 Ha pedido demasiadas versiones impresas.
 !href cmd=reply&job=read $wims_name_back2
 !exit
!endif

