#! /bin/sh

mail -s "[WIMS] Contrase�a clase virtual" $w_user_email <<@

$w_class_supervisor,

Es usted profesor de una clase virtual en WIMS, $w_class_description
de $w_class_institution, en $HTTP_HOST.

Por medio del siguiente mensaje, confirmamos una modificaci�n de su contrase�a
de profesor para esta clase virtual, solicitada por una conexi�n desde
$REMOTE_ADDR.

Si no fuera usted quien ha realizado esta modificaci�n, alguien habr�a
robado su contrase�a y probablemente no podr� volver a conectarse a su clase
a causa de este cambio de contrase�a. En tal caso por favor p�ngase en contacto
con el administrador del sitio para que vuelva a cambiar su contrase�a.

@

