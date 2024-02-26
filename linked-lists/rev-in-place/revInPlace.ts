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
}


export { reverseInPlace };