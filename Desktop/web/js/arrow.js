// to write a function maned array average that accept an array of number and return the average of those number 

const arrayAverage = (arr) => {
  let total = 0;
  for ( let number of arr) {
    total += number;

  }
  return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
