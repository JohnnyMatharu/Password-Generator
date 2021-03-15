//Plese check acceptance criteria 
var passwordLength;

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {var criteria = confirm("Your password criteria consists of uppercase, lowercase, numbers, and special characters, press OK to continue");
//Add digit confirmation, join oKay to continue to previous statement if possible

if (criteria == true) {
  passwordLength = prompt("Please enter the number of digits for your password, has to be between 8 to 128 characters");  
  createPassword();
} 
 else 
 { prompt("Your pressed Cancel,  GoodBye !"); }
});
//get error confirmed, until then finish rest of codes



function promptUser() 
{
passwordLength = prompt("Please enter the number of digits for your password, has to be between 8 to 128 characters");
createPassword();

}


function createPassword ()
{

  var randomNumber = 0;

  let sc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let uc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let nu = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]
  let sp = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','´','{','|','}','~']
  var scuc = sc.concat(uc);
  var ucnu = uc.concat(nu);
  var nusp = nu.concat(sp);
  var spsc = sp.concat(sc);
  var scucnu = scuc.concat(nu);
  var ucnusp = ucnu.concat(sp);
  var nuspsc = nusp.concat(sc);
  var spscuc = spsc.concat(uc);
  var scucnusp = scucnu.concat(sp);

if (passwordLength < 8 || passwordLength > 128) 
{
alert("You have entered an invalid number, please provide digit within 8 to 128");
promptUser();
}
else if (passwordLength >= 8 || passwordLength <= 128) 
{
  var pass   = confirm("Please select the password mix, you have to choose atleast one character type, if don't want something, press CANCEL, if you wish to choose that option then you will press OK. PLease press OK now to continue");
  var scType = confirm ("Would you like small letters in the password?");
  var ucType = confirm ("Would you like capital letters in the password?");
  var nuType = confirm ("Would you like numerical digits in the password?");
  var spType = confirm ("Would you like special characters in the password?");
}
  
let passwordArray = [];

  if (!scType && !ucType && !nuType && !spType)
  {
    //ask user that they have to select atleast one type
    promptUser();
  }
  
  else if (scType && !ucType && !nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = sc[Math.floor(Math.random()*sc.length)];   
      passwordArray.push(randomNumber)
      console.log(randomNumber);
      console.log(passwordArray);
    }
  }
  
  else if (!scType && ucType && !nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = uc[Math.floor(Math.random()*uc.length)];   
      passwordArray.push(randomNumber)
    }
  }
  
  else if (!scType && !ucType && nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = nu[Math.floor(Math.random()*nu.length)];
      passwordArray.push(randomNumber)
    }
  }
  
  else if (!scType && !ucType && !nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = sp[Math.floor(Math.random()*sp.length)];   
      passwordArray.push(randomNumber)
    }
  }
  
  else if (scType && ucType && !nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = scuc[Math.floor(Math.random()*scuc.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (!scType && !ucType && nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = nusp[Math.floor(Math.random()*nusp.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (!scType && ucType && nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = ucnu[Math.floor(Math.random()*ucnu.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (scType && !ucType && !nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = scsp[Math.floor(Math.random()*scsp.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (scType && ucType && nuType && !spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = scucnu[Math.floor(Math.random()*scucnu.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (!scType && ucType && nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = ucnusp[Math.floor(Math.random()*ucnusp.length)];
      passwordArray.push(randomNumber)   
    }
  }
  
  else if (scType && ucType && !nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber =  spscuc[Math.floor(Math.random()*spscuc.length)]; 
      passwordArray.push(randomNumber)  
    }
  }
  
  else if (scType && !ucType && nuType && spType)
  {
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = nuspsc[Math.floor(Math.random()*nuspsc.length)];  
      passwordArray.push(randomNumber) 
    }
  }
  
  else if (scType && ucType && nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scucnusp[Math.floor(Math.random()*scucnusp.length)];  
     passwordArray.push(randomNumber) 
  
    }
}

  
        document.querySelector("#password").value = passwordArray.join("")
      // Make sure lat question prompt is visible for special characters
  
}




