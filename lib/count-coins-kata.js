/*
 * count-coins-kata
 * https://github.com/sodper/count-coins-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

exports.count = function(x) {
	var counts = [], 
		pennies = x, 
		nickels = Math.floor(x / 5), 
		dimes = Math.floor(x / 10);
	//	quarters = Math.floor(x / 25);

	if (x < 5) {
		counts.push([0,0,0, pennies]);
	} else if (x < 10) {
		counts.push([0,0, nickels, 0]);
		counts.push([0,0,0, pennies]);
	} else if (x < 25) {
		while (dimes > 0) {
			var nickelCount = nickels-(2*dimes);
			var pennieCount = pennies-(5*nickelCount);
			counts.push([0, dimes, nickelCount, pennieCount]);
			dimes--;
		}
		
		while (nickels > 0) {
			counts.push([0, 0, nickels, pennies-(5*nickels)]);
			nickels--;
		}
		
		counts.push([0,0,0,x]);
	}
  return counts;
};
