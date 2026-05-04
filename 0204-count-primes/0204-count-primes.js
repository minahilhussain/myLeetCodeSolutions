/**
 * @param {number} n
 * @return {number}
 */
var isPrime = function(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}


var countPrimes = function(n) {
  let count = 0;
  for (let i = n-1; i > 1; i--) {
    if (isPrime(i)) count++
  }
  return count;
};