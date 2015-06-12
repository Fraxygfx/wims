#! /bin/sh

wims_home=`pwd`;
wims_dirtest="$wims_home/wimstest/dirtest";

test="add2 add2p add3
sign doublesign
mul div divp muldiv muldivp
exp ind num num2 sci
matrix matrix2
stars names names2 sums
relations relationempty relationempty2 relationempty3
mixed1 mixed2 mixed3 mixed4 mixed5
par stupid warn1ok warn1
parent
an"

for a in $test; do
  $wims_home/src/wims test $wims_dirtest texmath $a
done;

exit

%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%        Remarks           %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Parentheses : some useless parentheses are removed, not all (multiple parentheses are "halved").

Matrices : matrix of size 1 is not treated as a matrix (see par)

Maxima constants : not interpreted, hence some results may be false (names2 gives atan(1)=1/4) if void constant is replaced by 1.

Spaces : the number 1 is often treated differently than other ; this
difference makes a difference in the space characters for instance
between 1+x and 2+x


Braces : as writen in techdoc, the expression should be a
"machine-understandable mathematical expression". In particular if
braces appear, no treatment is done (see warn1)

Stars : double star is power ; a sole star in exponent remains as is.
