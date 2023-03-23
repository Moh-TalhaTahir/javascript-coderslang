import { getUserCount } from './db.js';
export const printUserCount = () => {
 return getUserCount()
    .then(userCount => {
      console.log(userCount);
    })
    .catch(error => {
      console.error(error);
    });
}