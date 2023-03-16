export const startCountdown = (n) => {
  let i = 0;
  const clearer = setInterval(() => {
    if (i < n) {
      console.log(n - i);
      i++;
    } else {
      console.log('GO!');
      clearInterval(clearer);
    }
  },100);
}