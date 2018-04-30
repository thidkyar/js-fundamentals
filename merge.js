function merge(array1,array2) {
  var arr = array1.concat(array2);
  arr.sort();
  return arr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));