import React from 'react';
import Button from './components/Button';
import GreenButton from './components/GreenButton';

const hasCostumer = true;

const renderShowHistory = () => {
  return (
    <div>
      <h1>Orders History</h1>
      <Button name="View Order History" onClick={() => alert('clicked!')} />
    </div>
  )}  

const renderAddCostumer = () => {
  return (
    <div>
      <h1>Add a new Client</h1>
      <GreenButton name="Add client" onClick={() => alert('clicked!')} />
    </div>
  )}

const renderCostumer = () => {
  if (!hasCostumer) return null;
  
  return (
    <div>
      <h1>Costumer name: John Doe</h1>
    </div>
  )}
      


export const App = () => {
  return (
    <div className='App'>
      <h1>Jsx on WebPack Project</h1>

      {hasCostumer ? renderShowHistory() : renderAddCostumer()} 
      <br />

      {renderCostumer()}
    </div>
  );
}

export default App;