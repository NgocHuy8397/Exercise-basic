var year = [2000, 2011, 2008, 2005, 2020, 2022];
var array = [];
for(var i = 0; i < year.length; i++){
   var result = year[i];
    if(result % 400 == 0 || result % 4 == 0 && 100 != 0){
        array.push(result);
   } 
}
console.log("leap year", array);
console.log("Number of leap years", array.length)