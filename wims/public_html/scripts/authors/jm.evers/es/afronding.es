!if $afrondingsfactor=
    !exit
!endif    
###afronding
!if $afrondingsfactor=0
	AFRONDING=Espero una <b>soluci�n matem�ticamente correcta</b>\
	<br><font size=-2>(por ejemplo sqrt(2) y <b>no</b> 1.414)</font>
    !exit
!endif 
!if $afrondingsfactor=1000000
	AFRONDING=Puede dar una respuesta no exacta<br>\
	En tal caso, calcule de la forma m�s exacta que pueda con su calculadora<br>\
	<font size=-2>redondee su respuesta <b>final</b> a <b>por lo menos dos decimales</b>.</font>
    !exit
!endif 
!if $afrondingsfactor=10000
	AFRONDING=Puede dar una respuesta no exacta<br>\
	<font size=-2>En tal caso, redondee su respuesta a <b>por lo menos cuatro</b> decimales.</font>
    !exit
!endif 
!if $afrondingsfactor=1000
	AFRONDING=Puede dar una respuesta no exacta<br>\
	<font size=-2>En tal caso, redondee su respuesta a <b>por lo menos tres</b> decimales.</font>
    !exit
!endif 
!if $afrondingsfactor=100
	AFRONDING=Puede dar una respuesta no exacta<br>\
	<font size=-2>En tal caso, redondee su respuesta a <b>por lo menos dos</b> decimales.</font>
    !exit
!endif 
!if $afrondingsfactor=10
	AFRONDING=Puede dar una respuesta no exacta<br>\
	<font size=-2>En tal caso, redondee su respuesta a <b>por lo menos un</b> decimal.</font>
    !exit
!endif 
!if $afrondingsfactor=1
	AFRONDING=Puede dar una respuesta no exacta<br>\
	<font size=-2>En tal caso, redondee su respuesta al <b>entero m�s pr�ximo</b>.</font> 
    !exit
!endif 
   