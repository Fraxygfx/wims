!set lang_exists=yes

!set name_duplicateok=Examen dupliqu� correctement.
!set name_title=Aanmaken van een proefwerk
!set name_mainpage=Hoofdpagina van het proefwerk

!if $activetest<=0
 !set name_title=!nosubst Aanmaken van het proefwerk
!else
 !set name_title=!nosubst Beheer van het proefwerk
!endif

!read adm/lang/date.phtml.$lang
!read adm/lang/sheetexam.phtml.$lang
!set wims_name_scoreexam=!nosubst $wims_name_myscore

!set name_Options=Opties
!set name_All=Alles

!set name_done=klaar

!set name_instructions=Instructies

!distribute lines Be&euml;indig deze proefwerksessie\
Terug naar het proefwerk\
Zo zien docenten dit proefwerk\
Zo zien studenten dit proefwerk\
Details van de score\
Dit proefwerk is leeg&nbsp;! Dit zal een foutje zijn van de docent.\
Inhoudsopgave van dit proefwerk&nbsp;\
Dit proefwerk is niet bereikbaar voor computers met uw IP adres.\
U mag dit proefwerk nog &eacute;&eacute;n keer maken.\
Dus het cijfer voor dit proefwerk kan niet meer worden verbeterd.\
Opgelet : dit is de laatste proefwerk poging.\
het aftellen begint en het aantal beschikbare proefwerk pogingen wordt met 1 verminderd.\
begin het aftellen .\
Vereist een goed cijfer bij de vorige opgaven\
Cijfer voor deze proefwerk sessie&nbsp;\
into wims_name_endexam,wims_name_backexam,wims_name_teacherview,name_presentation,\
name_scoreexam,name_empty,name_content,name_examclosed,name_exam1,name_exam5,\
name_lasttry,name_exam7,name_exam8,name_depend,name_scoreexam2

!set name_exam2=!nosubst Er zijn in't totaal $stries proefwerk pogingen beschikbaar.

!set name_exam3=!nosubst Deze proefwerk sessie is be&euml;indigd met $tried pogingen,
!set name_exam4=!nosubst Dit was proefwerk poging <strong>nummer $tried</strong> ,
!set name_exam6=!nosubst En er zijn nu nog <strong>$tryremain</strong> poging(en) beschikbaar.

!set name_exam9=!nosubst Dit proefwerk mag maximaal <strong>$sdure min.</strong> in beslag nemen.\
Wanneer een opgave wordt aangeklikt,
 
!set name_simulation=Dit proefwerk verloopt in simulatie mode. Het werkt precies zo als het echte proefwerk, \
alleen worden nu de cijfers -en andere data- natuurlijk niet opgeslagen.

!set wims_name_examremain=Resterende tijd voor dit proefwerk : $

!distribute lines bezig...\
U bent nog niet begonnen met dit proefwerk.\
Start dit proefwerk.\
De score wordt niet geregistreerd, omdat dit proefwerk in simulatie mode loopt.\
into name_pending,name_begin1,name_begin2,name_simulation2

!set name_timeleft=!nosubst De beschikbare tijd is verlopen! Je hebt de toegestane $sdure minuten verbruikt.
!set name_realscore=!nosubst De echte score voor deze proefwerk-sessie is $lastscore.
!set name_bestscore=!nosubst De score voor dit proefwerk is $lastscore. (En de beste score telt !)


!! ---------------------------
!! nouvelle partie 

!set statutname=$(wims_name_shstatus[1]),$wims_name_shstatus

!set name_desc_duration=in minuten
!let name_mkexam=Proefwerk aanmaken

!let name_shinfo_cutt=Openingstijden

!! diff�rents commentaires de la page de gestion
!distribute lines Algemene informatie&nbsp;\
Inhoudsopgave van dit proefwerk&nbsp;\
Dit proefwerk is leeg.\
into name_info,name_content,name_warning

!! titre du tableau de contenu de l'examen (file examcontent.phtml)
!let name_extab=!nosubst No,$wims_name_title,Inhoud,$name_weight,$name_dependency,$wims_name_comment,$name_Options,$wims_name_action

!set name_contenu=Kies de inhoud
!let name_cpsheet1=U kunt alle oefeningen van werkblad toevoegen aan het proefwerk. \
Elke oefening krijgt gewicht 1 en \
de titel van de oorspronkelijke oefening. \
Of geef hier generieke titel aan

!let name_cpsheet3=Generieke titel voor een oefening
!let name_cpsheet4=De oefeningen zijn genummerd

!set name_warning_nonfinished=Je hebt nog niet alle opgaven uit dit proefwerk gemaakt. Wanneer je \
er nu mee stopt, wordt je cijfer bevroren en ben je dus een volle proefwerk poging kwijt. \
Bij een eventuele volgende poging om dit proefwerk te maken, moet je wel weer alle  \
random (!) sommen opnieuw doen... <br />Weet je zeker dat je er mee wilt stoppen?

!! better to shorten this sentence to e.g. "copy an active exam"
!set wims_name_cpexam=Kopieer een geactiveerd proefwerk.

!set name_cpexam1=U gaat de inhoud van een ander proefwerk kopieren in dit proefwerk.\
De inhoud van dit proefwerk kan nog worden veranderd.

