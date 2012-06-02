!set lang_exists=yes

!set name_0=in bewerking
!set name_1=open
!set name_2=gesloten
!set name_3=onzichtbaar
!set name_publish=publiceren
!set name_publish2=publiceren
!set name_hide=verbergen
!set name_hide2=verborgen
!set name_nominative=op naam gesteld [niet anoniem]
!set name_anonymous=anoniem
!set name_trace=anoniem en traceerbaar
!set name_choice=Keuze
!set name_question=Question
!set name_data=gegevens
!set name_global=globaal
!set name_detail=gedetailleerd
!set name_yourchoice=Uw keuze&nbsp;:
!set title_data=Gegevens vragenlijsten voor spreadsheet
!set title_nominative=Enquete
!set title_vote=Enquete
!set title_anonymous=Anonieme enquete
!set name_choose= -- Kies --
!set wims_name_vote=Enquete of verkiezingslijsten
!set name_result=Resultaat van de enquete&nbsp;
!set name_content=Inhoud
!set name_creation=Maken van een enquete of verkiezing.
!set name_edition=Bewerken van een enquete of verkiezing.
!set name_remaining=rest
!set name_untitled=geen titel
!set name_showresult=laat resultaat zien
!set name_nowritable=Een actieve enquete kan niet worden veranderd. Hier is de broncode:
!set name_novotant=Geen stem uitgebracht
!set name_notenough=Nog niet genoeg stemmen uitgebracht
!set name_showlist=Resultaten per vraag
!set name_showglobal=Globale resutaten
!set name_showlistbystudent=Resultaten per deelnemer
!set name_showstudentbyitem=Lijst met keuzes

!distribute lines  Jouw klas heeft geen voorziening voor een verkiezing of enquete.\
Neem hierover contact op met je docent.\
Er is geen actieve verkiezing of enquete in je klas.\
Hier zijn de verkiezingen/enquetes van jouw klas.\
Aantal stemmen\
into name_novote,name_novotecheck,name_noactivevote,name_class_vote,\
name_cnt_votes

!distribute line Dit is een anonieme verkiezing/enquete.\
Deze enquete is $name_trace.\
Deze enquete is $name_nominative.\
Is gesloten.\
reacties\
Je hebt al gestemd.\
Je voorkeur staat genoteerd; maar je kunt je nog bedenken\
Maak je keuze&nbsp;\
Details\
Opmerkingen\
Gebruik het forum voor uitgebreider commentaar.\
into name_thisvote_anomymous,name_thisvote_trace,name_thisvote_nominatif,\
   name_thisvote_closed,name_thisvote_answer,name_thisvote_already1,\
   name_thisvote_already2,name_give_your_choice,name_details,\
   name_comments,name_textarea

!set name_textarea_limit=!nosubst limited to $limit_textarea characters
!set name_whovote=Lijst met stemmers

!set name_csv1=Hier is het bestand. Het kan geopend worden met een spreadsheet\
 programma naar keuze.

!set name_csv2=!nosubst U wilt de gegevens downloaden uit de vragenlijst nummer $vote&nbsp;
!set name_format=formaat

!set name_option=Options
!set name_value=Waarden

!! guided mode

!set wims_name_guided=Begeleidde mode
!set name_optionclosed=(gesloten, wordt geopend als alle andere opties zijn ingevuld)

!distribute lines Met dit formulier kan op individueel niveau de toegang tot werkbladen en toetsen worden geregeld\
Individuele toegang tot werkbladen en toetsen\
Hoeveel sessies ?\
maximaal\
uservar naam\
Default host IP (kan worden veranderd op de volgende pagina)\
Introductie tekst (dwz introductie tekst voor de student)\
Selecteerd datum en tijd van de\
beschikbare toets sessions\
aantal<br>studenten\
Datum van<br>sessie\
Begin tijd<br>van sessie\
Eind tijd<br>sessie\
Host IP\
Extra info\
Afmelding inschrijving\
into name_introguided name_guidedtitle name_howmany name_atmost name_nameexvar \
name_textconnip name_introtext \
name_numsess_pre name_numsess_post \
name_numstud name_examdate name_begintime name_endtime name_connip name_extra \
name_cancellation

!set name_numsess=!nosubst $numsess toets sessies zijn beschikbaar.

!set name_describesource=!nosubst Hier staat de brontekst.Controleer de gegevens en klik op <span class="wims_button disabled">$wims_name_tosave</span>.

!set name_examinstr=!nosubst <strong>Toets instellingen</strong>: voor actieve werbladen en proefwerken,(<em>Score registratie</em>) selecteer <em>open voor IP adressen en tijden</em> en voer <code>\$nameexvar</code> in  (inclusief <code>\</code>).

!set name_noguided=Een actieve instelling kan niet worden veranderd, tenzij deze aangemaakt is in de <em>begeleidde mode</em>.

!set name_gotoguided=Om de instellingen te wijzigen ga naar&nbsp;
!set name_gotoguided_warning=Het veranderen van instellingen voor een indiviuele toestafname via dit formulier kan leiden tot incompatibileit met de gegevens uit de <em>begeleidde mode</em>.
