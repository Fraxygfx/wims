/*
*********************************************************************************
* J.M. Evers 3/2012								*
* This is all amateur scriblings... So no copyrights.				*
* This source code file, and compiled objects derived from it,			*
* can be used and distributed without restriction, including for commercial use	*
* No warrenty whatsoever							*
*********************************************************************************
general use:
rounding to 2 decimals (financial math)
tot=!exec moneyprint 0.1,17,123.4,123.99765
tot -> 0.10,17.00,123.40,124.00

2/2012
 modified for general rounding usage; a word 'DECIMALS' can be added to the list of numbers
 tot=!exec moneyprint 2.1,4.123,5  2   // 2 decimals
 tot -> 2.10,4.12,5.00
 tot=!exec moneyprint 2.1,4.123,5  4   // 4 decimals
 tot -> 2.1000,4.1230,5.0000
 tot=!exec moneyprint 2.1,4.123,5
 tot -> 2.10,4.12,5.00 //default value (or old syntax) is 2 decimals  

6/2012.
 modified again to support rounding of scientific numbers, like
 tot=!exec moneyprint 1.23456e+06,1.23456*10^6,0.01234e-23 3
 tot -> 1.235e06,1.235e6,0.012e-23
 
 assumed only powers of 10 [scientific notation]
 
    
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_DIGITS 20
#define MAX_CONV 32

int main( int argc , char *argv[]){
    if( argc != 2 && argc != 3){
	fprintf(stdout,"error !\nusage:\n!exec moneyprint $your_wims_item_list $precision_word\nexample:\nmoney=!exec moneyprint 1.2,30.1,.4,-.23123456 2\nThe result is a comma separated list: 1.20,30.10,0.40,-0.23\n using 2 decimals\nNote: no calculations are done.\nNo spaces allowed \n");
	exit(0);
    }
    /* test for illegal characters */
    const char *invalid_characters = "\n\"\'!=ABCDFGHIJKLMNOPQRSTUVWYZabcdfghijklmnopqrstuvwyz@#$%&()[]{};:~><?/\\|";
    /* +-*^XxEe are allowed : 12.34e+05  12.34e-08 1x10^5 1.234*10^123*/ 
    char *input;
    input = argv[1];
    while (*input){
	if ( strchr(invalid_characters, *input) ){
	    fprintf(stdout,"error !\nfound illegal character \"%c\" in argument\n",*input);
	    exit(0);
	}
	input++;
    }
    int DECIMALS;
    if(argv[2] != NULL){
	DECIMALS = atoi(argv[2]);
	if(DECIMALS > MAX_DIGITS){
	    fprintf(stdout,"error ! maximum amount of decimals is %d \n",MAX_DIGITS);exit(0);
	}
    }
    else
    {
	DECIMALS = 2;
    }
    char *ptr;
    char word[MAX_DIGITS];
    char exponent[MAX_DIGITS];
    char number[MAX_DIGITS];
    int cnt = 1;
    int powE = 0;
    int idx1 = 0;
    int idx2 = 0;
    int length= 0;
    int i = 0;
    int pow10 = 0;
    input = argv[1];
    ptr = strtok(input,",");
    while( ptr != NULL){
	if(  cnt > MAX_CONV ){
	    fprintf(stdout,"ERROR too many (> %d)conversion \n",MAX_CONV);
	    exit(0);
	}
	// next item in input argv[1]
	strncpy( word, ptr, MAX_DIGITS);
	length = strlen(ptr);
	//reset counters
	powE = 0;
	pow10 = 0;
	idx1 = 0;
	idx2 = 0;
	i = 0;
	for( i = 0; i < length ; i++){
	    if( idx1 + idx2  >  MAX_DIGITS-1){ 
		fprintf(stdout,"ERROR string too large\n");
		exit(0);
	    }
	    switch( word[i] ){
		case 'e' : powE=1;break;
		case 'E' : powE=1;break;
		case 'x' : pow10++;break;
		case '*' : pow10++;break;
		case '^' : pow10=5;break;
		default  : 
		if( pow10 > 0 ){
		    pow10++;
		    if( pow10 > 4 ){ //1.23 *10^ 
			exponent[idx2]=word[i];
			idx2++;
		    }
		}
		else
		{ 
		    if(powE == 1){
			exponent[idx2] = word[i];
			idx2++;
		    }
		    else
		    {
			number[idx1] = word[i];
			idx1++;
		    }
		}
		break;
	    }
        }
        exponent[idx2] = '\0';
        number[idx1] = '\0';
	if( powE == 1 || pow10> 0 ){
    	    if(cnt > 1){
		fprintf( stdout , ",%.*fe%s" , DECIMALS , atof(number) , exponent );
	    }
	    else
	    {
		fprintf( stdout , "%.*fe%s" , DECIMALS , atof(number) , exponent );
	    }
	}
	else
	{
	    if(cnt > 1 ){
		fprintf( stdout , ",%.*f" , DECIMALS , atof(number));	
	    }
	    else
	    {
		fprintf( stdout , "%.*f" , DECIMALS , atof(number));	
	    }
	}
	cnt++;
	ptr = strtok(NULL,",");
    }
    fprintf(stdout,"\n");
    return 0;
}
