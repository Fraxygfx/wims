!set wims_module_log=error: $error

<b>Error</b>.

!if bad_auth iswordof $error
 Authentification failed. Please try again.
 !exit
!endif

!if bad_pass iswordof $error
 Bad password: it must contain only letters and digits, between
 4 and 16 characters. And the repeat password should be equal to the
 first one! Try again.
 !exit
!endif

!if empty_data iswordof $error
 Please fill in the definition of
 <b><em><font color=red>$(name_$empty_data)</font></em></b>
 of your module.
 !exit
!endif

!if bad_fname iswordof $error
 Illegal file name. Please choose another name for your file.
 !exit
!endif

!if binary_file iswordof $error
 Binary file is not allowed here.
 !exit
!endif

!if illegal_filedesc iswordof $error
 You cannot put anything else than straightforward definitions in filedesc.
 !exit
!endif

!if badoriginal iswordof $error
 This module cannot be copied.
 !exit
!endif

!if clash iswordof $error
 Target module already exists.
 !exit
!endif

!if badtarget iswordof $error
 Target module address is bad: too long, too short, incomplete, or illegal
 characters.
 !exit
!endif

!if symlink iswordof $error
 The source module cannot be copied because it contains symbolic links.
 !exit
!endif

!msg $error

