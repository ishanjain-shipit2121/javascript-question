// write a fucntion called double and retirn args which accepts an array and a varivale number of argumnets. the function should retirn a new array with the orginal array value and all of the additional arguments doubled 

const DoubleAndReturnArgs = (arr, ...args) => [

...arr,
...DoubleAndReturnArgs.map((v) => v * 2), 


];

DoubleAndReturnArgs([1, 2, 3,], 4, 4); //[1,2,3,8,8,]

DoubleAndReturnArgs([2], 10, 4); //[2, 10, 8]

