import React from 'react';

const Share = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="20" cy="12" r="1" />
    <circle cx="4" cy="12" r="1" />
  </svg>
);

export default Share;
