function isprime(n){
  if(n == 0 || n <= 1){ 
    return false;
  }

  for(var i = 2; i <= n / 2 ; i++){
    if(n % i == 0){
        return false;
    }
  }
  return true;
}

var array = [0,1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < array.length; i++){
  if (isprime(array[i])){
    sum += array[i];
    console.log(array[i]);
  };
}
console.log("sum of primes:",sum);
