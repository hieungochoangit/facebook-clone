import React from 'react';

const ErrorTextField = ({ children }) => {
  return <span className="text-[red] italic text-[12px] block text-left">{children}</span>;
};

export default ErrorTextField;
