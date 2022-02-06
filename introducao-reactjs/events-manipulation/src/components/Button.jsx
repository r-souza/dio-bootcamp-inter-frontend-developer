import React from 'react';

export const Button = (props) => {
  const { name, onClick } = props;

  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button;