import React from 'react';
import Button from './components/Button';

const showEvents = (event) => {
  console.log('show events fired');
  console.log(event);
}

const handleChange = (event) => {
  console.log('handle change fired');
  console.log(event);
  const { value } = event.target;
  console.log(value);
}

export const App = () => {
  return (
    <div className='App'>
      <h1>Events Manipulation Example</h1>
      <Button name="Show Events" onClick={showEvents} />
      <br /> <br />
      <input onChange={handleChange} />
    </div>
  );
}

export default App;