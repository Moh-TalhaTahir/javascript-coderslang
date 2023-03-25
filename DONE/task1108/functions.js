import { sleep } from "./helper.js";

export const funkylog = (logger) => async (s) => {
  const delay = logger.delay ?? 100; 
  const strSplit = s.split('');
  for(let i = 0 ; i < strSplit.length ; i++){
    process.stdout.write(strSplit[i]);
    if(logger.randomized){
      await sleep(Math.random(delay));
    }else{
      await sleep(delay);
    }
  }
  process.stdout.write('\n');
};
