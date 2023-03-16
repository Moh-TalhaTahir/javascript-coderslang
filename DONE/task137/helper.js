export const positiveElements = (arr) => {
  const positivearr = [];
  let i;
  for(i=0 ; i<arr.length ; i++){
    if(arr[i] > 0){
      positivearr.push(arr[i]);
    }
  }
  return positivearr;
}