export const extractNumber = (s) => {
  let r = '';
  let digits = ['0','1','2','3','4','5','6','7','8','9','.'];
  for(let i=0 ; i<=s.length ; i++){
    if(digits.includes(s[i])){
     r = r + s[i];
    }
  }
  return Number(r);
}