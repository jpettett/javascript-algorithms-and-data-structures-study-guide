//Merge Sort
// part one: helper function for SORTED arr
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  //divide and conquer
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  //call merge
  return merge(left, right);
}

console.log(mergeSort([29, 1, 8, 10, -5]));

//Quick Sort
//Pivot/Partition Helper function
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    //compare pivot to next element(arr[i])
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

//Radix Sort
//helper function to find digit
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
//helper function to get count of digits
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//helper function to find the MOST digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
//implementation
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    //make buckets of 10 empty arrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //loop over eevry number
    for (let i = 0; i < nums.length; i++) {
      //it puts the number in the bucket
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    //spread operator to push digits as individual elements
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
