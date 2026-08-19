import os from "node:os";

/**
 * Build a system moniter
 */

function moniter() {
  // Take a snapshot
  //Take another snapshot after a second

  const oldCpus = os.cpus();

  //   console.log("old:", oldCpus);

  setTimeout(() => {
    const newCpus = os.cpus();
    const usage = newCpus.map((cpu, i) => {
      return {
        core: i,
        usage: calculateCpu(oldCpus[i], newCpus[i]) + "%",
      };
    });

    console.clear();
    console.table(usage);
  }, 1000);
}

function calculateCpu(oldCpus, newCpus) {
  const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);
  const idle = newCpus.times.idle - oldCpus.times.idle;
  const total = newTotal - oldTotal;
  const used = total - idle;

  return ((100 * used) / total).toFixed(1);
}

setInterval(moniter, 1000);

// [
//   {
//     model: "Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz",
//     speed: 2000,
//     times: { user: 1013440, nice: 3600, sys: 256940, idle: 1912430, irq: 0 },
//   },
//   {
//     model: "Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz",
//     speed: 2000,
//     times: { user: 1025100, nice: 3430, sys: 257950, idle: 1901620, irq: 0 },
//   },
//   {
//     model: "Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz",
//     speed: 2000,
//     times: { user: 1013180, nice: 3140, sys: 260090, idle: 1913450, irq: 0 },
//   },
//   {
//     model: "Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz",
//     speed: 1999,
//     times: { user: 965690, nice: 2610, sys: 268060, idle: 1919310, irq: 0 },
//   },
// ];
