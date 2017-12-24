function vowelSearch(letter) {
    var vowels = 'aeiou', max = 4, min = 0;
    while (min <= max) {
        var mid = Math.ceil((max + min) / 2);
        if (letter == vowels[mid])
            return vowels[mid];
        if (letter < vowels[mid])
            max = mid - 1;
        else
            min = mid + 1;
    }
    return null;
}

function countVowels(word) {
    var vowelSum = a = e = i = o = u = 0;
    for (let j = 0; j < word.length; j++) {
        switch (vowelSearch(word[j])) {
            case 'a':
                a++;
                break;
            case 'e':
                e++;
                break;
            case 'i':
                i++;
                break;
            case 'o':
                o++;
                break;
            case 'u':
                u++;
                break;
            default:
                break;
        }
    }

    var vowel = function (letter) {
        if (letter == 'a')
            return a;
        if (letter == 'e')
            return e;
        if (letter == 'i')
            return i;
        if (letter == 'o')
            return o;
        if (letter == 'u')
            return u;
        else
            return -1;
    }
    return vowel;
}

var sum = countVowels('antidisestablishmentarianism');
var a = sum('a'), e = sum('e'), i = sum('i'), o = sum('o'), u = sum('u');
var total = a + e + i + o + u;
console.log('There are ' + a + ' As.\nThere are ' + e + ' Es.\nThere are ' + i + ' Is.\nThere are ' + o + ' Os.\nThere are ' + u + ' Us.\nTotal vowels: ' + total);

/*
    There are 4 As.
    There are 2 Es.
    There are 5 Is.
    There are 0 Os.
    There are 0 Us.
    Total vowels: 11
*/