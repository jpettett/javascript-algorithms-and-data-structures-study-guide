//Implement the following on the SinglyLinkedList class:
//1. push - this function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList
//2. pop - this function should remove a node at the end of the singlyLinkedList. It should return the node removed
//3. get - this function should find a node at a specified index in SinglyLinkedList. It should return the found node.
//4. insert - This should insert a node at a specified index in a SinglyLinkedList.It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode;
    if (this.head === this.tail) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      poppedNode = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return poppedNode;
  }
  get(index) {
    if (index > this.length || index < 0) return undefined;
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(2);
singlyLinkedList.push(4);
console.log(singlyLinkedList.push(5));
console.log(singlyLinkedList.get(1));
// console.log(singlyLinkedList);
