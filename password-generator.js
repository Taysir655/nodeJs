const generatePassword = require('generate-password');


// Generate a random password
const password = generatePassword.generate({
  length: 5,  
  numbers: true,
  symbols: true,
  uppercase: true,
  strict: true,
});

console.log('Generated Password:', password);

