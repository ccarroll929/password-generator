// New code: Added variables for password character types
let length = 8; 
let allChars = [];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numeric = ['0','1','2','3','4','5','6','7','8','9'];
let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '?', '<', '>']


// Assignment Code
let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
 

// Write password to the #password input
function writePassword() {
  getPrompts();
  password = generatePassword(); 
  let passwordText = document.querySelector("#password");
  passwordText.value= password; 
}


 // New Code: Added the generatePassword function with for loop  
function generatePassword() {
  let password = " "; 
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password = password + allChars[randomIndex]; 
  } 
  return password;

}
  
  //New code: Prompts for character length/types. 
function getPrompts() {
  allChars = [];
  length = parseInt(prompt("How many characters do you want the password to have? Choose a number between 8 and 128"));
  
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Error: Enter a valid number between 8 and 128"); 
    return false; 
  }
  if (confirm("Do you want your password to contain lowercase letters?")) {
    allChars = allChars.concat(lowerCase);
  }
  if (confirm("Do you want your password to contain uppercase letters?")) {
    allChars = allChars.concat(upperCase);
  }
  if (confirm("Do you want your password to contain numbers?")) {
      allChars = allChars.concat(numeric);
    }
  if (confirm("Do you want your password to contain symbols?")) {
      allChars = allChars.concat(specialChars);
    }
  return true; 
  }

