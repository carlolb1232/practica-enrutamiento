import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = (props) => {
  const { hello, blue, red } = useParams()
  return (
    <>
      <h1 style={{color:blue, backgroundColor:red}}>
        {hello}
      </h1>
    </>
  );
}

export default Hello;
