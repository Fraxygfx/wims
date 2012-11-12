/*

*********************************************************************************
* J.M. Evers 3/2012								*
* This is all amateur scriblings... So no copyrights.				*
* This source code file, and compiled objects derived from it,			*
* can be used and distributed without restriction, including for commercial use	*
* No warrenty whatsoever							*
*********************************************************************************

12/11/2012
Added support for numbers like  12345*10^12 
12345*10^12 --> 12345E12 ---> 1.2345*10^16

18/10/2012 : 
Added Mathml output 
Added option significance=-1 
To be used when there is no significance known ; just tries to print the number in science notation
Using the original amount of digits used in "number" argument
!exec scienceprint 123.445000e+23,-1 --> 1.23445000*10^25

*********************************************************************************

WIMS usage:
sci_num = !exec scienceprint number,significance,type

number: a number
significance : desired precision
type (optional args): calc = 0 / html = 1 / latex = 2  / prefix = 3  / mathml = 4

default  : calc   notation : 120000,3   -> 1.20*10^5
type = 0 : calc   notation : 120000,3,0 -> 1.20*10^5
type = 1 : html notation   : 120000,3,1 -> 1.20&times;10<sup>5</sup>
type = 2 : latex notation  : 120000,3,2 -> 1.20 \times 10^{5}
type = 3 : prefix-notation : 120000,3,3 -> 120.0 k
type = 3 : if -24 > prefix > 24  	-> type = 1 (html)
type = 4 : mathml notation 

multiple conversion: use space between arguments
scienceprint 120000,4 122900,5 120036,6,3 --> 120.0*10^3,122.90*10^3,120.036 k

24  yotta 	Y 
21  zetta 	Z 
18  exa 	E 
15  peta	P 
12  tera 	T
9   giga 	G
6   mega 	M
3   kilo 	k 
2   hecto	h
1   deca 	da
-1  deci 	d 
-2  centi 	c 
-3  milli 	m
-6  micro 	�
-9  nano 	n
-12 pico 	p
-15 femto 	f
-18 atto 	a
-21 zepto 	z
-24 yocto 	y

*/

#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
#define MICRO "�"
#define PREFIX_START (-24)
#define PREFIX_END 24
#define MAX_CONV 256
#define MAX_STRING 32

char *str_replace ( const char *word, const char *sub_word, const  char *rep_word ){
    if(strlen(word) > MAX_STRING){return NULL;}
    char *part_word = NULL;
    char *new_word = NULL;
    char *old_word = NULL;
    char *head = NULL;
    /* if either sub_word or rep_word is NULL, duplicate word a let caller handle it */
    if ( sub_word == NULL || rep_word == NULL ) return strdup(word);
    new_word = strdup (word);
    head = new_word;
    while ( (part_word = strstr ( head, sub_word ))){
	old_word = new_word;
        new_word = malloc ( strlen ( old_word ) - strlen ( sub_word ) + strlen ( rep_word ) + 1 );
        /*failed to alloc mem, free old word and return NULL */
        if ( new_word == NULL ){
          free (old_word);return NULL;
        }
        memcpy ( new_word, old_word, part_word - old_word );
        memcpy ( new_word + (part_word - old_word), rep_word, strlen ( rep_word ) );
        memcpy ( new_word + (part_word - old_word) + strlen( rep_word ), part_word + strlen ( sub_word ), strlen ( old_word ) - strlen ( sub_word ) - ( part_word - old_word ) );
        memset ( new_word + strlen ( old_word ) - strlen ( sub_word ) + strlen ( rep_word ) , 0, 1 );
        /* move back head right after the last replacement */
        head = new_word + (part_word - old_word) + strlen( rep_word );
        free (old_word);
    }
    return new_word;
}

