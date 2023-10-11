class DoublyNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new DoublyNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new DoublyNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.tail.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.head.val;
    if (this.headd === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx === 0) {
      this.unshift(val);
      return;
    }
    if (idx >= this.length) {
      this.push(val);
      return;
    }
    const newNode = new DoublyNode(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    const val = current.val;
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }

  /** reverse(): Reverse the linked list in place */
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      //Swap the next and previous pointers for the current node.
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      //Move the next node
      current = temp;
    }

    //Swap the head and tail pointers
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  /** mergeSortedLists(a, b): Merge two sorted linked lists 'a' and 'b' into a new sorted list. */
  static mergeSortedLists(a, b) {
    const mergedList = new DoublyLinkedList();

    let aCurrent = a.head;
    let bCurrent = b.head;

    while (aCurrent && bCurrent) {
      if (aCurrent.val < bCurrent.val) {
        mergedList.push(aCurrent.val);
        aCurrent = aCurrent.next;
      } else {
        mergedList.push(bCurrent.val);
        bCurrent = bCurrent.next;
      }
    }

    while (aCurrent) {
      mergedList.push(aCurrent.val);
      aCurrent = aCurrent.next;
    }

    while (bCurrent) {
      mergedList.push(bCurrent.val);
      bCurrent = bCurrent.next;
    }

    return mergedList;
  }

  /** pivot(value): Rearrange the list based on the given pivot value. */
  pivot(val) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let firstHalf = new DoublyLinkedList();
    let secondHalf = new DoublyLinkedList();

    while (current) {
      const next = current.next;
      current.next = null;

      if (current.val < val) {
        firstHalf.push(current.val);
      } else {
        secondHalf.push(current.val);
      }

      current = next;
    }

    if (firstHalf.head) {
      this.head = firstHalf.head;
      firstHalf.tail.next = secondHalf.head;
      this.tail = secondHalf.tail || firstHalf.tail;
    } else {
      this.head = secondHalf.head;
      this.tail = secondHalf.tail;
    }
  }
}

module.exports = DoublyLinkedList;
