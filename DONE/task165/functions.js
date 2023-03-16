export const setEasyTimeout = (func, time) => {
  setTimeout(func,time.hours * 60 *60 *1000 + time.minutes  * 60 * 1000 + time.seconds * 1000);
}