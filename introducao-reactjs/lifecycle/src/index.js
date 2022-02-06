import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>My Class JSX</h1>
        <p>Counter: {this.state.counter}</p>

        <Button name="Increment" onClick={this.incrementCounter} />
        <Button name="Decrement" onClick={this.decrementCounter} />
      </div>        
    );
  }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);