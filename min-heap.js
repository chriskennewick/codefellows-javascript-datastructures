var BinaryMinHeap = function() {
  this._heapArray = [];
};

BinaryMinHeap.prototype.insert = function(data) {
  this._heapArray.push(data);
  this.perculateUp(this._heapArray.length - 1);
};

BinaryMinHeap.prototype.perculateUp = function(n) {
  while (n > 0) {
    var elem = this._heapArray[n];
    var parentIndex = Math.ceil(n / 2) - 1;
    var parent = this._heapArray[parentIndex];
    if (elem >= parent) {
      break;
    }

    this._heapArray[parentIndex] = elem;
    this._heapArray[n] = parent;
    n = parentIndex;
  }
};

BinaryMinHeap.prototype.peek = function() {
  var root;
  if (this._heapArray.length > 0) {
    root = this._heapArray[0];
  }
  return root;
};

BinaryMinHeap.prototype.print = function() {
  console.log(JSON.stringify(this._heapArray));
};


var heap = new BinaryMinHeap();
console.log("Peeking: " + heap.peek());
heap.insert(10);
heap.print();
console.log("Peeking: " + heap.peek());
heap.insert(3);
heap.print();
console.log("Peeking: " + heap.peek());
heap.insert(5);
heap.print();
heap.insert(7);
heap.print();
heap.insert(9);
heap.print();
heap.insert(2);
heap.print();
console.log("Peeking: " + heap.peek());
heap.insert(6);
heap.print();
console.log("Peeking: " + heap.peek());