/*
 * count-coins-kata
 * https://github.com/sodper/count-coins-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

 'use strict';

 var getChangeForPennies = function(quarters, dimes, nickels, pennies) {
  var change = [];

  change.push([quarters, dimes, nickels, pennies]);
  return change;
 };

 var getChangeForNickels = function(quarters, dimes, nickels, pennies) {
  var change = [];

  change = change.concat(getChangeForPennies(quarters, dimes, nickels, pennies));

  while (nickels > 0) {
    nickels--;
    pennies += 5;
    change = change.concat(getChangeForPennies(quarters, dimes, nickels, pennies));
  }

  return change;
 };

 var getChangeForDimes = function(quarters, dimes, nickels, pennies) {
  var change = [];

  change = change.concat(getChangeForNickels(quarters, dimes, nickels, pennies));
  
  while (dimes > 0) {
    dimes--;
    nickels += 2;
    change = change.concat(getChangeForNickels(quarters, dimes, nickels, pennies));
  }
  return change;
 };

 var getChangeForQuarters = function(quarters, dimes, nickels, pennies) {
  var change = [];

  change = change.concat(getChangeForDimes(quarters, dimes, nickels, pennies));
  
  while (quarters > 0) {
    quarters--;
    dimes += 2;
    nickels += 1;
    change = change.concat(getChangeForDimes(quarters, dimes, nickels, pennies));
  }
  return change;
 };

 exports.getChangeForPennies = getChangeForPennies;
 exports.getChangeForNickels = getChangeForNickels;
 exports.getChangeForDimes = getChangeForDimes;
 exports.getChangeForQuarters = getChangeForQuarters;

 exports.count = function(x) {
  var change = [],
    quarters = Math.floor(x / 25),
    dimes = Math.floor( (x - 25*quarters) / 10),
    nickels = Math.floor( (x - 25*quarters - 10*dimes) / 5), 
    pennies = x - 25*quarters - 10*dimes - 5*nickels;

  return change = change.concat(getChangeForQuarters(quarters, dimes, nickels, pennies));
 };
