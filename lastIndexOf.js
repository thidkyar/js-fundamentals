function lastIndexOf (array,value) {
  var index = [];
  for (var i = 0; i < array.length; i++)
    if (array[i] === value)
      index.push(i);
  return index.pop();
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));