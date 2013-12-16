function DoublyLinkedList() {

  var head = null,
    tail = null;

  function createNode(data) {
    var prev = null,
      next = null;

    function getData() {
      return data;
    }

    function getNext() {
      return next;
    }

    function setNext(node) {
      next = node;
    }

    function getPrev() {
      return prev;
    }

    function setPrev(node) {
      prev = node;
    }

    return {
      getData: getData,
      getNext: getNext,
      setNext: setNext,
      getPrev: getPrev,
      setPrev: setPrev,
    };
  }

  function prepend(data) {
    if (head === null) {
      head = createNode(data);
      tail = head;
    }
    else {
      var newNode = createNode(data);
      newNode.setNext(head);
      head.setPrev(newNode);
      head = newNode;
    }
  }

  function append(data) {
    if (tail === null) {
      prepend(data);
    }
    else {
      var newNode = createNode(data);
      newNode.setPrev(tail);
      tail.setNext(newNode);
      tail = newNode;
    }
  }

  function popFront(callback) {
    var data = null;

    if (head !== null) {
      if (head === tail) {
        data = head.getData();
        head = tail = null;
      }
      else {
        var newHead = head.getNext();
        newHead.setPrev(null);
        data = head.getData();
        head = newHead;
      }
    }
    callback(data);
  }

  function popBack(callback) {
    var data = null;
    if (tail !== null) {
      if (tail === head) {
        data = tail.getData();
        head = tail = null;
      }
      else {
        var newTail = tail.getPrev();
        newTail.setNext(null);
        data = tail.getData();
        tail = newTail;
      }
    }
    callback(data);
  }

  function print() {
    var result = [];
    var currNode = head;
    while (currNode !== null) {
      result.push(currNode.getData());
      currNode = currNode.getNext();
    }
    console.log(result);
  }

  return {
    prepend: prepend,
    append: append,
    popFront: popFront,
    popBack: popBack,
    print: print,
  };
}

var logData = function(data) {
  console.log(data);
};

var dll = DoublyLinkedList();
dll.append(6);
dll.print(); //[6]
dll.prepend(2);
dll.print(); //[2,6]
dll.prepend(1);
dll.print(); //[1,2,6]
dll.append(5);
dll.print(); //[1,2,6,5]
dll.prepend(0);
dll.print(); //[0,1,2,6,5]
dll.popFront(logData); //0
dll.print(); //[1,2,6,5]
dll.popBack(logData); //5
dll.print(); //[1,2,6]

console.log("----------");

//test popFront and popBack on empty list and list of length 1
var dll2 = DoublyLinkedList();
dll2.popFront(logData); //null
dll2.popBack(logData); //null
dll2.append(1);
dll2.popFront(logData); //1
dll2.append(2);
dll2.popBack(logData); //2