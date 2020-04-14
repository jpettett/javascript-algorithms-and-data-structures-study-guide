//Implement the following on the SinglyLinkedList class:
//1. push - this function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList
//2. pop - this function should remove a node at the end of the singlyLinkedList. It should return the node removed
//3. get - this function should find a node at a specified index in SinglyLinkedList. It should return the found node.
//4. insert - This should insert a node at a specified index in a SinglyLinkedList.It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
//5. This function should rotate all the nodes in the list by some number passed in.
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
// The number passed in to rotate can be any integer (should work with negative indexes).
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)
//6. set - This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value.It should return true if the node is updated successfully,or false if an invalid index is passed in.

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
  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(data);
    if (index === this.length) return !!this.push(data);
    const prevNode = this.get(index - 1);
    if (!prevNode) return false;
    prevNode.next = new Node(data, prevNode.next);
    this.length++;
    return true;
  }
  rotate(number) {
    const index = number < 0 ? number + this.length : number;
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this;
    const prevNode = this.get(index - 1);
    if (!prevNode) return undefined;
    //switch
    this.tail.next = this.head;
    this.head = prevNode.next;
    this.tail = prevNode;
    prevNode.next = null;
    return this;
  }
  set(index, data) {
    const node = this.get(index);
    if (!node) return false;
    node.data = data;
    return true;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(2);
singlyLinkedList.push(4);
// console.log(singlyLinkedList.push(5));
// console.log(singlyLinkedList.get(1));
console.log(singlyLinkedList.insert(1, 15));
console.log(singlyLinkedList);
