import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';
import "./styles.css";

const App = () => {
  return (
    <div className='App'>
      <h1>My First JSX</h1>
      <Button name="Button Component" onClick={() => alert('clicked!')} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);