!set lang_exists=yes

!set name_noexercise=Er zijn geen oefeningen om te registreren.
!set name_listexercise=!nosubst Oefeningen van werkblad $logsheet kunnen worden geregistreerd
!set name_noexercise2=Er zijn geen geregistreerde oefeningen door
!set name_click= !nosubst Hier zijn de geregistreerde oefeningen van $(names[1]) $(names[2]).\
Klik op de datum om ze te bekijken.

!distribute items Stap,Nummer \
into name_Step,name_number

!set name_source=source
!set name_sendmail=Bug?
!set name_bug=Als je denkt dat er een foutje in deze oefening zit, stuur dan een email \
<span class="wims_button disabled">$name_sendmail</span> en voeg dit bestand \
<span class="wims_button disabled">$name_source</span> toe.
