import React from 'react';
import { getUser } from './getUser';

export const element = () => {
  const user = getUser(); // Call the getUser function to get the user object

  return (
    <div>
      <div>Welcome on board</div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </div>
  );
};
