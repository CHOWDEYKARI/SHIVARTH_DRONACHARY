const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!\n');
  } else if (req.url === '/home/filter') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Filter Page.\n');
  } else if (req.url === '/details') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Here are the Details.\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found.\n');
  }
});

const PORT = 8900;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
