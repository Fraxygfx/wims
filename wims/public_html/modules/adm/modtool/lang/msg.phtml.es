!set wims_module_log=error: $error

<b>Error</b>.

!if bad_auth iswordof $error
 Fracaso de autenticaci�n. Vuelve a intentar.
 !exit
!endif

!if bad_pass iswordof $error
 Mala contrase�a: debe tener entre 4 y 16 caracteres,
 cartas y cifras solamente. �Y la contrase�a repetida debe ser id�ntica
 primero! Intente a�n.
 !exit
!endif

!if empty_data iswordof $error
 Quiere cumplir la definici�n de
 <b><em><font color=red>$(name_$empty_data)</font></em></b>
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

