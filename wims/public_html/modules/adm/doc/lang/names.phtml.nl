!set lang_exists=yes
!if $wims_read_parm=$empty
 !exit
!endif

!goto $wims_read_parm

:file

<p>Aanwezige bestanden in dit document:
 !for f in $flist
  !getfile doc/$f $f
  &nbsp;
 !next f
 <p>
 !form reply
 <input type="hidden" name="job2" value="erase"/>
 Verwijder een bestand&nbsp;:
 !formselect job2 list $flist
 <input type="submit" value="$wims_name_erase"/>
 </form>
 <p>
 Bestanden kunnen worden opgeroepen in een document door de variabele
 <tt class="wims_code_variable">\filedir</tt>. 
 Bijvoorbeeld,
<p><center>
 <tt class="wims_address">&lt;a href="\filedir/$f1"&gt;$f1&lt;/a&gt;</tt>
</center> <p>
 geeft de link naar het bestand <a href="$m_filedir/$f1">$f1</a>.
 Er kan ook worden geschreven:
<p><center>
 <tt class="wims_address">&lt;img src="\filedir/myfile.jpg" alt="myfile"&gt;</tt>
</center> <p>
om het plaatje <tt class="wims_fname">myfile.jpg</tt> te verwerken in de pagina.
 <p>
Bestanden opgenomen in dit document zijn alleen beschikbaar voor mensen met "leesrechten" voor dit document

<p>

Een nieuw commando <tt class="wims_code_words">\href{}{}</tt> is ge&iuml;ntroduceerd. 
Om een link naar een bestand aan te maken, is de onderstaande syntax afdoende:
<center>
<tt class="wims_code_words">\href{$f1}</tt> of <tt class="wims_code_words">\href{$f1}{lien}</tt>.
</center>
!exit

:readauth
Als schrijver van dit document moet u  toestemming aan de
 !mailurl $wims_site_manager systeem beheerder 

 van deze server vragen om dit document $doc openbaar te maken.
!exit

:erase1
 Alleen sitemanagers kunnen publieke documenten verwijderen.
 <p>
 Vraag
 !mailurl $wims_site_manager de sitemanager
 dit document te verwijderen.
!exit

:erase2
<span class="wims_warning">WAARSCHUWING !!</span> Er is hier geen "undelete", 
dus weg is weg&nbsp;!
<p>
Weet u zeker dat het document<tt class="wims_fname">$tit</tt>&nbsp; moet worden verwijderd ?
!exit

:public
 <b>Opmerking</b>. U moet wel toestemming vragen aan de 
 !mailurl $wims_site_manager systeembeheerder/sitemanager\
 om dit WIMS 
 document $doc publiek te maken.
!exit
