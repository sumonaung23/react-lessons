import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const decrease = () => {
    return setValue (value - 1);
  }

  const reset = () => {
    setValue(0);
  }

  const increase = () => {
    return setValue (value + 1);
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      })
    }, 2000);
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={decrease}>Decrease</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={increase}>Increase</button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
