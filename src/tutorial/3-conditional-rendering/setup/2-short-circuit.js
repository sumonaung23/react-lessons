import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Sunflower');
  const [isError, setIsError] = useState(false);
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
    <>
      <h1>Value: {text && 'Sumon'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>Change text</button>
      {isError ? (<p>There is an error...</p>) :
        (<div>
          <h4>There is no error...</h4>
        </div>)}


      {!text && <h2>Susie</h2>}
      <h3>{text || 'Sunshine'}</h3>
    </>
  );
};

export default ShortCircuit;
