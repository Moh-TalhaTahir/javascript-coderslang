export const shortenByWords = (s, n) => {

  let arr = s.split('');
  let last,newarr,res;
  if(s.length>n){
    for(let i=n ; i>=0 ; i--){
      if(arr[i]===' '){
        last = i+1;
        break
      }
     }
  newarr = arr.slice(0,last);
  res=newarr.join('') + "...";
  }
else{//is s.length is less than n
  res=arr.join('');
}
return res;}