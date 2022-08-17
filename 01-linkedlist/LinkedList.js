class LinkedList {
    constructor (){
        // if the head is null it means the linked list is empty
        this.head = null;
        // this.tail = null; can set tail as well
    };
    push(newNode){
        // if linked list is empty, i.e the head is null
        if(this.head == null){
            this.head = newNode;
        } else {
            let current = this.head;
            // move current until it reaches the last node in the list
            while (current.getNext() != null){
                current =current.getNext();
            }
            current.next = newNode;
        }
    };
    // push is o(n) because if there is 10 list items, it has to run 10 times.

    print(){
        let current = this.head;
        while (current != null){
            console.log(current.getValue());
            current = current.getNext();
        };
    };

    insertAt (index,newNode){
        if(this.head == null){
            return;
        } else {
            let current = this.head;
            for (let i = 0; i < index-1; i++){
                current = current.getNext();
            }
            newNode.setNext (current.getNext());
            current.setNext (newNode);
        }
    }

    deleteAt (index){
        if(this.head==null){
            return;
        }
        if(index == 0){
            this.head = this.head.getNext();
            // no need to explicitly delete the old head
            // because there are no variables referring to it
            // therefore it is automatically delete
            // i.e garbage collection
        }
        else {
            // move current so that it is just one node before the one to be deleted
            let current = this.head;
            for (let i=0;i<index-1;i++){
                current = current.getNext();
            }
            // current should refer to one node befor the one to be deleted, i.e D

            // the next of Before should be the next of D
            const toBeDeleted = current.getNext();
            current.setNext(toBeDeleted.getNext());
        }
    }
};

module.exports = LinkedList;