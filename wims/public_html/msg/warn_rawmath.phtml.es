
!set wims_warn_header=<p><span class="wims_warning">$wims_name_warning.</span>

!if ambiguous iswordof $wims_warn_rawmath
 $wims_warn_header
 Ha introducido una f�rmula ambigua, cuya interpretaci�n 
 por WIMS puede diferir de lo que quiere decir. Por favor,
 compruebe la f�rmula.
 <p>
 !set wims_warn_rmremark=yes
!endif

!if unknown iswordof $wims_warn_rawmath
 $wims_warn_header
 WIMS ha detectado un nombre de funci�n o variable no reconocible 
 <font color="red"><b><tt>$wims_warn_rawmath_parm</tt></b></font>
 en su f�rmula. �Un error de escritura?
 <p>
 !set wims_warn_rmremark=yes
!endif

!if flatpower iswordof $wims_warn_rawmath
 <p><span class="wims_warning">Anotaci�n.</span>
 Si quiere introducir <font color="green">x<sup>2</sup></font>? Escriba
 <tt>x^2</tt> o <tt>x**2</tt>.
 <p>
!endif

!if badprec iswordof $wims_warn_rawmath
 $wims_warn_header
 �``<tt>x^1/2</tt>'' significa <font color="green">x/2</font>! Por favor, escriba
 ``<tt>x^(1/2)</tt>'' para <font color="green">x<sup>1/2</sup></font>.
 <p>
!endif

!if unmatched_parentheses iswordof $wims_warn_rawmath
 $wims_warn_header
 hemos detectado par�ntesis no balanceados en su f�rmula. Por favor,
 verif�quelo.
 <p>
!endif

!if $wims_warn_rmremark=yes
 Use siempre ``<tt>*</tt>'' para la multiplicaci�n, y
 encierre siempre los argumentos de las funciones entre
 par�ntesis.
 <small>Para expertos. Si no quiere que WIMS interprete su expresi�n, 
  comi�ncela con la cadena ``<tt>1-1+</tt>''.</small>
 <p>
!endif

