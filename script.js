  // Assignment Code
  let generateBtn = document.querySelector("#generate");

  // Variables
  let passwordHolder = "";
  let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "123456789";
  let special = "+-&!(){}[]^~*?:";

  // Add event listener to generate button
  document.getElementById('generate').addEventListener('click', (event) => {

    // Prompts

    let numOfChar = prompt('How many characters do you want in your password? (8 - 128)');

    if (numOfChar > 128 || numOfChar < 8 ) {
      alert('Sorry, please choose a number between 8 and 128.')
    };

    let lowerConfirm = confirm('Do you want lower case letters?');
    let upperConfirm = confirm('Do you want upper case letters?');
    let numbersConfirm = confirm('Do you want numbers?');
    let specialConfirm = confirm('Do you want special characters? (i.e. !, $, #)');

    if (lowerConfirm === false && upperConfirm === false && numbersConfirm === false && specialConfirm === false) {
      alert('Sorry, you must choose atleast one character type. Try again.');
    };

    // Add user defined characters

    if (lowerConfirm) {
      passwordHolder += lowerLetters;
    }
    if (upperConfirm) {
      passwordHolder += upperLetters;
    }
    if (numbersConfirm) {
      passwordHolder += numbers;
    } 
    if (specialConfirm) {
      passwordHolder += special;
    }

    // Shuffle characters

    passwordHolder = passwordHolder.split('');

    for (let i = passwordHolder.length; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [passwordHolder[i], passwordHolder[j]] = [passwordHolder[j], passwordHolder[i]];
    }

    passwordHolder = passwordHolder.join('');


    // Limits length of characters by user input

    passwordHolder = passwordHolder.slice(0, numOfChar);

    // Write password to the #password input

    writePassword();

  });


  // Write password to the #password input
  function writePassword() {
  
  let passwordText = document.querySelector("#password");
  let password = passwordHolder;
  passwordText.value = password;

  };
  

  