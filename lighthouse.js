for (var i = 100; i <= 200; i++)
  if (0 === i % 12) {
    console.log('LoopyLighthouse');
  } else if (0 === i % 4) {
    console.log ('Lighthouse');
  } else if (0 === i % 3) {
    console.log ('Loopy');
  } else {
    console.log(i)
  }