'use strict';

var coins = require('../lib/count-coins-kata.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var testCount = function(test, x, expected) {
  test.expect(1);
  test.deepEqual(coins.count(x), expected);
  test.done();
};

exports.coins = {
  '0 cents makes 0 change': function(test) {
    testCount(test, 0, [[0,0,0,0]]);
  },
  '1 cent makes 1 change': function(test) {
    testCount(test, 1, [[0,0,0,1]]);
  },
  '3 cent makes 1 change': function(test) {
    testCount(test, 3, [[0,0,0,3]]);
  },
  '5 cents makes 2 change': function(test) {
    testCount(test, 5, [[0,0,1,0],[0,0,0,5]]);
  },
  '8 cents makes 2 change': function(test) {
    testCount(test, 8, [[0,0,1,0],[0,0,0,8]]);
  },
  '10 cents makes 3 change': function(test) {
    testCount(test, 10, [[0,1,0,0],[0,0,2,0],[0,0,0,10]]);
  },
  '12 cents makes 4 change': function(test) {
    testCount(test, 12, [
      [0,1,0,2],
      [0,0,2,2],
      [0,0,1,7],
      [0,0,0,12]]);
  },
  '15 cents makes 6 change': function(test) {
    testCount(test, 15, [
      [0,1,1,0],
      [0,1,0,5],
      [0,0,3,0],
      [0,0,2,5],
      [0,0,1,10],
      [0,0,0,15]
    ]);
  },
  '20 cents makes 3 change': function(test) {
    testCount(test, 20, [
      [0,2,0,0],
      [0,1,2,0],
      [0,1,1,5],
      [0,1,0,10],
      [0,0,4,0],
      [0,0,3,5],
      [0,0,2,10],
      [0,0,1,15],
      [0,0,0,20]
    ]);
  },
};
