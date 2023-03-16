export const isIdentical= (obj1, obj2) => {
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);

  // check if objects have the same number of fields 
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  

  // compare fields and values in objects 
  for (let key of objKeys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
