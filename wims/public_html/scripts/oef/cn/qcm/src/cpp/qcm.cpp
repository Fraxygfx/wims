target=serial ordered shuffle stepserial stepordered stepshuffle

#include "xiao.inc"

\text{datafile=slib(oef/env datafile)}
\integer{datacnt=wims(recordcnt \datafile)}
\text{shuff=shuffle(\datacnt)}
#include "confparm.inc"

#if defined TARGET_serial
\title{连续的问题}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=all}
#endif

#if defined TARGET_ordered
\title{原始次序下的随机问题}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=all}
#endif

#if defined TARGET_shuffle
\title{随机乱排的问题}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=all}
#endif

#if defined TARGET_stepserial
\title{一个接一个持续}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=step}
#endif

#if defined TARGET_stepordered
\title{按原始次序一个接一个}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=step}
#endif

#if defined TARGET_stepshuffle
\title{乱排的一个接一个}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=step}
#endif

\text{choicename=选择}

#include "proc.inc"
