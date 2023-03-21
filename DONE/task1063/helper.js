export const concatenateArraysUnique = (arr1, arr2) => {
  const duplicates = (element) => {
      if(arr1.includes(element)){
        return;
      }else
      return element;
      
  }
  return arr1.concat(arr2.filter(duplicates));
}