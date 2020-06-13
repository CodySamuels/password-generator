# password-generator

This is a very basic password generator. There was some provided code that basically when the generate password button is pressed, runs the functions, and then writes it to the text box.

The top of the code has my arrays of global variables. There's an array for each character set.

function generatePassword is the main code that I was required to write for the project. Inside the function we have some local variables
variables 'finalPassword' and 'desiredChars' starts empty, but will be filled by the user's input.

The first prompt asks if how long of a password they want generated. This is stored in an integer. There's a while loop to ensure that the user stays within the parameters of the assignment (8 to 128 characters).

https://codysamuels.github.io/password-generator/ss2.png
Shows the initial prompt.
https://codysamuels.github.io/password-generator/ss3.png
Shows the prompt when the user fails to enter a number between 8-128.


The next prompt asks if the user wants to use lowercase letters in their final password. This sets a boolean that if true concats the lowercase array into the desiredChars array. This is done for each of the character sets.

NOTE: If the user doesn't set any parameters it will return undefined and alert them to try again. Ideally it would just start the process all over again, but that's not implemented yet.

The next set of code is a loop that generates the final password. The loop runs a number of times equal to the user input. The result is then concated in the empty string finalPassword.

Finally, finalPassword is displayed in the text of the html's card.

https://codysamuels.github.io/password-generator/SS1.png


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```