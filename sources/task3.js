'use strict';

const fs = require('fs');

const readFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFile('./task3.js')
  .then(
    result => console.log(result),
    error => console.log(error.message)
  );
