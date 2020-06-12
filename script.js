// Assignment Code
var generateBtn = document.querySelector("#generate");


// Need arrays for Special Characters, Numeric Characters, Lowercase Characters, and Uppercase Characters

// var specialChars = "!@#$%^&*"(".split("")
var specialChar = ['!','@','#','$','%','^','&','*'];
var numericChar = ['1','2','3','4','5','6','7','8','9','0'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var desiredChars =[];



// Create generatePassword (a fucntion)

// Prompt the User for password legnth, and store the password length in a variable.
var passwordLength = prompt("How long do you want your password to be? Password must be 8-128 characters.");
if (passwordLength >=8 && passwordLength <=128) {
  var passLength = parseInt(passwordLength);
};

// Confirm whether the user wants lowercase characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
var includeLowercasePassword = confirm("Do you want lowercase letters in your password?");
if (includeLowercasePassword===true) {
  desiredChars.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
};

// Confirm whether the user wants uppercase characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
var includeUppercasePassword = confirm("Do you want uppercase letters in your password?");
if (includeUppercasePassword===true) {
  desiredChars.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
};

// Confirm whether the user wants special characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
var includeSpecialPassword = confirm("Do you want special characters in your password?");
if (includeSpecialPassword===true) {
  desiredChars.push('!','@','#','$','%','^','&','*');
};

// Confirm whether the user wants numeric characters. Stores that in a boolean, and if so pushes those characters into desiredChars.
var includeNumericPassword = confirm("Do you want numeric characters in your password?");
if (includeNumericPassword===true) {
  desiredChars.push('1','2','3','4','5','6','7','8','9','0');
};
console.log(desiredChars);

// This generates one character of the password. This needs to loop *passwordLength
var passwordStr = desiredChars[Math.floor(Math.random() * desiredChars.length +1)];
console.log("======");
console.log(passwordStr);















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