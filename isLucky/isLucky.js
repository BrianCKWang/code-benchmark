const isLucky_evgenia = (n) => {
  var count = 0;
  n = String(n).split('').map(t => {return parseInt(t)});
  n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
  return count == 0;
};

const isLucky_myjinxin2015 = (n) => {
  var a=(n+"").split(""),half=a.length/2,l=0,r=0
  while(a.length>half) r+= +a.pop()
  while(a.length) l+= +a.pop()
  return l===r
}

const isLucky_mine = (n) => {
  let digits = [...n + ''].map(Number);
    
  if(digits.length%2 !== 0){
      return false;
  }
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let n1 = digits.splice(0, digits.length/2).reduce(reducer);
  let n2 = digits.splice(digits.length/2-1, digits.length).reduce(reducer);
  
  if(n1===n2){
      return true;
  }
  else{
      return false;
  }
};

module.exports = { isLucky_evgenia, isLucky_myjinxin2015, isLucky_mine };