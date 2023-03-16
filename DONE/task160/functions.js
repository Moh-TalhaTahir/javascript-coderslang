export const delayedLog = (s, n) => {
  setTimeout(delayedLog,n * 1000);
  console.log(s);
}

