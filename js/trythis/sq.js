class Stack {
    constructor() {
      this.stackArray = [];
    }
    push(item) {
      this.stackArray.push(item);
    }
    pop() {
      return this.stackArray.pop();
    }
    *[Symbol.iterator]() {
      for (let i = this.stackArray.length-1; i >= 0; i--) {
        yield this.stackArray[i];
      }
    }
  }
  
  class Queue {
    constructor() {
      this.queueArray = [];
    }
    enqueue(item) {
      this.queueArray.push(item);
    }
    dequeue() {
      return this.queueArray.shift();
    }
    *[Symbol.iterator]() {
      for (let i = 0; i < this.queueArray.length; i++) {
        yield this.queueArray[i];
      }
    }
  }
  
  const stack = new Stack();
  stack.push(1);

  const queue = new Queue();
  queue.enqueue(3);

  console.log([...stack], [...queue]); // Bad
  
  for (const s of stack) {console.log(s);}
  for (const q of queue) {console.log(q);}
  const itStack = stack[Symbol.iterator]();
  console.log(itStack.next());
  console.log(itStack.next());
  const itQueue = queue[Symbol.iterator]();
  console.log(itQueue.next());