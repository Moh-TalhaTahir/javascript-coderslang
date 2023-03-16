export const errorPractice = (name, surname) => {
 
    if(!name || !surname){
      throw new Error ('error occured');
    }
  return console.log(`Hey, ${name} ${surname}! Welcome to the JavaScript error practice.`);
  
}
