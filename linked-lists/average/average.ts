"use strict";

import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  if (lst.length === 0) {
    return 0;
  }
  else {
    let curr = lst.head!;
    let sum = 0;

    for (let i = 0; i < lst.length; i ++) {
      sum += Number(curr.val);
      if (curr.next) {
        curr = curr.next;
      }
    }

    return sum / lst.length;
  }
}

export { average };