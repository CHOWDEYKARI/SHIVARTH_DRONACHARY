const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the About Page!\n');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Contact Page.\n');
  } else if (req.url === '/services') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Here are our Services.\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found.\n');
  }
});

const PORT = 8902;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
