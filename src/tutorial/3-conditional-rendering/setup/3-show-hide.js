import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth)
    })

    return (
      window.addEventListener = ('resize', () => {
      setSize(window.innerWidth)
    })
    )
  }, [])

  return (
      <div style={{margin: '4rem'}}>
        <h2>Window</h2>
        <h3>Size: {size} px</h3>
      </div>
  );
};

export default ShowHide;
