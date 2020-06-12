// Assignment Code
var generateBtn = document.querySelector("#generate");

// My various variables.
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



// Create generatePassword (a function)
function generatePassword() {
  var finalPassword = '';
  var desiredChars = [];

  // Prompt the User for password legnth, and store the password length in a variable.
  var passwordLength = prompt("How long do you want your password to be? Password must be 8-128 characters.");
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Please only choose a value between 8 and 128.");
  }
  var passwordLength=parseInt(passwordLength);
  
  // Confirm whether the user wants lowercase characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
  var includeLowercasePassword = confirm("Do you want lowercase letters in your password?");
  if (includeLowercasePassword === true) {
    desiredChars = desiredChars.concat(lowercaseLetters);
  };

  // Confirm whether the user wants uppercase characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
  var includeUppercasePassword = confirm("Do you want uppercase letters in your password?");
  if (includeUppercasePassword === true) {
    desiredChars = desiredChars.concat(uppercaseLetters);
  };

  // Confirm whether the user wants special characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
  var includeSpecialPassword = confirm("Do you want special characters in your password?");
  if (includeSpecialPassword === true) {
    desiredChars = desiredChars.concat(specialChar);
  };

  // Confirm whether the user wants numeric characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
  var includeNumericPassword = confirm("Do you want numeric characters in your password?");
  if (includeNumericPassword === true) {
    desiredChars = desiredChars.concat(numericChar);
  };

  // This generates one character of the password. This loops a number of times equal to passwordLength.
  for (let i = 0; i < passwordLength; i++) {
    var passwordStr = desiredChars[Math.floor(Math.random() * desiredChars.length)];
    var finalPassword = finalPassword.concat(passwordStr);
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);