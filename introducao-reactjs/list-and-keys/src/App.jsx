import React from 'react';
import Button from './components/Button';
import GreenButton from './components/GreenButton';

const costumers = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
  {
    id: 3,
    name: 'Mary Doe',
  }
];

export const App = () => {

  const renderCostumers = (costumer, index) => {
    return (
      <li key={`costumer-${costumer.id }`}>{costumer.name}</li>
    )
  }

  return (
    <div className='App'>
      <h1>List and keys Example</h1>

      <ul>
        {costumers.map(renderCostumers)}
      </ul>

    </div>
  );
}

export default App;