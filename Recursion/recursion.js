const numOfWaysToPartition = (n, m) => {
  if(n === 0){
    return 1;
  }
  else if(m === 0 || n < 0){
    return 0;
  }
  else{
    return numOfWaysToPartition(n - m, m) + numOfWaysToPartition(n, m - 1);
  }
};

module.exports = { numOfWaysToPartition };