
//node class
class Node {
  constructor(data) {
      this.data = data;
      this.prev=null;
      this.next=null;
  }
  // Get the next node of a given node
  getNext(node) {
    return node.next;
}

// Get the previous node of a given node
getPrevious(node) {
    return node.prev;
}
}




//exporting the image circular data structure 
export class CircularLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Add a node to the end of the list
  append(data) {
      const newNode = new Node(data);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
          this.tail.next = this.head; // Make the new node circular
      }
  }
}
