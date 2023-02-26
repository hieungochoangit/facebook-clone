import React from 'react';

const Button = (props) => {
  const { children, onClick, ...rest } = props;

  return (
    <button onClick={onClick} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
