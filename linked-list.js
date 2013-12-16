var LinkedList = function() {
	this.head = null;
};

LinkedList.prototype = {
	insert: function(data) {
		console.log("calling insert(" + data + ")");
		var node = {
			data: data,
			next: null
		};
		if (this.head === null) {
			this.head = node;
		}
		else {
			var currNode = this.head;
			while (currNode.next !== null) {
				currNode = currNode.next;
			}
			currNode.next = node;
		}
		return this.head;
	},
	delete: function(index) {
		console.log("calling delete(" + index + ")");
		var currNode = this.head;
		var previous = {};
		if (index >= 0) {
			if (index === 0) {
				this.head = this.head.next;
				return this.head;
			}
			else {
				for (var i = 1; i <= index; i++) {
					if (currNode.next === null) {
						return null;
					}
					previous = currNode;
					currNode = currNode.next;
				}
				previous.next = currNode.next;
				return currNode;
			}
		}
		else {
			return null;
		}

	},
	print: function() {
		var results = [];
		var currNode = this.head;
		//while last.next != null
		while (currNode) {
			results.push(currNode.data);
			currNode = currNode.next;
		}
		console.log(results);
	}
};

var ll = new LinkedList();
console.log(ll.insert("hello"));
//  -> {data: "hello", next: null}
console.log(ll.insert("class"));
//  -> {data: "hello", next: {data: "class", next: null}}
console.log(ll.delete(1));

//  -> {data: "hello", next: null}
console.log(ll.insert("world"));
//  -> {data : "hello", next: {data: "world", next: null}}
ll.print();