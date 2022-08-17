// Node.js represents one data point in a linked list
// a node needs to have the value (Data that it is to store)
// AND a reference (aka pointer) to its neightbour

class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;    
    }
    // interface of the class is basically
    // how other code can make use of the class (i.e the functionalities)
    setValue(value){
        this.value =value;
    }
    getValue(){
        return this.value;
    }
    getNext(){
        return this.next;
    }
    // the next 'argument' is supposed to be a Node or null
    setNext(next){
        this.next = next
    }
}

module.exports = Node;