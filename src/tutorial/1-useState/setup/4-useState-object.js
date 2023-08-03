import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Susie',
    age: 24,
    message: 'this is me practicing React in 2023/ 7/ 9 with poweroutage which is pretty much usual nowsaday.'
  })

  const handleClick = () => {
    return setPerson ((prevSetPerson) => {
      return {...prevSetPerson, message: 'I enjoy coding so much.'}
    })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <p>{person.message}</p>
      <button className='btn' onClick={handleClick}>change</button>
    </>
  );
};

export default UseStateObject;
