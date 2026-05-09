// to write js program to find the number of digits in number 

let number = 2871983;
let count = 0;

let copy = number ; 
 

while(copy > 0) {
  count++ ;
  copy  = math.floor(copy/10);
} 
console.log(count);
