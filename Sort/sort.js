const bubbleSort = (nums) => {
  let sorted = true;

  for(let i = 0; i < nums.length-1; sorted?i++:i=0){
    sorted = true;
    if(nums[i] > nums[i+1]){
      sorted = false;
      let temp = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp;
    }
  }

  return nums;
}

function quickSort(nums){
  if(nums.length <= 1){
    return nums;
  }

  const pivot = nums[0];
  const left = [];
  const right = [];

  for(let i = 1; i < nums.length; i++){
    if(nums[i] <= pivot){
      left.push(nums[i]);
    }
    else{
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// const quickSort = (arr) => {
//   // don't quick-sort a small array; just return it immediately
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // use first index as the pivot point
//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   // start at index 1 to ignore pivot
//   for (let i = 1; i < arr.length; i++) {
//     // push into different arrays based on value compared to pivot
//     if (arr[i] <= pivot) {
//       left.push(arr[i]);
//     }
//     else {
//       right.push(arr[i]);
//     }
//   }

//   // merge the sorted arrays and pivot together
//   return quickSort(left).concat(pivot, quickSort(right));
// };

module.exports = { bubbleSort, quickSort };