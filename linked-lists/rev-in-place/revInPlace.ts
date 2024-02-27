"use strict";

import { LLStr, LLNodeStr } from "../common/ll";


/** reverseInPlace() reverse list in place.*/

function reverseInPlace(lst: LLStr): void {
  // head.next -> null
  // everything else, switch next and prev (not that we have prev)

  // Switching two nodes' values, starting at center and working out?
  // Swapping pointers
  /**
   * a -> b -> c
   *
   * LOOP
   *
   * tempNext = a.next (b)
   * a.next = null (because tail) - set as tail, and store c in oldTail
   * prev = a
   * GOTO tempNext (next loop through)
   * tempNext = b.next (c)
   * b.next = prev (a)
   * prev = b
   * GOTO tempNext
   * Check oldTail, find c, since it matches, set c to head
   * c.next = prev (b)
   * prev = c (irrelevant)
   *
   * END LOOP
   *
   *
   * c -> b -> a -> null
   *
   */

  // FIXME: assumes there is at least 1 thing in here
  // handle 1 value edge cases if needed?

  const oldTail = lst.tail;

  let curr = lst.head!;
  let prev: Node;
  let next: Node;

  for (let i = 0; i < lst.length; i++) {

    const tempNext = curr.next;
    const prev = curr;

    if (curr === lst.head) {
      curr.next = null;
      lst.tail = curr;
    }



    // curr =
  }


  return lst;
}


export { reverseInPlace };