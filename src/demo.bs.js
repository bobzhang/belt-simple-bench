// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

import * as Belt_MapInt from "../node_modules/bs-platform/lib/es6/belt_MapInt.js";

function check(b) {
  if (b) {
    return 0;
  } else {
    throw new Error("impossible");
  }
}

function test() {
  var m = Belt_MapInt.empty;
  for(var i = 0; i <= 1000000; ++i){
    m = Belt_MapInt.set(m, i, i);
  }
  for(var i$1 = 0; i$1 <= 1000000; ++i$1){
    check(Belt_MapInt.has(m, i$1));
  }
  return /* () */0;
}

console.time("buckle");

test(/* () */0);

console.timeEnd("buckle");

export {
  
}
/*  Not a pure module */
