console.log(`Loop-2 started`);

for (let i = 0; i < 10_000000000; i++) {
  if (i % 40_00000000 === 0) {
    console.log("Loop-2", i);
  }
}
