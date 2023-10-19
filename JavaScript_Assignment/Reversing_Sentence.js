// Function to reverse a word 
function reverseWord(word) {
  return word.split('').reverse().join('');
}

// Function to reverse every word in a sentence
function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => reverseWord(word));
  return reversedWords.join(' ');
}

// Code to Input sentence from the user
const inputSentence = prompt("Enter a sentence:");

//Code to Check if the user provided a sentence
if (inputSentence !== null && inputSentence.trim() !== "") {
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed sentence: " + reversedSentence);
} else {
  console.log("Sentence not Provided. Please enter a sentence.");
}
