export const getObjectKeys = (obj) => {
  const arr = [];
  for(let keys in obj){
    arr.push(keys);
  }
  return arr;
}