char *printscience(double value, int sig, int format , int cnt ,int size){
    static char *prefix[] = { "y", "z", "a", "f", "p", "n", MICRO, "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" };
    double display, fract;
    char *sign = NULL;
    int exponent10;
    if( sig == -1 ){
     /* no significance truncations...just science notation 1234 -> 1.234*10^3  ; try (!) to use same amount of digits*/
	sig = size;
	if(format == 3){format = 1;} /* no prefix --> html noation */
	if(value < 0.0) {sign = "-";value = -value;sig--;} else {sign = "";}
	exponent10=0;
	if(value>=1){
	    while(value > 10){
		value=value / 10.0;
		exponent10++;
		/* need to set a limit to number of while loops ! */
		if(exponent10 > 100){fprintf(stdout,"error : number too big (exponent > 100)\n");return 0;}
	    }
	}
	else /* 0 < value < 1 --> exponent10 < 0 */
	{
	    while(value < 1){
		value=value*10;
		exponent10--;
		/* need to set a limit to number of while loops ! */
		if(exponent10 <-100){fprintf(stdout,"error : number too small (exponent < -100)\n");return 0;}
	    }
	}
    }
    else
    {
	if(value < 0.0) {sign = "-";value = -value;} else {sign = "";}
	exponent10 = lrint( floor( log10(value) ) );/* correctly round to desired precision */
	value *= pow(10.0, sig - 1 - exponent10);
	fract = modf(value, &display);
	if(fract >= 0.5){display += 1.0;}
	value = display * pow(10.0, exponent10 - sig + 1);
	if(exponent10 > 0){exponent10 = (exponent10/3)*3;}else{exponent10 = ((-exponent10+3)/3)*(-3);}
	value *= pow(10.0, -exponent10);
	if(format != 3){ /* allow all powers; not limited by prefix list */
	    if(value > 10.0){
		while(value >= 10){
		    value = value / 10.0;
	    	    exponent10++;
		    /* need to set a limit to number of while loops ! */
		    if(exponent10 > 100){fprintf(stdout,"error : number too big (exponent > 100)\n");return 0;}
		}
	    }
	}
	else /* steps of powers dividable by 3 used for prefix notation */
	{
	    if (value >= 1000.0) {
		value = value / 1000.0;
		exponent10 = exponent10 + 3;
	    }
	    else
	    {
		if(value >= 100.0){
		    sig =  sig - 2;
		}
		else
		{
		    if(value >= 10.0){
			sig = sig - 1;
		    }
		}
	    }
	}
    }
    if(cnt > 1){fprintf(stdout,",");}
    /* check on format style versus exponent */
    if(exponent10 == 0 ){
	format = 3; /* do not use 1.23*10^0 */
    }
    else
    {
	if(exponent10 == 1){
	    format = 3;/* do not use 1.23*10^1 */
	    value = value * 10;
	    sig = sig - 1;
	}
	else
	{
	    if(format == 3 && ((exponent10 < PREFIX_START) || (exponent10 > PREFIX_END))){ 
		format = 1; /* if no prefix available, revert to html presentation */
	    }
	}
    
    }
    if(sig < 1){sig = 1;}
    if(format != 3 ){
	if( format == 0){ /* 'calculable' presentation */
	    fprintf(stdout, "%s%.*f*10^%d", sign, sig-1, value, exponent10);
	}
	else
	{
	    if( format == 1 ){ /* html presentation */
		fprintf(stdout, "%s%.*f&times;10<sup>%d</sup>", sign, sig-1, value, exponent10);
	    }
	    else 
	    {
		if(format == 2 ){/* latex presentation */
		    fprintf(stdout, "%s%.*f \\times 10^{%d}", sign, sig-1, value, exponent10);
		}
		else
		{ /* mathml presentation */
		    fprintf(stdout,"<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mstyle id=\"wims_mathml\" mathsize=\"110%%\"><mn>%s%.*f</mn><mo>&times;</mo><msup><mn>10</mn><mn>%d</mn></msup></mstyle></math>", sign, sig-1, value, exponent10);
		}
	    }
	}
    }
    else /* format = 3 : prefix presentation or other more suitable presentation */
    {
	fprintf(stdout, "%s%.*f %s", sign, sig-1, value,prefix[(exponent10-PREFIX_START)/3]);
    }
    return NULL;
}
  
int main( int argc , char *argv[]){

    if( argc < 2){
	fprintf(stdout,"syntax error : number1,significance1,type1 number2,significance2,type2 ... number_n,significance_n,type_n \n");
	return 0;
    }

    double number = 0;
    int significance = 0,type = 0,idx = 0,cnt = 1,size = 0;
    char *input = "\0",*ptr = "\0";

    /* test for illegal characters */
    const char *invalid_characters = "\n\"\'!=ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz@#$%&()[]{};:~><?/\\|";
    /* Ee +- are allowed : 12.34e+05  12.34e-08 */

    /* walk through argument 1 to end, and call function scienceprint(a,b,c) */
    input = argv[cnt];
    while( input != NULL ){
	if(cnt > MAX_CONV){fprintf(stdout,"\nerror: number of conversions exceeds limit of %d\n",MAX_CONV);return 0;}
        while (*input){ /* loop through invalid chars. */
	    if ( strchr(invalid_characters, *input) ){
		fprintf(stdout,"\nerror : illegal character \"%s\" \n",input);
		return 0;
	    }
	    input++;
	}
	/* reset input to actual value */
	input = argv[cnt];
	ptr = (char *) strtok(input,",");
	idx = 0;
	type = 0;
	size = 0;
	while( ptr != NULL ){
	    switch( idx ){
		case 0: 
			/* size only interesting when 'significance=-1' 
			 determine number of digits : 1.23445e+23 -> size = 6
			*/
			size = strlen(ptr);
			if( strstr(ptr,".") != NULL){size = size - 1 ;}
			if( strstr(ptr,"*10^") != NULL){
			    ptr = str_replace(ptr,"*10^","E");
			    if(ptr == NULL){
				fprintf(stdout,"error : in replacement of 10^ notation\n");
				return 0;
			    } 
			    size = size - 3;
			}
			if( strstr(ptr,"E") != NULL){size = size - strlen(strstr(ptr,"E"));}
			if( strstr(ptr,"e") != NULL){size = size - strlen(strstr(ptr,"e"));}
			number = atof(ptr); 
			break;
		case 1: significance = atoi(ptr);  break;
		case 2: type = atoi(ptr); if(type < 0 || type > 4 ){type = 0;} break;
		default: break;
	    }
	    idx++;
	    ptr = (char *) strtok(NULL,",");
	}
	/* number and precision are mandatory:  default type=0  */
	if( idx < 2 || idx > 3){fprintf(stdout,"\nsyntax error : number1,significance1,type1 number2,significance2,type2 ... number_n,significance_n,type_n \n");return 0;}
	/* call conversion routine */
	printscience(number, significance, type , cnt , size);
	cnt++;
	input = argv[cnt];
    }
    fprintf(stdout,"\n");
    return 0;
}



