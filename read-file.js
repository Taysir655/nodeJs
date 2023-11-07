const fs = require('fs');

//using the Node.js built-in "fs" module to create the "welcome.txt" file and read its content:
//  Create "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File "welcome.txt" created with content: Hello Node');
});


//  Read and console.log the content of "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content of "welcome.txt":', data);
});

