
// Create HTML content
const content = `
<!DOCTYPE html>
<html>
<head>
  <title>OS Information</title>
</head>
<body>
  <h1>OS Information</h1>
  <p>Platform: ${platform}</p>
  <p>Architecture: ${architecture}</p>
</body>
</html>
`;

// Write the content to an HTML file
fs.writeFile('52.html', content, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
  }
});
