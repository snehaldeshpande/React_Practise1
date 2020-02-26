import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';
import ErrorHandler from './ErrorHandler';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<ErrorHandler><Timer/></ErrorHandler>, document.getElementById('root'));
