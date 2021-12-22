// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    
    var length = prompt('Input number of characters (from 8-128)',8);
    if (length<8 || length>128) {
        alert("Must be between 8 and 128")
        return;
    } ;
  
    var lowerCase = confirm("Do you want to include lowercase letters?");
    var upperCase = confirm("Do you want to include Uppercase letters?");
    var numbers = confirm("Do you want to include Numbers?");
    var specialChar = confirm("Do you want to include Special Characters?");
  
    if (!lowerCase && !upperCase && !numbers && !specialChar) {
        alert("You must select at least one type of character")
        return;
    }
  
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var upCase = lowCase.toUpperCase();
    var nums = "1234567890";
    var spec = "!@#$%^&*()-=_+";
    var characters = "";
    if (lowerCase == true) {
        var characters = characters.concat(lowCase);
    }
    if (upperCase) {
      var characters = characters.concat(upCase);
    }
    if (numbers) {
      var characters = characters.concat(nums);
    }
    if (specialChar) {
      var characters = characters.concat(spec);
    } 
  
    var randomPassword = ""
    
    for (let i = 0; i < length; i++) {
        randomPassword += characters.charAt(Math.floor(Math.random() * length));
        }
    return randomPassword
    }

