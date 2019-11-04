import React, { Component } from 'react';
import UIShell from './components/UIShell';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.stockService = props.stockService || new StockService();
  }
  render() {
    return (
      <div className="App">
        <UIShell stockService={this.stockService} />
      </div>
    );
  }
}

export default App;
