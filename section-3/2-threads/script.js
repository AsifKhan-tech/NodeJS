console.time(); //start the timer

for (let i = 0; i < 100_000; i++) {
  if (i % 5_000 === 0) {
    console.log(i);
  }
}

console.timeEnd(); //end timer, give the time how much code took time
