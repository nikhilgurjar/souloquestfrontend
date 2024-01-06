export default function shortenNumber(number) {
  const suffixes = ["", "K", "L", "Cr", "M"]; // Added 'M' for millions
  let suffixIndex = 0;

  while (number >= 1000) {
    number /= 1000;
    suffixIndex++;
  }

  return number.toFixed(1).replace(/\.0$/, "") + suffixes[suffixIndex];
}


