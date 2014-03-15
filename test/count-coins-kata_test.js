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
    testCount(test, 8, [[0,0,1,3],[0,0,0,8]]);
  },
  '10 cents makes 4 change': function(test) {
    testCount(test, 10, [
      [0,1,0,0],
      [0,0,2,0],
      [0,0,1,5],
      [0,0,0,10]]);
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
  '18 cents makes 6 change': function(test) {
    testCount(test, 18, [
      [0,1,1,3],
      [0,1,0,8],
      [0,0,3,3],
      [0,0,2,8],
      [0,0,1,13],
      [0,0,0,18]
    ]);
  },
  '20 cents makes 9 change': function(test) {
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
  '23 cents makes 9 change': function(test) {
    testCount(test, 23, [
      [0,2,0,3],
      [0,1,2,3],
      [0,1,1,8],
      [0,1,0,13],
      [0,0,4,3],
      [0,0,3,8],
      [0,0,2,13],
      [0,0,1,18],
      [0,0,0,23]
    ]);
  },
  '25 cents makes 13 change': function(test) {
    testCount(test, 25, [
      [1,0,0,0],
      [0,2,1,0],
      [0,2,0,5],
      [0,1,3,0],
      [0,1,2,5],
      [0,1,1,10],
      [0,1,0,15],
      [0,0,5,0],
      [0,0,4,5],
      [0,0,3,10],
      [0,0,2,15],
      [0,0,1,20],
      [0,0,0,25]
    ]);
  },
  '100 cents makes 235 change': function(test) {
    test.expect(1);
    test.equal(coins.count(100).length, 235);
    test.done();
  }
};

exports.getChangeForPennies = {
  '5 pennies makes 1 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForPennies(0,0,0,5), [
      [0,0,0,5]
    ]);
    test.done();
  }
};

exports.getChangeForNickels = {
  '1 nickel makes 2 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForNickels(0,0,1,0), [
      [0,0,1,0],
      [0,0,0,5]
    ]);
    test.done();
  },
  '3 nickels makes 4 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForNickels(0,0,3,0), [
      [0,0,3,0],
      [0,0,2,5],
      [0,0,1,10],
      [0,0,0,15]
    ]);
    test.done();
  }
};

exports.getChangeForDimes = {
  '1 dime makes 4 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForDimes(0,1,0,0), [
      [0,1,0,0],
      [0,0,2,0],
      [0,0,1,5],
      [0,0,0,10]
    ]);
    test.done();
  },
  '3 dimes makes 16 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForDimes(0,3,0,0), [
      [0,3,0,0],
      [0,2,2,0],
      [0,2,1,5],
      [0,2,0,10],
      [0,1,4,0],
      [0,1,3,5],
      [0,1,2,10],
      [0,1,1,15],
      [0,1,0,20],
      [0,0,6,0],
      [0,0,5,5],
      [0,0,4,10],
      [0,0,3,15],
      [0,0,2,20],
      [0,0,1,25],
      [0,0,0,30]
    ]);
    test.done();
  }
};

exports.getChangeForQuarters = {
  '1 quarter makes 13 change': function(test) {
    test.expect(1);
    test.deepEqual(coins.getChangeForQuarters(1,0,0,0), [
      [1,0,0,0],
      [0,2,1,0],
      [0,2,0,5],
      [0,1,3,0],
      [0,1,2,5],
      [0,1,1,10],
      [0,1,0,15],
      [0,0,5,0],
      [0,0,4,5],
      [0,0,3,10],
      [0,0,2,15],
      [0,0,1,20],
      [0,0,0,25]
    ]);
    test.done();
  }
};