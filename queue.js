class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val, null, this.head);
    if(!this.tail) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.head.prev = node;
      this.head = node;
    }
  }

  pop() {
    const val = this.tail.val;
    if(this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    else {
      this.head = null;
      this.tail = null;
    }
    return val;
  }
}

export default Queue;

const myQueue = new Queue();
myQueue.push(1);
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
myQueue.push(2);
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
myQueue.push(3);
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
console.log(myQueue.pop());
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
console.log(myQueue.pop());
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
console.log(myQueue.pop());
console.log("tail: ",myQueue.tail);
console.log("head: ",myQueue.head);
