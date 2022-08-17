const Node = require('./Node');
const n1 = new Node(42);
const n2 = new Node(43);
const n3 = new Node(101);
const n4 = new Node(-100);

n1.setNext(n2);
n2.setNext(n3);
n3.setNext(n4);
n4.setNext(null);

console.log(n1.getValue());
console.log(n1.getNext().getValue());
console.log(n1.getNext().getNext().getValue())

// use a while loop to print the entire linked list
// list tranversal is moving through a list from the head to the tail
const head = n1;
let current = head;
while(current != null){
    console.log(current.getValue());
    current = current.getNext();
}