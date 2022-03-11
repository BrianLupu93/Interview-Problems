'use strict';

function updateInventory(arr1, arr2) {
	updateAmmount(arr1, arr2);
	updateProduct(arr1, arr2);
	function callback(a, b) {
		return a[1].localeCompare(b[1]);
	}
	console.log(arr1);
	return arr1.sort(callback);
}

function updateAmmount(arr1, arr2) {
	for (let i = 0; i <= arr2.length - 1; i++) {
		let arr2ProductName = arr2[i][1];
		let arr2ProductAmmount = arr2[i][0];
		for (let j = 0; j <= arr1.length - 1; j++) {
			let arr1Element = arr1[j];
			let arr1ElementAmmount = arr1[j][0];
			if (arr1Element.includes(arr2ProductName)) {
				arr1ElementAmmount = arr1ElementAmmount + arr2ProductAmmount;
				arr1[j][0] = arr1ElementAmmount;
			}
		}
	}
	return arr1;
}

function updateProduct(arr1, arr2) {
	const productsNames = [];
	for (let i = 0; i <= arr1.length - 1; i++) {
		productsNames.push(arr1[i][1]);
	}
	for (let j = 0; j <= arr2.length - 1; j++) {
		let product = arr2[j][1];
		if (!productsNames.includes(product)) {
			arr1.push(arr2[j]);
		}
	}

	return arr1;
}

updateInventory(
	[ [ 0, 'Bowling Ball' ], [ 0, 'Dirty Sock' ], [ 0, 'Hair Pin' ], [ 0, 'Microphone' ] ],
	[ [ 1, 'Hair Pin' ], [ 1, 'Half-Eaten Apple' ], [ 1, 'Bowling Ball' ], [ 1, 'Toothpaste' ] ]
);
