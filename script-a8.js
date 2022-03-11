'use strict';
function quickSort(array) {
	if (array.length === 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	const leftArray = [];
	const rightArray = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			leftArray.push(array[i]);
		} else {
			rightArray.push(array[i]);
		}
	}
	if (leftArray.length > 0 && rightArray.length > 0) {
		return [ ...quickSort(leftArray), pivot, ...quickSort(rightArray) ];
	} else if (leftArray.length > 0) {
		return [ ...quickSort(leftArray), pivot ];
	} else {
		return [ pivot, ...quickSort(rightArray) ];
	}
}
quickSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
