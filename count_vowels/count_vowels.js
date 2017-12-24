function isVowel(letter) {
    var vowels = 'aeiou', max = 4, min = 0;
    while (min <= max) {
        var mid = Math.ceil((max + min) / 2);
        if (letter == vowels[mid])
            return true;
        if (letter < vowels[mid])
            max = mid - 1;
        else
            min = mid + 1;
    }
    return false;
}

function countVowels(word) {
    var vowelSum = 0;
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i]))
            vowelSum++;
    }

    return vowelSum;
}

var sum = countVowels('antidisestablishmentarianism');
console.log('There are ' + sum + ' vowels.');

// -> There are 11 vowels.