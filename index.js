const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n';
  res.end(msg);
};

const server = http.createServer(requestHandler);

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

module.exports = { server, requestHandler };
