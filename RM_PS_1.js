/**
 * 01. Solve me first
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function (a, b) {
    return a + b;
 };
 
/**
  * 02. Multiply
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var multiply = function(a, b) {
 	return a * b;
 };

 /**
  * 03. Even or Odd
  * @param {number} number
  * @return {string}
  */
var evenOrOdd = function(number) {
 	return number % 2 === 0 ? 'Even' : 'Odd';
};
 
/**
  * 04. Make Negative
  * @param {number} number
  * @return {number}
  */
var makeNegative = function(number) {
 	return -Math.abs(number);
 };

 /**
 * 05. Opposite Number
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return -number;
};

/**
  * 06. Simple Array Sum
  * @param {number[]} ar
  * @return {number}
  */
var simpleArraySum = function(ar) {
 	let sum = 0;
 	for (let i = 0; i < ar.length; i++) {
 		sum += ar[i];
 	}
 	return sum;
};
 
/**
 * 07. sleepIn
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

/**
 * 08. monkeyTrouble
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};
