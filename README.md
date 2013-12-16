codefellows-javascript-datastructures
=====================================
As a codefellows assignment, here are JavaScript implementations of several different datastructures.


Linked List
=============================
Prototypal implementation of a linked list.

Methods
-----------
 - insert(data) - insert a new node with the value data at the end of the list.
 - delete(index) - deletes the element of the list at index.
 - print() - prints the linked list.

Run
-----------
```
node linked-list.js
```

Doubly Linked List
=============================
Functional implementation and some tests of a doubly linked list.

Methods
-----------
 - prepend(data) - insert a new node with the value data at the beginning of the list.
 - append(data) - insert a new node with the value data at the end of the list.
 - popFront(callback) - removes the first element of the list and invokes callback with the data value passed as the parameter to callback.
 - popBack(callback) - removes the last element of the list and invokes callback with the data value passed as the parameter to callback.

Run
-----------
```
node doubly-linked-list.js
```

Stack
=============================
Functional implementation and some tests of a stack.

Methods
-----------
 - push(data) - Adds a data element to the stack. The parameter is the data element to add to the stack.
 - pop(callback) - Removes a data element from the stack.
The parameter to pop is a callback function that should expect two parameters - err and value. The callback's first param, err, is set to null if the pop operation was successful or "Underflow" if the stack was empty when called. The callback's second parameter, value, is the value removed from the stack.

Run
-----------
```
node stack.js
```

Hanoi
=============================
Towers of Hanoi solution that utilizes three instances of the Stack implementation.

Run
-----------
```
node hanoi.js
```

Queue
=============================
Prototypal implementation of a queue.

Methods
-----------
 - enqueue(data) - Adds a new data element to the queue. The parameter, data, should be the element to add.

 - dequeue(callback) - Removes the next item from the queue. The parameter to dequeue is a callback function that should expect two parameters - err and value. The callback's first param, err, is set to null if the queue operation was successful or "Empty" if the queue is currently empty. The callback's second parameter, value, is the value removed from the queue.
 - size() - Return the number of elements current in the queue

Run
-----------
```
node queue.js
```

Binary Search Tree
=============================
Prototypal implementation of a binary search tree.

Methods
-----------
 - size() - Returns the total number of elements in your BST.

 - height()  - Returns the height of your binary search tree.

 - contains(data) - Returns true if the data parameter is contained in the BST, otherwise return false.

Run
-----------
```
node binary-search-tree.js
```

Hash Table
=============================
Prototypal implementation of a hash table.

Hash Function uses modulus operator with the array size.

Methods
-----------
- insert(key, value) - Uses the key to insert the value into the data hash value.
- has(key) - Returns a boolean true if the key has been inserted into the hash table. Otherwise, return false.

- percentFull() - Returns a percentage of the hash table that's been used. The percentage fill is calculated as (# array positions filled) / (total # array positions).

- constructor(initialSize) - Your constructor should take an initial size of the backing array. Your constructor should handle negative values, 0, floating point, strings, etc. and raise an exception.

Run
-----------
```
node hash-table.js
```

Heap
=============================
Prototypal implementation of a min heap using a JavaScript array.

Methods
-----------
- insert(data) - Inserts an item with value data into the heap.
- perculateUp(n) - Shifts the element at array index n to the correct place in order to maintain a correct heap.
- peek() - Returns the top of the heap.
- print() - Prints the heap.

Run
-----------
```
node min-heap.js
```


