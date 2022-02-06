import React from 'react';

export const GreenButton = (props) => {
  const { name, onClick } = props;

  return (
    <button style={{color: "green", margin: "5px" }} onClick={onClick}>{name}</button>
  )
}

export default GreenButton;