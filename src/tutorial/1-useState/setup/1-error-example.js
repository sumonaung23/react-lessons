import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    console.log('Handle')
  }

  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      Change button
    </button>
  </React.Fragment>
};

export default ErrorExample;
