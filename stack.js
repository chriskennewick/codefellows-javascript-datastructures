function Stack() {
  var top = null;

  function createItem(data) {
    var prev = null;

    function getData() {
      return data;
    }

    function getPrev() {
      return prev;
    }

    function setPrev(item) {
      prev = item;
    }

    return {
      getData: getData,
      getPrev: getPrev,
      setPrev: setPrev
    };
  }

  function push(data) {
    if (top === null) {
      top = createItem(data);
    }
    else {
      var newItem = createItem(data);
      newItem.setPrev(top);
      top = newItem;
    }
  }

  function pop(callback) {
    var err = null,
      value = null;
    if (top === null) {
      err = "Underflow";
    }
    else {
      value = top.getData();
      top = top.getPrev();
    }
    if (callback) {
      callback(err, value);
    }
  }

  function printStack() {
    var currTop = top;
    var result = [];
    while (currTop !== null) {
      result.unshift(currTop.getData());
      currTop = currTop.getPrev();
    }
    console.log(JSON.stringify(result));
  }

  return {
    push: push,
    pop: pop,
    printStack: printStack
  };
}

module.exports = Stack;

var test = function(err, value) {
  console.log("The err is: " + err);
  console.log("The value is: " + value);
};

var s = Stack();
s.printStack();
s.pop(test);
s.printStack();
s.push("item1");
s.printStack();
s.push(3);
s.printStack();
s.push("item3");
s.printStack();
s.pop(test);
s.printStack();
s.pop(test);
s.printStack();
s.pop(test);
s.printStack();
s.pop(test);
s.printStack();