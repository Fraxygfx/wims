

!if $special_parm!=$empty
 !changeto lang/help.$moduclass_lang/$special_parm.phtml
!endif

!read adm/title.phtml 3\
\
De moeilijkheidsgraad van Werkbladen
<p>
De WIMS server berekend een tweetal gemiddelden voor het werk dat leerlingen doen per werkblad
Een percentage van het behaalde aantal punten met betrekking tot het totaal aantal benodigde punten 
en een gemiddelde van alle cijfers behaald voor opgaven in een werkblad
Laten we <em><b>x</b></em> het percentage zijn en <em><b>y</b></em>  de gemiddelde score (beiden dus tussen 0 en 1)
dan is dit de berekening van het "echte" cijfer:

</p>
$table_header 
$table_hdtr<th>Moeilijkheidsgraad</th><th>Formule</th><th>Verklaring</th></tr>
$table_tr<td align="center">0</td><td align="center">$scoremax max(x,y)
 </td><td>Heel soepel: het maximum van percentage en kwaliteit.</td></tr>
$table_tr<td align="center">1</td><td align="center">$scoremax x
 </td><td>Geen rekening houden met het gemiddelde cijfer.
 Als alle werk is afgerond wordt de maximale score getoond.</td></tr>
$table_tr<td align="center">2</td><td align="center">$scoremax x y<sup>0.3</sup>
 </td><td> Het gemiddelde van alle scores heeft een klein effect op het cijfer.</td></tr>
$table_tr<td align="center">3</td><td align="center">$scoremax x y<sup>0.5</sup>
 </td><td> Meer effect van de gemiddelde score.</td></tr>
$table_tr<td align="center">4</td><td align="center">$scoremax x y
 </td><td>
 Om een cijfer $scoremax te behalen moeten alle vereiste punten worden behaalt (100%)
 en geen enkele fout (gemiddelde = 10).</td></tr>
$table_tr<td align="center">5</td><td align="center">$scoremax x<sup>2</sup> y
 </td><td>Onafgerond werk wordt extra zwaar bestraft.</td></tr>
$table_tr<td align="center">6</td><td align="center">$scoremax x<sup>2</sup> y<sup>2</sup>
 </td><td>Elke fout wordt extra zwaar bestraft.</td></tr>
$table_end

Remark : For level 0 and 1, if the quality of points is less than 1 for an 
exercise, the percentage of points obtained
become 0% for this exercise when x is computed ; if the quality of points is betwwen 1 and 2, 
the percentage of points obtained for this exercise is divided by 2
when x is computed.


