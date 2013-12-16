var Stack = require('./stack');

var Hanoi = function(disk, source, dest, spare) {
  source.printStack();
  dest.printStack();
  spare.printStack();

  if (disk === 0) {
    source.pop(function(err, value) {
      dest.push(value);
    });
  }
  else {
    Hanoi(disk - 1, source, spare, dest);
    source.pop(function(err, value) {
      if (value !== null) {
        dest.push(value);
      }
    });
    Hanoi(disk - 1, spare, dest, source);
  }
};

var source = Stack();
var spare = Stack();
var dest = Stack();

source.push("----");
source.push("---");
source.push("--");
source.push("-");

console.log("=================");
console.log("Start of hanoi");
console.log("=================");

source.printStack();

Hanoi(4, source, dest, spare);

console.log("RESULT");
console.log("source:");
source.printStack();
console.log("spare:");
spare.printStack();
console.log("dest:");
dest.printStack();