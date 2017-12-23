function reverseInput(input){
    let reversedInput = '';
    for(let i = input.length - 1; i >= 0; i--){
        reversedInput += input[i];
    }
    return reversedInput;
}

function printInput(){
    let input = 'spontaneous';
    let reversedInput = reverseInput(input);
    console.log(reversedInput);
}

printInput();