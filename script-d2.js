function titleCase(str) {
	const arrStr = [ ...str ];
	const newArrStr = [];
	let count = 0;
	for (let i = 0; i < arrStr.length; i++) {
		let char = arrStr[i];
		if (char == ' ') {
			count = 0;
		} else {
			count++;
		}
		if (count == 1) {
			char = char.toUpperCase();
		} else {
			char = char.toLowerCase();
		}
		newArrStr.push(char);
	}
	const newStr = newArrStr.join('');
	console.log(newStr);
	return newStr;
}

titleCase('sHoRt AnD sToUt');
