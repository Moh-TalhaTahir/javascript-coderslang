export const getTotal = (arr) => {
  let total = 0 , i;
  for(i=0 ; i<arr.length ; i++){
    total += arr[i];
  }
  return total;
}