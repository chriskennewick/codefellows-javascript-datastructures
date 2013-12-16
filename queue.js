function Queue() {
  this.back = null;
  this.front = null;
  this.itemCount = 0;
}

Queue.prototype = {
  enqueue: function(data) {
    console.log("enqueueing: " + data);
    var item = {
      data: data,
      next: null,
      prev: null
    };

    if (this.back === null) {
      this.back = item;
      this.front = item;
    }
    else {
      item.next = this.back;
      this.back.prev = item;
      this.back = item;
    }
    this.itemCount++;
  },
  dequeue: function(callback) {
    console.log("dequeueing");
    var err = null,
      value = null;
    if (this.front === null) {
      err = "Empty";
    }
    else {
      value = this.front.data;
      this.front = this.front.prev;
      this.itemCount--;
    }
    callback(err, value);
  },

  size: function() {
    return this.itemCount;
  },

  printQueue: function() {
    var nextItem = this.front;
    var results = [];
    while (nextItem !== null) {
      results.push(nextItem.data);
      nextItem = nextItem.prev;
    }
    console.log(JSON.stringify(results));
  }
};

var test = function(err, value) {
  console.log("The err is: " + err);
  console.log("The value is: " + value);
};

var queue = new Queue();
console.log("The size is: " + queue.size());
queue.dequeue(test); //err -> "Empty"
console.log("The size is: " + queue.size());
queue.enqueue("First in line!");
console.log("The size is: " + queue.size());
queue.printQueue();
queue.enqueue("Second in line!");
console.log("The size is: " + queue.size());
queue.printQueue();
queue.enqueue("Last in line :(");
console.log("The size is: " + queue.size());
queue.printQueue();
queue.dequeue(test);
console.log("The size is: " + queue.size());
queue.printQueue();
queue.dequeue(test);
console.log("The size is: " + queue.size());
queue.printQueue();
queue.dequeue(test);
console.log("The size is: " + queue.size());
queue.printQueue();