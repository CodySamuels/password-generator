// Assignment Code
var generateBtn = document.querySelector("#generate");


// Need arrays for Special Characters, Numeric Characters, Lowercase Characters, and Uppercase Characters
// var specialChars = "!@#$%^&*"(".split("")

// var possibleCharacters=[]

// Create generatePassword
// Prompt the User for password legnth.
// Store password length in a variable.
// Confirm whether the user wants special characters.
// creates a Boolean whether the user wants special characters. includeSpecialCharacters
// Confirm whether the user wants numeric characters.
// creates a Boolean whether the user wants numeric characters. includeNumericCharacters
// Confirm whether the user wants lowercase characters.
// creates a Boolean whether the user wants lowercase characters. includeLowerCaseCharacters
// Confirm whether the user wants uppercase characters.
// creates a Boolean whether the user wants uppercase characters. includeUpperCaseCharacters

// if character Boolean is true, add that array to the possible characters array.

// Then when we completed possibleCharacters array, build the new password string.

// var passwordStr=""

// return passwordStr

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Splitting an array is the way to go for combining the elements.