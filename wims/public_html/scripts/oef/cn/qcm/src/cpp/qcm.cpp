target=serial ordered shuffle stepserial stepordered stepshuffle

#include "xiao.inc"

\text{datafile=slib(oef/env datafile)}
\integer{datacnt=wims(recordcnt \datafile)}
\text{shuff=shuffle(\datacnt)}
#include "confparm.inc"

#if #TARGET (serial)
\title{����������}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=all}
#endif

#if #TARGET (ordered)
\title{ԭʼ�����µ��������}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=all}
#endif

#if #TARGET (shuffle)
\title{������ŵ�����}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=all}
#endif

#if #TARGET (stepserial)
\title{һ����һ������}
\integer{start=randint(0..\datacnt-\questions)}
\text{records=wims(values x+\start for x=1 to \questions)}
\text{steptype=step}
#endif

#if #TARGET (stepordered)
\title{��ԭʼ����һ����һ��}
\text{shuff=shuffle(\datacnt)}
\text{records=wims(sort numeric items \shuff[1..\questions])}
\text{steptype=step}
#endif

#if #TARGET (stepshuffle)
\title{���ŵ�һ����һ��}
\text{shuff=shuffle(\datacnt)}
\text{records=\shuff[1..\questions]}
\text{steptype=step}
#endif

\text{choicename=ѡ��}

#include "proc.inc"
