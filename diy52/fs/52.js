const fs = require('fs');

const content1 = 'hello clas welcome to nodejs';

fs.writeFile('fs.html', content1, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
  }
});


const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());


// Get platform and architecture information
const platform = os.platform();
const architecture = os.arch();
