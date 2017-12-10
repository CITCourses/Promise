'use strict';

const http = require('http');
const fs = require('fs');

const readFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const routes = {
  '/': './html/index.html'
};

const server = http.createServer((req, res) => {
  readFile(routes[req.url])
    .then(
      result => {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });

        res.end(result);
      },
      error => {
        return readFile('./html/404.html');
      }
    )
    .then(
      error => {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });

        res.end(error);
      }
    );
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
