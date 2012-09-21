# subject list
Tot_dom=bio,chim,Lang,math,phys

name_math=Mathematics
tot_dom_math=number,algebra,analysis,geom,probstat,misc
dom_algebra=prealg,elemalg,linalg,absalg,code
dom_analysis=precalc,calc
dom_geom=euclgeom,anageom,affgeom
dom_number=prealg,arith
dom_probstat=proba,stat
dom_misc=combi,logic

name_code=teor�a de la encriptaci�n
list_code=encriptaci�n, criptolog�a, distancia de Hamming, c�digo corrector de errores,\
	detecci�n de errores, entrop�a

name_absalg=�lgebra abstracta
list_absalg=grupos, anillos, cuerpos

name_linalg=�lgebra lineal
list_linalg=matrices, determinante, sistemas lineales, vectores, espacios vectoriales,\
	alicaciones lineales

name_prealg=pre-�lgebra
list_prealg=fracciones, decimales, porcentajes, ecuaciones, proporcionalidad

name_elemalg=�lgebra elemental
list_elemalg=ecuaciones, polinomios, ra�ces, n�meros complejos,\
	factorizaci�n

name_algebra=�lgebra

name_precalc=pre-c�lculo
list_precalc=desigualdades, funciones, ra�ces, ecuaciones, trigonometr�a,\
	n�meros reales, intervalos, l�mites

name_calc=c�lculo
list_calc=derivadas, integrales, primitivas, integrales definidas,\
	continuidad, derivabilidad, secuencias, series,\
	expansi�n de Taylor, series de Taylor, series de Fourier,\
	transformaciones de  Laplace, transformaciones de Fourier, l�mites,\
	EDO, ecuaciones diferenciales

name_analysis=an�lisis

name_arith=aritm�tica
list_arith=enteros, aritm�tica modular, pgcd ppcm, factorizaci�n,\
	relaci�n de Bezout, congruencia, n�meros primos, divisi�n euclidea,\
	ecuaciones diofantinas, Goldbach

name_number=n�meros
list_number=n�meros complejos, fracci�n continua, n�meros reales,\
	sistemas de numeraci�n

name_proba=probabilidad
list_proba=distribuciones, entrop�a

name_stat=estad�stica
list_stat=datos estad�sticos, medias, desviaci�n, regresi�n

name_probstat=probabilidad-estad�stica

name_affgeom=geometr�a af�n
list_affgeom=l�neas, planos, hiperplanos

name_euclgeom=geometr�a eucl�dea
list_euclgeom=l�neas, c�rculos, rect�ngulos, pol�gonos,\
	�ngulos, tri�ngulos, regla y comp�s

name_anageom=geometr�a anal�tica
list_anageom=superficies, curvas, curvas param�tricas, curvas polares,\
	c�nicas, par�bola, hip�rbole, elipse, c�rculo, Lissajous

name_geom=geometr�a
list_geom=grafo, trigonometr�a

name_combi=combinatoria
list_combi=factorial, combinaci�n, permutaci�n

name_logic=l�gica
list_logic=conjuntos, aplicaciones

name_misc=miscel�nea

name_bio=Biologie
tot_dom_bio=biology
dom_biology=biology
name_biology=biologie
list_biology=botanics,histology,immunology,medecine,mycology,phylogenetics

list_tmp=!replace internal , by ,name_ in name_ $list_biology
list_tmp=!nospace $list_tmp

!!!### names
!distribute items botanique,histologie,immunologie,m�decine,mycologie,phylog�n�tique\
into $list_tmp

!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp

!!!###

name_chim=Chimie
tot_dom_chim=chemistry
dom_chemistry=chemistry
name_chemistry=chimie
list_chemistry=thermodynamics,organics_chemistry

list_tmp=!replace internal , by ,name_ in name_ $list_chemistry
list_tmp=!nospace $list_tmp

!!!### names
!distribute items Thermodynamique,Chimie organique\
into $list_tmp

!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp
!distribute items thermo,organics\
into $list_tmp
!!!###


tot_dom_Lang=Lang
name_language=langues
dom_language=language
list_Lang=Lang,listening,grammar,technical,phonetics
list_tmp=!replace internal , by ,name_ in name_ $list_Lang
list_tmp=!nospace $list_tmp
!!!### names
!distribute items langues,Ecoute,Grammaire,Langue technique,Phon�tique\
into $list_tmp

!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp
!distribute items language,listening,grammaire,technical,phon�tique\
into $list_tmp

!!!###

tot_dom_phys=physics
name_physics=physique
name_phys=Physique


!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp

!!!###