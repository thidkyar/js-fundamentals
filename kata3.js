var talkingCalendar = function(date) {
var newDate = date.split('/');
var year = newDate[0];
var month = newDate[1];
var day = newDate[2];

if (newDate[1] === '12') {
  month = 'December';
} else if (newDate[1] === '11') {
  month = 'November';
} else if (newDate[1] === '10') {
  month = 'October'
} else if (newDate[1] === '09') {
  month = 'September'
} else if (newDate[1] === '08') {
  month = 'August'
} else if (newDate[1] === '07') {
  month = 'July'
} else if (newDate[1] === '06') {
  month = 'June'
} else if (newDate[1] === '05') {
  month = 'March'
} else if (newDate[1] === '04') {
  month = 'April'
} else if (newDate[1] === '03') {
  month = 'March'
} else if (newDate[1] === '02') {
  month = 'February'
} else if (newDate[1] === '01') {
  month = 'January'
}
if (newDate[2] === '01' || newDate[2] === '21' || newDate[2] === '31')  {
  day = (parseInt(newDate[2]) + 'st');
} else if (newDate[2] >= '04' && newDate[2] <= '20' || newDate[2] >= '24' && newDate[2] <= '30') {
  day = (parseInt(newDate[2]) + 'th');
} else if (newDate[2] === '02' || newDate[2] === '22') {
  day = (parseInt(newDate[2]) + 'nd');
} else if (newDate[2] === '03' || newDate[2] === '23') {
  day = (parseInt(newDate[2]) + 'rd');
}
return month + ' ' + day + ',' + ' ' + year;
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1999/03/13"));


/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/