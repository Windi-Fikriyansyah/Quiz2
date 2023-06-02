function maxWordLength(params) {
    const words = params.split(' ');
    let maxLength = 0;
    let maxWord = '';

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            maxWord = word;
        }
    }

    return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp