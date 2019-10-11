const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Woooorld!! 🗺️\n');
});

// https://nodejs.org/api/net.html#net_server_listen : If hostname is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise.

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
