export const isPalindrome = (s) => {
  if(s===''){
    return true;
  }
  return s === s.split('').reverse().join('');
}