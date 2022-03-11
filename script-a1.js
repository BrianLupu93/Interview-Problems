'use strict';

function sym(...arg) {
	let result = [];

	for (let i = 0; i <= arg.length - 1; i++) {
		result = compare(result, arg[i]);
	}

	return result.sort();
}

function compare(arg1, arg2) {
	const unic1 = arg1.filter((element) => !arg2.includes(element));
	const unic2 = arg2.filter((element) => !arg1.includes(element));

	const unicUnic = unic1.concat(unic2);
	return unicUnic.filter((element, index) => {
		return unicUnic.indexOf(element) === index;
	});
}

console.log(sym([ 3, 3, 3, 2, 5 ], [ 2, 1, 5, 7 ], [ 3, 4, 6, 6 ], [ 1, 2, 3 ], [ 5, 3, 9, 8 ], [ 1 ]));
