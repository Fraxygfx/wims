!set lang_exists=yes
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:file
<p>Ficheros disponibles en este documento:
 !for f in $flist
  !getfile doc/$f $f
  &nbsp;
 !next f
 </p>
 !form reply
 <input type="hidden" name="job2" value="erase"/>
 Borrar un fichero:
 !formselect job2 list $flist
 <input type="submit" value="$wims_name_erase"/>
 </form>
 <p>
 Se puede acceder a los ficheros del documento usando la 
variable <tt class="wims_code_variable">\filedir</tt> en el documento. Por ejemplo
</p><p class="wimscenter">
 <tt class="wims_address">&lt;a href="\filedir/$f1"&gt;$f1&lt;/a&gt;</tt>
</p><p>
 proporciona un enlace al fichero <a href="$m_filedir/$f1">$f1</a>.
 Tambi�n puede escribir
</p><p class="wimscenter">
 <tt class="wims_address">&lt;img src="\filedir/myfile.jpg" alt="myfile"&gt;</tt>
</p><p>
para incluir un fichero de imagen <tt class="wims_fname">myfile.jpg</tt> en la p�gina.
 Los ficheros incorporados en el documento s�lo ser�n accesibles
 a quienes est�n autorizados a leer el documento.
</p>
Une nouvelle commande <tt class="wims_code_words">\href{}{}</tt> est en test. 
Pour obtenir un lien sur le fichier, il suffit alors d'�crire
<p class="wimscenter">
<tt class="wims_code_words">\href{$f1}</tt> ou <tt class="wims_code_words">\href{$f1}{lien}</tt>.
</p>
!exit

:readauth
Si es usted el autor del documento, recuerde por favor que necesita
 la autorizaci�n del
 !mailurl $wims_site_manager administrador del sitio\
Solicitud de apertura del documento WIMS $doc
 para hacer que el p�blico pueda leer el documento.
 
!exit

:public

<b>Nota</b>. Necesita la aprobaci�n del
 !mailurl $wims_site_manager administrador del sitio\
Ask to open WIMS document $doc
 para permitir que el p�blico pueda acceder al documento.
 
!exit

:erase1

 Por razones de seguridad s�lo los administradores del sitio pueden
 borrar documentos p�blicos.
 <p>
 Puede 
 !mailurl $wims_site_manager [wims] Pedir al administrador del sitio
 que borre este documento por usted.
!exit

:erase2
<span class="wims_warning">ATENCI�N!!</span> 
�Una vez borrados los documentos no se pueden recuperar!
<p>
�Est� seguro de que quiere borrar el documento <tt class="wims_fname">$tit</tt>?

!exit


