export const getCar = (numberOfPassengers) => {
  if(numberOfPassengers > 4){
    throw new Error('pessengers are overloaded');
  }
  return `Here's your car for ${numberOfPassengers} passengers`;
}
