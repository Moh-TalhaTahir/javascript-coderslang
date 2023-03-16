export const bakeMyCake = (ingredients) => {
  if(!ingredients){
    throw new Error ('ingredients missing');
  }
  console.log(`Baking a cake!`)

  return {
    type: 'cake',
    from: ingredients
  }
}
