function isPalindrome(word) {
  // Write your algorithm here
  //It accepts a word as input without special characters and akes it lowercase so as to have 1 
  //Splits the word into single charaters and stores it into an array
  //reverses the order of characters is an array
  //joins them into a single word.
}

/* 
  Add your pseudocode here
  initialize ispalindrome function with str parameter
  remove special characters  convert it to lowercase 
  return sting split it 
  join string
  print true if palindrome 
  print false if not palindrome



*/

/*
  Add written explanation of your solution here
  it takes a str as input replaces the special characters ,converts it to lowercase,
  splits he word into characters ,reverses the characters and joins them.
*/

// You can run `node index.js` to view these console logs
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
