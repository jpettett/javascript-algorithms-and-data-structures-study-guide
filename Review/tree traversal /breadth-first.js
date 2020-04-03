//BFS Psuedo Code
//create a queue (can be an array) and a variable to store the values of nodes visited
//use push() and shift()
//place the root node in the queue
//loop as long as there is anything in the queue
//dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//if there is a left property on the node dequeued - add it to th queue
//if there is a right property on the node dequeued - add it to the queue

//Breadth First Search implementation
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //make a new node
  insert(value) {
    let newNode = new Node(value);
    //if theres no root then new node becomes root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    //set current as root to be updated as we go
    let current = this.root;
    while (true) {
      //check if value is already in tree
      if (value === current.value) return undefined;
      if (value < current.value) {
        //check if there is anything in the left
        if (current.left === null) {
          //set current.left to new node
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        //check if there is anything to the right
        if (current.right === null) {
          //set current.right to new node
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    //check to see if there is a root
    if (this.root === null) return false;
    //set current to root and found to false
    let current = this.root,
      found = false;
    //while we havent found the node, but there is a current to loop over
    while (current && !found) {
      //if the value is less than the current.value
      if (value < current.value) {
        //check left
        current = current.left;
        //if the value is greater than current.value
      } else if (value > current.value) {
        //break right!
        current = current.right;
      } else {
        //did we find it? true.
        found = true;
      }
    }
    //if we don't find it return undefined
    if (!found) return undefined;
    //return the node value (current)
    return current;
  }
  //this refactored version returns true if node is found, false if it is not found
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  //Breadth First Search Starts Here
  bfs() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.bfs());
console.log(tree);
