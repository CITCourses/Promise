'use strict';

const div = (x, y) => {
  return new Promise((resolve, reject) => {
    if (y === 0) reject(new Error('На ноль делить нельзя!'));
    resolve(x / y);
  });
};

div(4, 2)
  .then(
    result => console.log(result),
    error => console.log(error.message)
  );

div(4, 0)
  .then(
    result => console.log(result),
    error => console.log(error.message)
  );