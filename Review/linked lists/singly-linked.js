//define node class
class Node {
  constructor(val) {
    //set value to value
    this.val = val;
    //next node is null
    this.next = null;
  }
}

//define Singly linked list
class SinglyLinkedList {
  //define empyt list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //push method (end of list in case we forgot!)
  push(val) {
    let newNode = new Node(val);
    //if theres no head set head to new node and new tail to new head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //if there is a head then the next value will = new Node, becoming both the head and tail
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //pop method (pop last item)
  pop() {
    //if the list is empty return undefined or null
    if (!this.head) return undefined;
    //store current head in variable
    let current = this.head;
    //store new tail in variable (current.next)
    let newTail = current.next;
    //while there is a next item
    while (current.next) {
      //move new tail to current
      newTail = current;
      //move current to next
      current = current.next;
    }
    //now the tail = new tail
    this.tail = newTail;
    //after the new tail? nothing.
    this.tail.next = null;
    //decrement the length
    this.length--;
    //edge case! what if you popped to 0 length?!
    if (this.length === 0) {
      //null list
      this.head = null;
      this.tail = null;
    }
    //give back that current list
    return current;
  }
  // shift method (remove a new node from the beginning of list)
  shift() {
    //if theres no head return undefined or null
    if (!this.head) return undefined;
    //store current head in a variable
    let currentHead = this.head;
    //move the head to be the next node
    this.head = currentHead.next;
    //decremement length by one
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    //return current head
    return currentHead;
  }
  //unshift method (add a node to beginning of list)
  unshift(val) {
    //create a new node
    let newNode = new Node(val);
    //if theres no head property, set both head and tail as new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //else set new node as new head
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    //incremement length of the list
    this.length++;
    //return list
    return this;
  }
  //retrieving a node by its position in the linked list!
  get(index) {
    //check if index is valid
    if (index < 0 || index >= this.length) return null;
    //track current position as we traverse
    let counter = 0;
    let current = this.head;
    //if counter isnt equal to where we are...
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  //changing the value of a node based on its position in the index
  set(index, val) {
    //call on get method for index of node
    let foundNode = this.get(index);
    //does that return something? true.
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    //if it didnt update return false
    return false;
  }
  //insert method (adding a node to the linked list at a specific position)
  insert(index, val) {
    //is the index valid?
    if (index < 0 || index > this.length) return false;
    //at the end? push it (!! = not, not)
    if (index === this.length) return !!this.push(val);
    //if its at the beginning add it as the head
    if (index === 0) return !!this.unshift(val);
    //make a new node
    let newNode = new Node(val);
    //previous node
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    //add one to the length
    this.length++;
    //it worked? true.
    return true;
  }
  //remove or delete method (removing a node from the linked list at a specific position)
  remove(index) {
    //check to see if index is valid
    if (index < 0 || index >= this.length) return undefined;
    //if index is 0 remove the first item by using shift()
    if (index === 0) return this.shift();
    //if index is last item removes last item pop()
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    //everything moves down one
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  //reversing the linked list IN PLACE
  reverse() {
    //head
    let node = this.head;
    //swap head and tail
    this.head = this.tail;
    //new head/tail
    this.tail = node;
    let next;
    //end of list HAS TO BE NULL
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      //swap places
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
// list.push('one');
// list.push('two');
// list.push('three');
// list.pop();
// list.shift();
// list.unshift('one');
// console.log(list.get(1));
// console.log(list.set(1, 'three'));
// console.log(list.insert(1, 'four'));
// console.log(list.remove(1));
// console.log(list.reverse());
console.log(list);

//refactored reverse method based on article by Sergey Piterman //
//psuedocode//
//Step 1:
//Are we looking at an empty list?
//if we can find one node assign it following and current variable and set previous to null
//Step 2:
//Make sure we're not at the end, remember the end node will always point to null!
//IMPLEMENT REVERSAL
//set following to following.next
//set current.next to previous (which was null)
//move previous to current
//move current to following
//Step 3:
//return previous. As it's pointing to the node right before current (current and following are now at the end, in fact current = null because it was swapped with previous!)
function reverse(head) {
  //Step 1
  let previous = null;
  let current = head;
  let following = head;
  //Step 2
  while (current !== null) {
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }
  //Step 3
  return previous;
}
