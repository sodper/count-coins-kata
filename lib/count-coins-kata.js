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
		dimes = Math.floor(x / 10),
		quarters = Math.floor(x / 25);

	if (x < 5) {
		counts.push([0,0,0, pennies]);
	} else if (x < 10) {
		counts.push([0,0, nickels, 0]);
		counts.push([0,0,0, pennies]);
	} else if (x < 25) {
		while (dimes > 0) {
			var nickelCount = nickels - (2*dimes);
			var pennieCount = pennies - (10*dimes) - (5*nickelCount);
			counts.push([0, dimes, nickelCount, pennieCount]);

			while (nickelCount > 0) {
				nickelCount--;
				var pennieCount2 = pennies - (10*dimes) - (5*nickelCount);
				counts.push([0, dimes, nickelCount, pennieCount2]);
			}

			dimes--;
		}
		
		while (nickels > 0) {
			counts.push([0, 0, nickels, pennies-(5*nickels)]);
			nickels--;
		}
		
		counts.push([0,0,0,x]);
	} else {
		while (quarters > 0) {
			var dimeCount = dimes - Math.floor(2.5*quarters);
			var nickelCount2 = nickels - (5*quarters) - (10*dimeCount);
			var pennieCount3 = pennies - (25*quarters) - (10*dimeCount) - (5*nickelCount2);
			counts.push([quarters, dimeCount, nickelCount2, pennieCount3]);

			while (dimeCount > 0) {
				var nickelCount3 = nickels - (2*dimeCount);
				var pennieCount4 = pennies - (10*dimeCount) - (5*nickelCount3);
				counts.push([0, dimeCount, nickelCount3, pennieCount4]);

				while (nickelCount3 > 0) {
					nickelCount3--;
					var pennieCount5 = pennies - (10*dimeCount) - (5*nickelCount3);
					counts.push([0, dimeCount, nickelCount3, pennieCount5]);
				}

				dimeCount--;
			}

			while (dimes > 0) {
				var nickelCount4 = nickels - (2*dimes);
				var pennieCount6 = pennies - (10*dimes) - (5*nickelCount4);
				counts.push([0, dimes, nickelCount4, pennieCount6]);

				while (nickelCount4 > 0) {
					nickelCount4--;
					var pennieCount7 = pennies - (10*dimes) - (5*nickelCount4);
					counts.push([0, dimes, nickelCount4, pennieCount7]);
				}

				dimes--;
			}

			while (nickels > 0) {
				counts.push([0, 0, nickels, pennies-(5*nickels)]);
				nickels--;
			}

			quarters--;
		}
		counts.push([0,0,0,x]);
	}
  return counts;
};
