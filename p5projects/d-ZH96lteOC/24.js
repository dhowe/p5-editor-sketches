let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let periods=[
"Summer Maximum",
"Moderate Heat",
"Most Sweltering",

"Autumn Begins", 
"Heat Withdraws",
"White Dew",
"Autumn Equinox",
"Cold Dews",
"Frost",

"Winter Begins",
"Light Snow",
"Heavy Snow",
"Winter Solstice",
"Moderate Cold",
"Severe Cold",
  
"Spring Begins",
"Spring Showers",
"Animals Awakens",
"Vernal Equinox",
"Clear and Bright",
"Wheat Rain",

"Summer Begins",
"Creature Plenish",
"Seeding Millet ",


];

let date=[
 "June 21",
"July 7",
"July 22",

"August 7", 
"August 23",
"September 7",
"September 23",
"October 8",
"October 23",

"November 7",
"November 22",
"December 7",
"December 21",
"January 5",
"January 20",
  
"February 3",
"February 18",
"Match 5",
"Match 20",
"April 4",
"April 20",

"May 5",
"May 21",
"June 5",
];

let poem = {
  start:
    "$A %$B %$C %$D %$E %$F %$G %$H %$I %$J %$K %$L %$M %$N %$O %$P %$Q %$R %$S %$T %$U %$V %$W %$X",
  
  A:"The day is $a1 &when the night $a2.",
  a1:"maximum long|a fire|overwhelming|unbearable|a tough guy",
  a2:"burns off half the candle|is always dawing upon|is stolen away",
  
  B:"$b1 blooming against $b2.",
  b1:"Dianthus are|Magnolias are|Water lilies are|Eiphyllums are|Orchids are",
  b2:"the southern wind|the southern invaders|the southern waves",
  
  C:"When will $c1 fade away?& Whatever in chill is by no means from $c2.",
  c1:"this bare sun|these blushing faces|the blush of apricots",
  c2:"a breeze|the stream|in the air|from above the cloud",
  
  D:"$d1 rustle before $d2 are flipped.",
  d1:"Bushes|Cicades|Pages",
  d2:"leaves|foliages|the days|the nights",
  
  E:"$e1 has been $e2,& leaving $e3 all over.",
  e1:"Summer|Heat",
  e2:"penalized|withdrawn|expelled|erased",
  e3:"the gold|the coolness|his adherents|his followers",
  
  F:"Dotted on the $f1,& dews are the $f2.",
  f1:"petals|the grass|seedlings",
  f2:"tears of the hardest goodbye|pearls of the most generous gift|sweats from good old sweltering days|recorders of season changing",
  
  G:"$g1 are equal partners& forever apart.",
  g1:"Spring and fall|Full moon and rising sun|Daydream and nightmare|Daytime and nightime|Light and shadow",
  
  H:"$h1 accumulates as the dew.",
  h1:"Homesickness|Homesickness|Sorrow|Memory",
  
  I:"$i1 are not the frost, &but $i2.",
  i1:"Desolations|Coldnesses|Vicissitudes|Sentiments",
  i2:"the wolves howling to full moon|the autumn mood only be killed with moonshine|the chrysanthemums bloom upon Frost|the plaintive cries of homecoming wild goose",
  
  J:"$j1... $j2 than (ever|yesterday|last year).",
  j1:"This is a night|That is a night|That is another hour|That is another second",
  j2:"longer|colder|quieter|darker|even more silent",
  
  K:"Snow is $k1...",
  k1:"pouring dews of (repentance|penance|regret|pity)",
  
  L:"But is the snow $l1 enough to $l2?",
  l1:"fresh|clear|bright|warm|crystal",
  l2:"wash away its sins|relieve its misery|for (renewal|reborn)",
  
  M:"$m1, &as (the night|tonight) is always too long to overcome.",
  m1:"The moonlight is too bright for the drowsiness|The sheet is too cold for recharging|The air is too cold for calming down",
  
  N:"Moderate, but enough that $n1.",
  n1:"the rivers are locked|the quarrels are frozen|the day lasts for an eternity",
  
  O:"If the snow is not yet melting,& $o1 could last forever.",
  o1:"winter|the coldness|the day|the deadlock",
  
  P:"Is it melted snow or spring rain that& $p1 $p2?",
  p1:"branches of willows|shadows of all creations|desires in your eyes",
  p2:"swaying in|reflected on|flourishing|booming out",
  
  Q:"She knows Spring, sneaks into night on $q1 &and moisters eyes with $q2.",
  q1:"wind|clouds|starlights|secret lanes",
  q2:"dots of reds|raindrops on grass|weights of blossoms",
  
  R:"Is it because $r1?",
  r1:"an alarm for early spring|a clarion call for vitality|the sound of trumpets that burst into life",
  
  S:"$s1 start sharing the vernal scenery.",
  s1:"Daytime and nightime|Light and shadow|The bloom and the fallen|Lands and rivers",
  
  T:"Yesterday, the $t1.",
  t1:"swallow arrived|pear blossom fell|thunder was rumbling|ghosts were homed",
  
  U:"The rain sheds flower petals,& and $u1.",
  u1:"steals away spring in the air|buries them into waterside|cherishes them as memento",
  
  V:"It is hard to keep the springtime, not& even for the $v1 where it was born.",
  v1:"the cherry blossom trees|the rows of willow|the banks of stream|the handful of soil",
  
  W:"Plenitiful, &both in $w1 and $w2.",
  w1:"the smells of gold|the wheat ears|the flavour of air|the layers of greenery",
  w2:"the restless mind|the croak of frogs|the trills of cicadas|the birds singing",
  
  X:"Millet are seeded as $x1 as if $x2.",
  x1:"much|heavily|deeply",
  x2:"raindrops|burdens|rainstorms",
};

