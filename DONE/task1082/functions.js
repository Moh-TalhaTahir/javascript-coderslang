import { getUserCount } from './db.js';
import { handleUnknownError } from './errorHandlers.js';


export const printUserCount = () => {
 return getUserCount()
    .then(userCount => {
      console.log(userCount);
    })
    .catch(error => {
      handleUnknownError(error);
    });
}