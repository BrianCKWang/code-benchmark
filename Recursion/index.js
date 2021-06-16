const Benchmark = require('benchmark');
const { numOfWaysToPartition } = require('./recursion');

let n = 9, m = 3;

// const suite = new Benchmark.Suite;

// suite
//   .add('numOfWaysToPartition', function() {
//     console.log(numOfWaysToPartition(n, m));
//   })
//   .on('complete', function() {
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();

console.log(numOfWaysToPartition(n, m));