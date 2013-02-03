!if $special_parm!=$empty
 !goto $special_parm
!endif
:filter 
Als er technische variabelen bekend zijn van een groep deelnemers, kan hierop worden geselecteerd (gefilterd).
Deze variabelen kunnen worden verkregen via
<ul><li>
de link naar het spreadsheet
</li><li>
 de deelnemer accounts
</li><li>
een niet anonieme enquete
</li></ul>
(Zie de hiervoor passende documentatie).
Bij dit filteren op technische variabelen gelden de volgende spelregels:
aan alle filtereisen op 1 regel moet worden voldaan.<br />
Bij meerdere regels moet aan tenminste 1 regel worden voldaan.
<p>Een voorbeeld de filter regels</p>
<pre>
groep=1 
groep=3
</pre>
selecteerd alle deelnemers die in groep 1 of groep 3 zitten.

:general
De filter regels kunnen gelijktijdig worden gebruikt met het selecteren van loginnamen.
De email wordt verstuurd naar geselecteerde deelnemers.
Het filter wordt dan toegepast op deze lijst deelnemers.
Wordt er geen gebruik gemaakt van loginnamen,
 dan wordt de lijst met loginnamen uit de klas gebruikt.
