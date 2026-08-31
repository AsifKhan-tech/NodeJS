console.log(`Loop-2 started`);

for (let i = 0; i < 40_0000000; i++) {
  if (i % 40_0000000 === 0) {
    console.log("Loop-1", i);
  }
}
