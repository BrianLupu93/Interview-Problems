function findLongestWordLength(str) {
	const arrStr = [ ...str ];

	let count = 0;
	let wordLength = 0;
	let countIsSpace = false;
	for (let i = 0; i <= arrStr.length - 1; i++) {
		if (arrStr[i] == ' ') {
			countIsSpace = true;
		}
		if (countIsSpace) {
			if (count >= wordLength) {
				wordLength = count;
				count = 0;
				countIsSpace = false;
			} else {
				count = 0;
				countIsSpace = false;
			}
		} else if (!countIsSpace) {
			count++;
		}
		if (count >= wordLength) {
			wordLength = count;
		}
		console.log(count);
	}
	console.log(wordLength);
	return wordLength;
}
findLongestWordLength('What if we try a super-long word such as otorhinolaryngology');
