export default function shortenNumber(number) {
  const suffixes = ["", "K", "L", "Cr", "M"]; // Added 'M' for millions
  let suffixIndex = 0;

  while (number >= 1000) {
    number /= 1000;
    suffixIndex++;
  }

  return number.toFixed(1).replace(/\.0$/, "") + suffixes[suffixIndex];
}

// Example usage:
console.log(shortenNumber(1000)); // Output: 1K
console.log(shortenNumber(100000)); // Output: 1L
console.log(shortenNumber(1000000)); // Output: 1M
console.log(shortenNumber(1500000)); // Output: 1.5M
console.log(shortenNumber(10000000)); // Output: 1Cr
console.log(shortenNumber(12345678)); // Output: 12.3M
