!set lang_exists=yes

!set name_intro=!nosubst Quieren que sea accesible en su clase \
el recurso p�blico <span class="tt wims_fname">$dir</span> o modificar su t�tulo, su texto descriptivo\
o su estatuto

!set name_wksheet=Link the document with the sheet (optional)

!if $doc>0
 !set name_intro=$name_intro o suprimir el v�nculo sobre este recurso en su clase
!endif
