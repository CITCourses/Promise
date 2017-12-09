'use strict';

let i = 0;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    i++;
    resolve(i);
  }, 1000);
});

promise
  .then(
    result => console.log(result),
    error => console.log(error)
  );
