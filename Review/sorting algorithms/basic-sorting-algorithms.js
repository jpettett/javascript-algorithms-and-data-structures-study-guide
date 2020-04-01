//Bubble Sort
function bubbleSort(arr) {
  //decrement i from end of the array
  for (let i = arr.length; i > 0; i--) {
    //increment j from start of array
    for (let j = 0; j < i - 1; j++) {
      //if arr[j] > arr[j+1] (the one next to it)
      if (arr[j] > arr[j + 1]) {
        //implement switch by using a variable temp
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //return sorted array
  return arr;
}
console.log(bubbleSort([9, 1, 23, 36]));

//Selection Sort
function selectionSort(arr) {
  //start i at beginning to end
  for (let i = 0; i < arr.length; i++) {
    //variable for mininum int
    let min = i;
    //start j at i+1 and loop to end
    for (let j = i + 1; j < arr.length; j++) {
      //if the "minimum" > arr[j]
      if (arr[min] > arr[j]) {
        //j becomes the new minimum
        min = j;
      }
    }
    //if i isn't the minimum
    if (i !== min) {
      //switch with min!
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  //return arr
  return arr;
}
console.log(selectionSort([20, 14, 30, 16, 200, 19, 205, 7, 1, 333, -2]));

//Insertion sort
function insertionSort(arr) {
  //start i at index 1 (don't worry, j will cover index 0)
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    //while j >= 0 and index j > current value
    while (j >= 0 && arr[j] > currentVal) {
      //the next index j swaps with j
      arr[j + 1] = arr[j];
      //now j is the previous index!
      j = j - 1;
    }
    //the current value is the next index...
    arr[j + 1] = currentVal;
  }
  //ok now return arr
  return arr;
}

console.log(insertionSort([2, 5, 1, 10]));
