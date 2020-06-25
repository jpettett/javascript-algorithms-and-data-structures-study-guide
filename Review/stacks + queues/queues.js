// //Array implementation using unshift() and pop()
// let queue = [];
// queue.unshift('First');
// queue.unshift('Second');
// queue.unshift('Third');
// console.log(queue.pop());
// console.log(queue);

//Queue with a linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   //adds in at the end of list (push() logic)
//   enqueue(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }
//   //return, remove from beginning
//   dequeue() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// let list = new Queue();
// list.enqueue('First');
// list.enqueue('Second');
// list.enqueue('Third');
// console.log(list.dequeue());
// console.log(list.dequeue());
// console.log(list.dequeue());
