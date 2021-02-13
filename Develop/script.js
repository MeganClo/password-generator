// Assignment code here
const specialChar = ["!", "-", "_", "?", "/", "@", "#", "$", "&", "*", ";", "=", "+", "%"];

const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var userChoice = [];

var password = "";


function getLength() {
  var lengthOf = parseInt(window.prompt("How many characters long would you like password to be? Must be at least 8 and no more than 128."));
  if (lengthOf >= 8 && lengthOf <= 128) {
    return lengthOf;
  } else {
    window.alert("Your choice must be no less than 8 and no more than 128.");
  getLength();
  }
};

function passwordArray() {
  var specialCharConfirm = window.confirm("Would you like your password to contain special characters?");
  if (specialCharConfirm) {
    (userChoice) = (specialChar);
  } else (userChoice) = (userChoice);

  var lowerAlphConfirm = window.confirm("Would you like your password to contain lowercase letters?");
  if (lowerAlphConfirm) {
    (userChoice) = userChoice.concat(lowerAlph);
  } else (userChoice) = (userChoice);

  var upperCaseConfirm = window.confirm("Would you like your password to contain uppercase letters?");
  if (upperCaseConfirm) {
    (userChoice) = userChoice.concat(upperCaseAlph);
  } else (userChoice) = (userChoice);

  var numbersConfirm = window.confirm("Would you like your password to contain numbers?");
  if (numbersConfirm) {
    (userChoice) = userChoice.concat(numbers);
  } else (userChoice) = (userChoice);

  if(userChoice.length <1) {
    window.alert("You much choose at least one option to create a password.")
    passwordArray();
  }
};

//function passwordGen() {
//  for(var i = 0; i <=lengthOf; i++);
//  password = password + Math.floor(Math.random() * userChoice.length);
//}


getLength();

passwordArray();

console.log(lenghtOf);

//passwordGen();

//console.log(passwordGen);

//console.log(userChoice);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
