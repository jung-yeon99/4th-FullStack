const assert = require('assert');

function factorial(n) {
	if (n===0) return 1;
	return factorial(n-1);
}

function factorialTCO(n, acc = 1) {
	if (n===0) return acc;
	return factorialTCO(n-1,  n * acc);
}
