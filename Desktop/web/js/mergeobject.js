// to write a function called mergeobvject that accepts two objects and return a new object all the keys and value of the first object and second object 

const mergeobvject = (obj1, obj2) => ({ ...obj1, ...obj2});

mergeobvject({a: 1, b:2 }, { c: 3, d: 4 });
