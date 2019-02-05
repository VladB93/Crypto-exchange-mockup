import React, { Component } from 'react';
import KrakenSocket from './api';
import PriceTable from './price-table';
import { store } from './index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new KrakenSocket(store);
    this.state = {
      input: '',
    }
    this.addPair = this.addPair.bind(this);
  }


  addPair() {
    this.socket.subscribe(this.state.input);
  }

  inputChange(value) {
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div className="App">
        <PriceTable />
        Pair name
        <input onChange={(e) => this.inputChange(e.target.value)} />
        <button onClick={this.addPair}>Add Pair</button>
      </div>
    );
  }
}

export default App;
