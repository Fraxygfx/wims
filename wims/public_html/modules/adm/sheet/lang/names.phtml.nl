!set lang_exists=yes

!read adm/lang/sheetexam.phtml.$modu_lang
!set name_from=van
!set name_student1=!nosubst Er mag aan dit werkblad gewerkt worden tot $expday $expmon $expyear
!set name_student2=Dit werkblad is verlopen. Er kan nog wel aan\
 worden gewerkt, maar de behaalde cijfers worden niet meer geregistreerd.
!set name_student3= Dit werkblad mag op dit moment nog niet worden ingezien.\
Neem desgewenst contact op met je docent.
!set name_student5=De score registratie is uitgezet door je docent.\
Maar je kunt natuurlijk wel oefenen met het werkblad.

!set name_score=!nosubst $[$got] uit $[$require] punten behaald, kwaliteit
!set name_score2=!nosubst ($[$require] punten vereist).

!set name_scoreopen=De cijferregistratie is open.
!set name_scoreclosesup=De cijferregistratie kan niet worden opgechort.

!set name_textsource=Hier staat de broncode van het werkblad. U kunt deze via \
knippen en plakken in uw eigen klas importeren.
!set name_answer=Antwoord op oefening

!set name_title=!nosubst $wims_name_sheet $wims_name_number$sh
!set name_exo=!defof name_exo in wimshome/public_html/scripts/oef/$modu_lang/names
!set name_noprint=!defof name_noprint in oef/$modu_lang/names
!set name_answers=!defof name_answers in oef/$modu_lang/names

!distribute items leerniveau,tijdsduur \
into name_level,name_duration

!set name_skillbullet=Competenties voor deze periode
