#!/usr/bin/perl

use warnings;
use strict;
use Encode qw(encode decode);
#### for an identifier in a taxo, make the list of the modules
#### which refers to this identifier
####
my $dirclassif=".";
##unisciel
dicclassification ("$dirclassif/unisciel", ("$dirclassif/src/CheBoCar","$dirclassif/src/JaHE","$dirclassif/src/JaPeSe","$dirclassif/src/ThaCBaHa"));
my @l=('dewey','commoncore');

for my $f (@l) {
  dicclassification ("$dirclassif/$f", ("$dirclassif/src/$f"));
}

my $prelim="##This file is generated by taxo.pl. Do not modify directly\n";
sub  dicclassification { my ($dirout, @liste)=@_;
  my %ref=reverse_dic(@liste);
  my $TEXT=$prelim;
  for my $k (sort keys %ref) {
   if ($ref{$k}) {
    $TEXT .= "$k:$ref{$k}\n";
   }
  out("$dirout", $TEXT);
  }
}

sub reverse_dic { my @liste=@_;
  my %ref = ( ) ; my $ref=\%ref;
  for my $file (@liste) {
   open IN, "$file";
   while (<IN>) {
    next if ($_ =~ /^#/);
    my $text= $_ ; $text=~ s/\n//;
    my @text=split(":", $text);
    next if !($text[1]);
    my $t=$text[0]; $t=~ s/\n//;
    my @L= split(",",$text[1]);
    for my $a (@L) {
     if ($ref{$a}) {  $ref{$a}.= "," . $t ; }
     else { $ref{$a} = $t ; }
    }
   }
   close IN;
  }
  %ref
}

sub out { my ($bloc, $text) = @_;
  open  (OUT, ">$bloc") ;
  print OUT $text ; close OUT;
}
