import { formatNumber } from './helper.js';

const numbers = [999,10000];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Formatted ${numbers[i]} looks like ${formatNumber(numbers[i])}`);
}