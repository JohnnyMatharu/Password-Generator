var passwordLength = prompt("Your password has to be between 8 to 128 characters, please enter the number of characters you wish, and press button 'Generate Password'");
console.log (passwordLength)


var passwordArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','´','{','|','}','~']

//Here you have to put the if statement for range, also anything entered except numerals is not valid

//check if the if statement is correct and at the right spot, also include accept only numbers, and it should continue and not only check once
if (passwordLength < 8 || passwordLength > 128) {
  var passwordLenght = prompt("Invalid number, password has to be between 8 to 128 characters, please choose again and press button 'Generate Password'");
}  

//HERE create for loop

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();

//check if we can use the value of password length
for (var i = 0; i < 93; i++) {
  var randomNumber = Math.floor(Math.random() * 93);
  //check the number that is multiplied with, right now is 3
  var passwordChoice = passwordArray[randomNumber];
  } 

  var password = passwordChoice;
  var passwordText = document.querySelector("#password");
// Here you can use something to display including .textcontent 
  passwordText.value = password;

}



//Read acceptance criteria and make sure everything is followed and incorporate anything missing to pseudocode
//have an array ready to be selected from for passwords, include all in one upper case and lower case alphabets, special characters, digits etc., if not then make multiple arrays consisting one of numbers, one for special characters etc. choose from each array equally and then ramie the final selection once more.
//Ask prompt, store as variable, ask for number digits and give error message if anything else is entered
//Run array function for number of times (for or while loop) mentioned in variable and form an array of randomly populated number, length should be same as entered by user
//connect the answer to display, make sure function returns the answer connect var password, save the returned value in event .. variable  
//you can allow the user to reset if possible  





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
