const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(13));
// console.log(isPrime(12));
// console.log(isPrime(-1));

console.log(Math.sqrt(13))