//Array implementation (unshift / shift)
// let stack = [];
// //adds first
// stack.unshift('create new file');
// stack.unshift('resized file');
// stack.unshift('cloned out wrinkle');
// //removes first
// stack.shift();
//inefficient because of re-indexing, can also use push and pop which is slightly better

//Singly Linked List Implementation
//** Push() PsuedoCode **//
//function accepts a value
//create a new node with value
//if there are no nodes in the stack set the first and last property to the newly created node
//if there is at least one node, create a variable that stores the current first property on the stack
//reset the first property to be the newly created node
//set the next property on the node to be the previously created variable
//increment the size of the stack by 1
//** pop() psuedocode ** //
//if there are no nodes in stack, return null
//create variable to store the first property on the stack
//if there is only 1 node, set the first and last property to be null
//if there is more than one node, set the first property to be the next property on the current first
//decrement the size by 1
//return the value of the node that was removed
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push(23);
stack.push(24);
stack.push(25);
stack.pop();
console.log(stack);
console.log(stack.pop());
