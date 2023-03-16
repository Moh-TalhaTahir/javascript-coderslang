export const capitalizeEachWord = (s) => {
  let arrS = s.split(' ');
  for (let i = 0; i < arrS.length; i++) {
      arrS[i] = arrS[i][0].toUpperCase() + arrS[i].substr(1);
  }
  return arrS.join(' ');
}