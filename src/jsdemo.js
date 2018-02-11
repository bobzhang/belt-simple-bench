'use strict';

var Immutable = require('immutable');
var Map = Immutable.Map;
var m = new Map();
function check(b){
    if(!b){
        throw new Errror ("impossible")
    }
}
function test() {
  var count = 1000001;
  for(var i = 0; i < count; ++i) {
    m = m.set(i, i);
  }
  for(var j = 0; j < count; ++j) {
    check(m.has(j));
  }
}
console.time("jsdemo")
test();
console.timeEnd("jsdemo")