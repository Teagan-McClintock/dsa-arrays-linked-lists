"use strict";

/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);
    if (this.tail === null) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);
    if (this.head === null) {
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if (this.length === 0) {
      throw new IndexError("Empty list!");
    }
    else if (this.length === 1) {
      const removedNode = this.tail!;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }
    else {
      let curr = this.head!;
      while (curr.next !== this.tail) {
        curr = curr.next!;
      }
      const removedNode = this.tail;
      this.tail = curr;
      curr.next = null;
      this.length--;
      return removedNode!.val;
    }
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.length === 0) {
      throw new IndexError("Empty list!");
    }

    const removedNode = this.head;
    this.head = this.head!.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return removedNode!.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {

    if (idx >= this.length || idx < 0) { // check if idx is valid
      throw new IndexError("Index not found!");
    }

    let curr = this.head!;

    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        return curr.val;
      }
      curr = curr.next!;
    }

    throw new IndexError("Index not found!"); // please TS gods

  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {

    if (idx >= this.length || idx < 0) { // check if idx is valid
      throw new IndexError("Index not found!");
    }

    let curr = this.head!;

    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        curr.val = val;
      }
      curr = curr.next!;
    }

  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {

    const newNode = new NodeStr(val);

    if (this.length === 0 && idx === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else if (idx > this.length || idx < 0) { // check if idx is valid
      throw new IndexError("Index not found!");
    }
    else if (this.length === 1) {
      newNode.next = this.head; //head is updated outside if block
      this.length++;
    }
    else {
      let curr = this.head!;

      for (let i = 0; i < this.length; i++) {
        if (i === idx-1) {
          newNode.next = curr.next;
          curr.next = newNode;

          if (i === this.length - 1) {
            this.tail = newNode; // if inserting it @ last value, make it tail
          }
        }

        curr = curr.next || newNode;
      }
      this.length++;
    }

    //if was inserted before head, need to update head
    if (idx === 0) {
      this.head = newNode;
    }

  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {

      if (this.length === 0 || idx >= this.length || idx < 0) {
        throw new IndexError("Index not found!");
      }
      else if (this.length === 1) {
        const removeMe = this.head!.val;
        this.head = null;
        this.tail = null;
        this.length--;
        return removeMe;
      }
      else if (idx === 0) { // if it's the head we're removing
        const removeMe = this.head!.val;
        this.head = this.head!.next!;
        this.length--;
        return removeMe;
      }
      else if (idx === this.length - 1) { // if it's the tail we're removing

        let curr = this.head!;

        const removeMe = this.tail!.val;

        for (let i = 0; i < this.length - 1; i++) {
          if (i === idx - 1) { // replacing the tail
            this.tail = curr;
          }
          curr = curr.next!;
        }

        this.length--;
        return removeMe;
      }
      else { // if we're removing something in the middle (but this will get refactored soon)

        let curr = this.head!;

        for (let i = 0; i < this.length - 1; i++) {
          if (i === idx - 1) { // the value before we want to remove

            const beforeRemoveMe = curr;
            const afterRemoveMe = curr.next!.next;
            const removeMe = beforeRemoveMe.next!.val;

            beforeRemoveMe.next = afterRemoveMe;
            this.length--;
            return removeMe;
          }
          curr = curr.next!;
        }

      }

    throw new IndexError("Index not found!");
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};