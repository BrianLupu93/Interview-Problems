'use strict';

function pairwise(arr, arg) {
	let indexSum = 0;
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			console.log(arr[i], arr[j]);

			if (arr[j] != undefined) {
				if (arr[i] + arr[j] == arg) {
					indexSum += i + j;
					delete arr[j];
					j = len;
				}
			}
		}
	}
	console.log(indexSum);
	return indexSum;
}
pairwise([ 1, 4, 2, 3, 0, 5 ], 7);
