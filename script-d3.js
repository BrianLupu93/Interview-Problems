'use strict';
function frankenSplice(arr1, arr2, n) {
	const arr1Copy = [ ...arr1 ];
	const arr2Copy = [ ...arr2 ];
	arr2Copy.splice(n, 0, ...arr1Copy);
	return arr2Copy;
}

frankenSplice([ 'claw', 'tentacle' ], [ 'head', 'shoulders', 'knees', 'toes' ], 2);
