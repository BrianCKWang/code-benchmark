const Benchmark = require('benchmark');
const { commonCharacterCount_lifeofnations, commonCharacterCount_mine } = require('./commonCharacterCount');

let s1 = "";
let s2 = "";
for (let i = 1; i <= 20000; i++) {
  s1 = s1.concat(String.fromCharCode(Math.floor(Math.random()*26+97)));
  s2 = s2.concat(String.fromCharCode(Math.floor(Math.random()*26+97)));
}

const suite = new Benchmark.Suite;

suite
  .add('commonCharacterCount_lifeofnations', function() {
    commonCharacterCount_lifeofnations(s1, s2);
  })
  .add('commonCharacterCount_mine', function() {
    commonCharacterCount_mine(s1, s2);
  })
  .on('complete', function() {
    // loop over and print each result
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();