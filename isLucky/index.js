const Benchmark = require('benchmark');
const { isLucky_evgenia, isLucky_myjinxin2015, isLucky_mine } = require('./isLucky');

let num = 3456765678967;

const suite = new Benchmark.Suite;

suite
  .add('isLucky_evgenia', function() {
    isLucky_evgenia(num);
  })
  .add('isLucky_myjinxin2015', function() {
    isLucky_myjinxin2015(num);
  })
  .add('isLucky_mine', function() {
    isLucky_mine(num);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();