'use strict';

//================================================SOLUTION 1================================//
//
//
// function insertionSort(array) {
// 	for (let i = 1; i < array.length; i++) {
// 		// First, choose the element at index 1
// 		let current = array[i];
// 		let j;

// 		// Loop from right to left, starting from i-1 to index 0
// 		for (j = i - 1; j >= 0 && array[j] > current; j--) {
// 			// as long as arr[j] is bigger than current
// 			// move arr[j] to the right at arr[j + 1]
// 			array[j + 1] = array[j];
// 		}
// 		// Place the current element at index 0
// 		// or next to the smaller element
// 		array[j + 1] = current;
// 	}
// 	console.log(array);

// 	return array;
// }

// insertionSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
//

//================================================SOLUTION 2================================//
//
//
function insertionSort(array) {
	const arr = array.slice(); // copy of the original array (in this way the original array is not compromised)
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				[ arr[j], arr[j - 1] ] = [ array[j - 1], array[j] ];
			} else {
				break;
			}
		}
	}
	console.log(arr);
	return arr;
}

insertionSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
