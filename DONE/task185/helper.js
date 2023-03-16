export const isKeyPresent = (obj, key) => {
  for(let ke in obj){
if(ke === key){
  return true;
}
  }
  return false;
}