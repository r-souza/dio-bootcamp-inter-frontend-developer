import React from 'react';
import Button from './components/Button';


export const App = () => {
  return (
    <div className='App'>
      <h1>Jsx on WebPack Project</h1>
      <Button onClick={() => alert('clicked!')} name="My Button" />
    </div>
  );
}

export default App;