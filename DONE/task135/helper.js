export const maxElement = (arr) => {
  let max = arr[0];
  let i;
  for(i=0 ; i<arr.length ; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}