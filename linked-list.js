/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    else{
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if(!(this.head)){
      this.head = newNode
      this.tail = newNode
    }
    else{
      newNode.next = this.head
      this.head = newNode
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let temp;
    let currentNode = this.head
    if (currentNode.next == null){
      this.head = null
    }
    else{
    while(currentNode.next.next){
      currentNode = currentNode.next
      }
    temp = currentNode.next
    currentNode.next = null
    }
    return temp
  }

  /** shift(): return & remove first item. */

  shift() {
    const temp = this.head
    this.head = this.head.next

    return temp
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let temp = idx
    let currentNode = this.head
    while(temp > 0){
      currentNode = currentNode.next
      temp -= 1
    }
    return currentNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let temp = idx
    let currentNode = this.head
    while(temp > 0){
      currentNode = currentNode.next
      temp -= 1
    }
    currentNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  // a->b->c->d
  insertAt(idx, val) {
    let temp = idx - 2
    let currentNode = this.head
    while(temp >= 0){
      currentNode = currentNode.next
      temp -= 1
    }
    if (currentNode == this.head && idx ==0){
      const newNode = new Node(val)
      newNode.next = currentNode
      this.head = newNode
    }
    else{
      const newNode = new Node(val)
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let temp = idx - 2
    let currentNode = this.head
    while(temp >= 0){
      currentNode = currentNode.next
      temp -= 1
    }
    if (currentNode == this.head && idx ==0){
      this.head = currentNode.next
    }
    else{
      currentNode.next = currentNode.next.next
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0
    let count = 0
    let currentNode = this.head
    while(currentNode){
      sum += currentNode.val
      currentNode = currentNode.next
      count+=1
    }
    return sum/count
  }
}

module.exports = LinkedList;
