import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random')

  const handleClick = () => {
    if (text === 'Random'){
      setText('Hello World!')
    } else {
      setText('Random')
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
