!set lang_exists=yes

!distribute items d�a(s),semana(s),mes(es),a�o(s),Peticiones de p�gina,Sesiones,Sitios,\
  N�mero,total,media<br>diaria,media<br>por semana,media<br>por mes,media<br>por a�o,\
  media<br>por sitio,Media<br>semanal,Tipo de gr�fica,al d�a,el comienzo\
into name_day,name_week,name_month,name_year,name_Requests,name_Sessions,name_Visitors,\
   name_cnt,name_total,name_avgday,name_avgweek,name_avgmonth,name_avgyear,\
   name_avgsite,name_avghebdo,name_plot,name_byday,name_beginning

!set name_requests=!lowercase $name_Requests
!set name_sessions=!lowercase $name_Sessions
!set name_visitors=!lowercase $name_Visitors

!distribute lines Elija un per�odo para las estad�sticas: a partir de \
  Mostrar tambi�n los detalles por m�dulos.\
  Mostrar las estad�sticas\
  Detalles por m�dulos\
  N�mero de visitas desde\
  el\
  al\
  Fecha de<br>instalaci�n\
  Sous-total\
into name_choose,name_details,name_showstat,wims_name_statdetail,name_number_visits,name_from,\
  name_to,name_installed,name_subtotal
!set title=Estad�sticas de visitas
!set name_sum=!nosubst en total $laps d�as

!set name_prompt= peticiones<br>totales,peticiones<br>por sitio,sitios<br>totales
!set name_explanations=<ul>\
<li>El n�mero de peticiones contabiliza �nicamente peticiones de p�ginas.\
 Las solicitudes de m�dulos en desarrollo no se han contabilizado.</li>\
<li>El n�mero de sitios visitantes cuenta una visita por d�a.</li>\
<li>El n�mero de visitantes aparece entre el n�mero de sitios y el\
    n�mero de sesiones.</li>\
</ul>
!set name_warning=El seguimiento de visitas no est� activado en este sitio. No hay estad�sticas disponibles. Lo sentimos. <p>
 
 
!set name_numberclass=!nosubst  Hay $classcnt portales y clases individuales en este servidor, con\
  $usercnt cuentas de usuario en total.
  

!set format1=%d%m
!set format2=%d%m
!set format3=%m%y