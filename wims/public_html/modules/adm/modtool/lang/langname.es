
l_en=English
l_fr=French
l_es=Spanish
l_it=Italian
l_cn=Simplified Chinese
l_tw=Traditional Chinese (big5)
l_de=German
l_nl=Dutch
l_si=Slovenian
l_ca=Catalan
l_pt=Portugais

langname=
!for l in $langlist
 !if $(l_$l)!=$empty
  l=$(l_$l)
 !endif
 langname=!append item $l to $langname
!next l
