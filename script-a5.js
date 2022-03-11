'use strict';
function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			moveToIndex(array, i + 1, i);
			i = 0;
		}
	}
	console.log(array);
	return array;
}

function moveToIndex(arr, fromIndex, toIndex) {
	const element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
}

bubbleSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
