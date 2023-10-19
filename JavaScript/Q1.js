const readlineSync = ;

function reverseWords(sentence) {
    return sentence.split(/\s+/).reverse().join(' ');
}

// Take input from the user
let inputSentence = readlineSync.question("Enter a sentence: ");

let reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence: " + reversedSentence);