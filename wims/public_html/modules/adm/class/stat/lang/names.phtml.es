!set lang_exists=yes

!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>
 
!set months=en,feb,mar,abr,may,jun,jul,ag,sept,oct,nov,dic

!distribute items Examen, Hoja\
	into name_E, name_S

!set name_title=Estad�sticas de actividad
!distribute items Totales,puntos<br>requeridos,peso,�ndice de<br>dificultad,\
media/puntos,media/participante,desviaci�n<br>est�ndar,duraci�n,puntuaci�n,\
duraci�n te�rica,Suma,m�n.,m�n,m�x,new,points\
into name_totals,name_required_points,name_coeff,name_index,\
name_avg_score,name_avg_participant,name_deviation,name_duration,name_score,\
name_theoric,name_sum,name_minute,name_min,name_max,name_new,name_points

!distribute line Estad�sticas que mostrar\
Tipo de datos\
actividades registradas, actividades no registradas, todas las actividades\
Contar las actividades de las clases<br>que comparten hojas con usted\
into name_showstat,name_data,name_typ_activities,name_shareclass

!set name_prompt=puntos requeridos, peso,\
	�ndice de dificultad, totales,\
	medias por puntuaci�n, medias por participante,\
	m�nimo y m�ximo, desviaci�n est�ndar