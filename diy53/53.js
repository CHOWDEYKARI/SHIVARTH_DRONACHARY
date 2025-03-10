const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World1\nHello World12\n'); // Combine both responses into one
// });

const server =http.createServer((req, res)=>{
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello world')
});


const PORT = 8900;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
