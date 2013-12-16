var HashTable = function(initialSize, hashFunc) {
  var intRegex = /^\d+$/;
  if (isNaN(initialSize) || !intRegex.test(initialSize) || initialSize === 0) {
    throw new Error("Invalid initial size");
  }
  this.initialSize = initialSize;
  this.fillCount = 0;
  this.hashFunc = hashFunc;
  this.arr = new Array(initialSize);
};

var getChainIndex = function(key, chain) {
  if (chain !== undefined) {
    for (var i = 0; i < chain.length; i++) {
      if (chain[i].key === key) {
        return i;
      }
    }
  }
  return -1;
};

HashTable.prototype = {

  insert: function(key, value) {
    var code = this.hashFunc(key, this.arr.length);
    var chainIndex = getChainIndex(key, this.arr[code]);
    if (this.arr[code] === undefined) {
      this.arr[code] = [];
      this.arr[code].push({
        key: key,
        value: value
      });
      this.fillCount++;
    }
    else if (chainIndex >= 0) {
      this.arr[code][chainIndex].value = value;
    }
    else {
      this.arr[code].push({
        key: key,
        value: value
      });
    }
  },

  has: function(key) {
    var code = this.hashFunc(key, this.arr.length);
    var result = (getChainIndex(key, this.arr[code]) >= 0);
    return result;
  },

  percentFull: function() {
    return this.fillCount / this.arr.length;
  },

  printHash: function() {
    console.log(JSON.stringify(this.arr));
  }

};

//pass custom hash function to HashTable constructor
var getHashcode = function(key, length) {
  return key % length;
};

try {
  var invalidHash1 = new HashTable("hello", getHashcode);
}
catch (err) {
  console.log(err);
}

try {
  var invalidHash2 = new HashTable(2.9, getHashcode);
}
catch (err) {
  console.log(err);
}

try {
  var invalidHash3 = new HashTable(-1, getHashcode);
}
catch (err) {
  console.log(err);
}

try {
  var invalidHash4 = new HashTable(0, getHashcode);
}
catch (err) {
  console.log(err);
}

var h1 = new HashTable(10, getHashcode);
h1.insert(30, "a");
h1.insert(20, "b");
h1.insert(100, "c");
h1.insert(100, "c2");
h1.insert(1, "a");
h1.insert(5, "a");
h1.insert(9, "a");
h1.printHash();
console.log(h1.percentFull()); //0.4
console.log(h1.has(20)); //true
console.log(h1.has(19)); //false