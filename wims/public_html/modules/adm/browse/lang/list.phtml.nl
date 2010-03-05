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

name_code=programmeer theorie
list_code=code, cryptologie, Hamming afstand, fout correctie codes,\
	fouten signalering, entropie

name_absalg=abstracte algebra
list_absalg=groepen, ringen, velden

name_linalg=lineaire algebra
list_linalg=matrices, determinant, lineaire systemen, vectoren, vector ruimte,\
	lineaire velden

name_prealg=pre-algebra
list_prealg=breuken, decimalen, percentages, vergelijkingen, proportionaliteit

name_elemalg=elementaire algebra
list_elemalg=vergelijkingen, polynomen, wortels, complexe getallen,\
	ontleden

name_algebra=algebra

name_precalc=pre-calculus
list_precalc=ongelijkheden, functies, wortels, vergelijkingen, trigoniometrie,\
	reeele getallen, intervallen, limieten

name_calc=rekenen
list_calc=afgeleide, integraal, primitieve, eindige integralen ,\
	continuiteit, differentieerbaarheid, rijen, reeksen,\
	Taylor expansie, Taylor reeksontwikkeling, Fourier reeksen,\
	Laplase transformaties, Fourier transformaties, limieten,\
	ODE, differentiaal vergelijkingen

name_analysis=analyse

name_arith=rekenkunde
list_arith=integers, modulaire rekenkunde, ggd kgd,ontbinden,\
	Bezout algoritme, congruentie, priemgetallen, euclidisch algoritme,\
	Diophantische vergelijkingen, Goldbach

name_number=getallen
list_number=complexe getalen, rationale getallen, re&euml;ele getallen,\
	getallen stelsels

name_proba=waarschijnlijkheidsleer
list_proba=verdelingen, entropie

name_stat=statistiek
list_stat=statistische data, gemiddelde, afwijking, regressie

name_probstat=waarschijlijkheids rekening

name_affgeom=affiene geometrie
list_affgeom=lines, vlakken, hypervlakken

name_euclgeom=euclidische geometrie
list_euclgeom=lijnen, cirkel, vierkanten, polygonen,\
	hoeken, driehoeken, passer en lineaal

name_anageom=analytische geometrie
list_anageom=oppervlakken, kurves, parametrische kurves, polaire kurves,\
	kegelsneden, parabolen, hyperbolen, ellipsen, cirkels, Lissajous figuren

name_geom=geometrie
list_geom=grafieken, trigonometrie

name_combi=combinatoriek
list_combi=factorisaties, combinaties, permutaties

name_logic=logica
list_logic=sets, maps

name_misc=diversen

name_bio=Biologie
tot_dom_bio=biology
dom_biology=biology
name_biology=biologie
list_biology=botanics,histology,immunology,medecine,mycology,phylogenetics

list_tmp=!replace internal , by ,name_ in name_ $list_biology
list_tmp=!nospace $list_tmp

!!!### names
!distribute items botanique,histologie,immunologie,médecine,mycologie,phylogénétique\
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
!distribute items langues,Ecoute,Grammaire,Langue technique,Phonétique\
into $list_tmp

!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp
!distribute items language,listening,grammaire,technical,phonétique\
into $list_tmp

!!!###

tot_dom_phys=physics
name_physics=physique
name_phys=Physique


!!!### keywords
list_tmp=!replace internal name_ by keywords_ in $list_tmp

!!!###