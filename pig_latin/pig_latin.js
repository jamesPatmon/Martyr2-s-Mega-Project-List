function isVowel(letter) {
    var vowels = 'aeiou';
    for (let i = 0; i < vowels.length; i++) {
        if (letter == vowels[i]) return true;
    }
    return false;
}

function translate(word) {
    var prefix = '';
    var postfix = '';

    for (var i = 0; i < word.length; i++) {
        let isAVowel = isVowel(word[i]);
        if (!isAVowel) {
            postfix += word[i];
        } else {
            break;
        }
    }

    for (let j = i; j < word.length; j++) {
        prefix += word[j];
    }

    var translation = prefix + postfix + 'ay';
    return translation;
}

var consonant = translate('thanks');
var vowel = translate('omelet');
console.log(consonant + '\n' + vowel);

// -> anksthay
// -> omeletay
