function concat (array1,array2) {
  var arr = array1.concat(array2);
  arr.push();
  return (arr);
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));