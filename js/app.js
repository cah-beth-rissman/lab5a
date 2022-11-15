'use strict';

function sum(a, b) { //eslint-disable-line
  let totalSum = a + b;
  let message = 'The sum of ' + a + ' and ' + b + ' is ' + totalSum + '.';
  return [totalSum, message];
}

sum(4, 7);

testSum(4, 7);

function multiply(a, b) { //eslint-disable-line
  let totalProduct = a * b;
  let message = 'The product of ' + a + ' and ' + b + ' is ' + totalProduct + '.';
  return [totalProduct, message];
}

testMultiply(5,9);


function sumAndMultiply(a, b, c) { //eslint-disable-line

  let sumNumber =   sum(sum(a,b)[0],c)[0];
  let productNumber = multiply(multiply(a,b)[0],c)[0];
  let message1 = `${a} and ${b} and ${c} sum to ${sumNumber}.`;
  let message2 = `The product of ${a} and ${b} and ${c} is ${productNumber}.`;
  return [sumNumber, productNumber, message1, message2];
}

testSumAndMultiply(4,7,5);


let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  let sumArraySum = sum(sumArr[0],sum(sumArr[1],sumArr[2])[0]);
  let message = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumArraySum[0]} is their sum.`;
  return [sumArraySum[0], message];
}

sumArray(testArray);

testSumArray(testArray);


function multiplyArray(multArr) { //eslint-disable-line
  let multiplyArrayProduct = multiply(multiply(multArr[0],multArr[1])[0],multArr[2])[0];
  let message = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${multiplyArrayProduct}.`;
  return [multiplyArrayProduct,message];
  
}
multiplyArray(testArray);

testMultiplyArray(testArray);
// adding comment
