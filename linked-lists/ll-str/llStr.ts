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
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
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