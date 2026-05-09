//write a program to delete all occurance of element num in given array 
let arr = [ 1, 2, 3, 4, 5, 6, 3, 2];
let num = 2;

for(let i=0; i<arr.length; i++) {
  if(arr[i] == num) {
    arr.splice(i ,1);
  }
}
console.log(arr);
