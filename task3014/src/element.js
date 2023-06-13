import React from 'react';

export const element = (arg) => {
  if (arg) {
    return <a href="google.com" target={arg}>Google</a>;
  } else {
    return <a href="google.com" target='_self'>Google</a>;
  }
};
