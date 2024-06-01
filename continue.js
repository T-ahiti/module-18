
var numbers = [45, 44, 23, 5, 234, 2432, 223, 32, 96]


// continue means oi number/word ta paile ota skip kore next number/word e jabe
for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
         continue;
    }
    console.log(number);
}