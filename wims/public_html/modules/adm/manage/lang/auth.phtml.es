
<center>
!form reply
Por favor introduzca la contrase�a de administrador del sitio:<p>
<input size="24" type="password" name="auth">
<input type="submit" value="$wims_name_tosave">
</form></center>

!if $passone!=$empty
 Al no haber definido una contrase�a de administrador el servidor ha generado
 una contrase�a de un solo uso para esta sesi�n. Podr� encontrarla en el fichero
 <tt>$wims_home/$oncename</tt> en la cuenta del servidor WIMS. 
 Por favor lea el fichero y teclee su contenido en el campo anterior.
 <p>
 Si desea definir una contrase�a permanente (lo que es c�modo pero menos
 seguro que las contrase�as de un solo uso) puede guardarla en un fichero de
 nombre <tt>$wims_home/log/.wimspass</tt>. 
 �Pero <b>DEBE</b> hacer que s�lo usted pueda leer ese fichero!
!else
 Ha definido una contrase�a permanente de administrador del sitio. Por favor
 recuerde que tambi�n puede utilizar contrase�as de un solo uso, que son m�s 
 seguras.
 <p>
 Para cambiar a contrase�as de un solo uso no tiene m�s que borrar el fichero
 <tt>$wims_home/log/.wimspass</tt> de la cuenta del servidor WIMS.
!endif

<p>
En cualquier caso por favor tenga MUCH�SIMO cuidado cuando maneje la
contrase�a de administrador del sitio. �Una intrusi�n como administrador del
sitio puede poner en peligro TODOS los datos de su servidor!

