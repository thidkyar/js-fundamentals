 function range (start,end,step) {
  var arr = [];
  if (start === null || end === null || step < 0)
      return [];
  for (var i = start; i <= end; i += step)
   arr.push(i);
      return arr;
    }


/*
var range = function(start, end, step) {
  var arr = [];
  for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
    arr.push(i);
  return arr;
};
*/
console.log(range(2, 8, -2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));




