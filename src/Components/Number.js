import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
  const { number } = useParams()
  return (
    <div>
      {
        isNaN(+number)?
        <p>Su palabra es: { number }</p>
        :
        <p>Su número es: { number }</p>
      }
    </div>
  );
}

export default Number;
