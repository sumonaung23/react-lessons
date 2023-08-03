import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call render')
    if (value >= 1) {
      document.title = `Next render ${value}`
    }
  }, [value]);

  useEffect(() => {
    console.log('sec testing for useEffect, this will not render more than once as it has an empty array.')
  }, [])

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>change</button>
    </>
  );
};

export default UseEffectBasics;
