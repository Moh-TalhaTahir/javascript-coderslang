import { loadData } from './storage.js';

export const getUser = (userId) => new Promise((resolve, reject) => {
  if(!userId){
    reject('user id not available');
  }

  setTimeout(() => {
    //use loadData and resolve with the user object if the id is present
    const user = loadData();
    user.users.map(objects => {
      if(objects.id === userId){
        resolve(objects);
      }
    })
    return {};
  }, 200);
});