#! /bin/sh

wims_home=`pwd`;

export wims_exec_parm="3 22 10"

$wims_home/src/Misc/cyclicode $wims_exec_parm
echo "\n"
exit

\text{test=3 22 10}
\text{cyclicode=wims(exec cyclicode \test)}
