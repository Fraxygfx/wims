!set wims_module_log=error: $error

<span class="wims_warning">$wims_name_Error</span>.

!if empty_data iswordof $error
 Quiere cumplir la definici�n de
 <span class="wims_warning">$(name_$empty_data)</span>
 de su m�dulo.
 !exit
!endif

!if bad_fname iswordof $error
 Nombre de fichero ilegal. Quiere elegir otro nombre para su fichero.
 !exit
!endif

!if binary_file iswordof $error
 Fichero binario prohibido.
 !exit
!endif

!if illegal_filedesc iswordof $error
 No pueden poner sino definiciones directas en filedesc.
 !exit
!endif

!if badoriginal iswordof $error
 Este m�dulo no puede copiarse.
 !exit
!endif

!if clash iswordof $error
 El m�dulo de destino ya existe.
 !exit
!endif

!if badtarget iswordof $error
 La direcci�n de destino no es buena: demasiado larga, demasiado corta,
 incompleta o caracteres no admitidos.
 !exit
!endif

!if symlink iswordof $error
 Imposible de copiar el m�dulo fuente, ya que contiene v�nculos simb�licos.
 !exit
!endif

!msg $error
