!distribute items $wims_read_parm into r_,date_ 
!goto $r_
:1
!formselect jday from 1 to 31
!formselect jmonth from 1 to 12 prompt $months
!formselect jyear from $creyear to $expyear
!exit

:2
!formselect dday$i from 1 to 31
!formselect dmonth$i from 1 to 12 prompt $months
!formselect dyear$i from $creyear to $expyear
!exit

:21
!formselect bday$i from 1 to 31
!formselect bmonth$i from 1 to 12 prompt $months
!formselect byear$i from $creyear to $expyear
!exit

:3
!formselect jday list 0,$v prompt ---,$v
!formselect jmonth from 1 to 12 prompt $months
!formselect jyear from $creyear to $expyear
!exit

:4
!formselect jday2 list 0,$v prompt ---,$v
!formselect jmonth2 from 0 to 12 prompt ---,$months
!formselect jyear2 list 0,$v1 prompt ---,$v1
!exit

:5
!let day=!char 7 to 8 of $date_
!let month=!char 5 to 6 of $date_
!let year=!char 1 to 4 of $date_
!if $cdt_nbmonth>12  
 $day/$month/$year
!else 
 $day/$month
!endif
!exit

:6
!formselect bhour$i list 08,09,10,11,12,13,14,15,16,17,18,19,20
!formselect bmin$i list 00,05,10,15,20,25,30,35,40,45,50,55
!exit

:7
!formselect ehour$i list 08,09,10,11,12,13,14,15,16,17,18,19,20
!formselect emin$i list 00,05,10,15,20,25,30,35,40,45,50,55
!exit