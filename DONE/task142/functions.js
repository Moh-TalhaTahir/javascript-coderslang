export const shorten = (s, n) => {
 if(n>=s.length){
  return s;
 }
 else{ return s.slice(0, n)+"...";}
}