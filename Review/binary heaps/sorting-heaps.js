// Max Binary Heap
// insert psuedocode
// 1. Push the value into the values property on the Heap
// 2. Bubble by creating a variable called index which is the length of the values property-1
// 3. Create a variable called parentIndex which is the floor of(index-1)/2
// 4. Keep looping as long as the values element at the parent index is less than the values element at the child index
// 5. Swapthe value of the values element at the parentIndex with the value of the element property at the child index
// 6. Set the index to be the parentIndex, and start again

//Removing from a Heap
//extractMax method psuedocode
//1. Swap the first value in the values property with the last one
//2. Pop from the values property, so you can return the vlaue at the end
//3. Have the new root "sink down" to the correct spot
//4. Your parent index starts at 0 (root)
//5. Find the index of the left child: 2*index+1
//6. Find the index of the right child: 2*index+2
//7. If the left of the right child is > than the element, swap. If both are larger swap with the largest child
//8. The child index swapped now becomes the parent idx
//9. Keep looping and swapping until neither child is larger than the element
//10. Return the old root

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //sink down
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      //otherwise swap
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
console.log(heap.extractMax());
