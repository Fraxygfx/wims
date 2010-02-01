!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set name_site=the site
!set name_stem=a page under the address
!set name_uniq=the page
!set names_site=sites
!set names_stem=site directories
!set names_uniq=pages

!distribute items day(s),week(s),month(s),year(s)\
  into name_day,name_week,name_month,name_year
   
!distribute lines site name\
  base directory\
  complete address\
  The links can be listed by \
  of the web page, and the list is limited to the first\
  addresses. Search engine addresses can be\
  included or\
  excluded in the list\
 Optionally, you may restrict the list to sites/pages containing a word\
 into name_site1,name_stem,name_uniq,name_listlink,name_limited,name_searchengine,\
 name_included,name_excluded,name_option

!set name_list1=!nosubst List of web $(names_$type) bringing visitors to us, within the period of

!set name_sum=!nosubst sum over $laps days

!set name_list2=The first column gives the number of our visitors who followed\
a link in $(name_$type) on the second column.

!set name_visit1=people have visited us through links in these $totall
!set name_visit2=!nosubst At least $auto other visitors didn't specify public referring pages.\
  Referring pages within $httpd_HTTP_HOST are not counted.
 
 !set title=Backward link list
 
!set name_warning=The referer accounting is not active on this site. No backward link list\
 is available. Sorry.
   
 
!set name_choose=P�riode d'activit� : depuis

:exit
:intro
In general, a web page who brings many visitors to us is also an interesting 
place for our other visitors. Therefore if you are
looking for web resources related to this server, a list of such pages is
what you need.
<p>
On the other hand, if you are the author of a page containing link(s) to us,
this list allows you to measure the efficiency of your link. It
is also our manner to thank you for the link.
<p>
Our backward link list is dynamically generated, according to the parameters
which you can choose in the following menu.