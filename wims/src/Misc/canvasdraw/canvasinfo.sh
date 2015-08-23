#!/bin/sh
# do not run compile time !
# just to generate simple canvasdraw usage html-page 


in=canvasdraw.c
out=canvasdraw.html
tmp=canvas_index
keys=keywords
datum=`date +%d-%m-%Y` 
echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN\" \"http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd\"> 
<html>
<head><meta charset=\"UTF-8\"></head>
<body xmlns=\"http://www.w3.org/1999/xhtml\" class=\"main_body\" dir=\"ltr\">
<style type='text/css'>
 a:link {color:#004077;text-decoration:none;cursor:pointer;}
 a:hover {color:#dd6300;}
 a:visited {color:#004077;}
</style>
<input type='text' size='10' value='' id='search' /><input type='button' onclick='javascript:look();' value='search' />
<center><h3>Implemented canvasdraw commands ($datum)</h3></center>
<table style='color:blue;font-size:0.8em;'><tr>
" > $out
        
p=0
echo "<ul>" > $tmp
cnt=0
br=5
while read line ; do
    chk=`echo $line | grep "@"`
    if [ ! -z "$chk" ] ; then
    echo $line
	if [ $p -eq 0 ]; then
	    string=`echo $line | tr '@' ' '`
	    idx=`echo $string | awk '{ print $1 }'`
	    echo ",'$idx'" >> $keys
	    if [ $cnt -gt $br ]; then
	     echo "</tr><tr>" >> $out
	     cnt=0
	    fi
	    cnt=$(($cnt+1))
	    echo "<td><a name='$idx top' href='#$idx'>$idx</a></td>" >> $out
	    echo "<li><a name='$idx' href='#$idx top'>$string</a><ul>"  >> $tmp
	    p=1
	else
	    p=2
	    echo $line | sed 's/@/<li><span style="color:blue;font-size:0.8em">/g'  >> $tmp
	    echo  "</span></li>" >> $tmp
	fi
    else
	if [ $p -eq 2 ]; then
	    echo  "</ul>
	    " >> $tmp
	fi
	p=0
    fi
done < $in
while [ $cnt -le $br ] ; do
 cnt=$(($cnt+1))
 echo "<td>&nbsp;</td>" >> $out
done
echo "</tr></table>" >> $out
cat $tmp >> $out
keywords=`cat $keys | tr -d '\n'`
echo "
</li>
</ul>
<script type='text/javascript'>
 var keys = ['canvasdraw' $keywords];
 var keys_len = keys.length;
 function match(s1,s2){
  var n1 = s1.length;
  if(n1 < 2){return 0;}
  var n2 = s2.length;
  var c1,c2,found;
  var count = n1 - Math.abs(n1 - n2);
  for(var p = 0;p < n1;p++){
   c1=s1.charAt(p);
   found = false;
   for(var i = 0;i < n2;i++){
    c2 = s2.charAt(i);
    if(c1 == c2){found = true;count = count + n1 - Math.abs(p - i);}
   };
   if(! found ){count = count - n2;}
  };
  return count;
 };
 function look(){
  var s = ((document.getElementById('search').value).replace(/\s/g, '')).toLowerCase();
  var typo;var next_best = -1;var next_idx = s.length;var tmp;var ss;
  for(var p = 0; p < keys_len ; p++){
   ss = keys[p];
   if( s == ss ){
    window.location.href = '#'+ss;
    return;
   };
   /* not ok? ... try to find a match for a reasonable typo... */
   tmp = match(s,ss);
   if(tmp > next_idx){
    next_idx = tmp;
    next_best = p;
   };
  };
  if(next_best != -1 ){
   typo = keys[next_best];
   if(confirm('\"'+s+'\" is not a valid canvasdraw command\ndid you mean \"'+typo+'\" ?')){
    window.location.href = '#'+typo;
    return;
   };
  }
  else
  {
   alert(s+' is not a valid canvasdraw command');
  };
  return;
 };
</script>
</body>
</html>" >> $out
rm $tmp
rm $keys

