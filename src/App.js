import React, { Component } from 'react';
import KrakenSocket from './api/websocket_kraken_api';
import PriceTable from './price-table';
import { store } from './index.js';
import { registerUser, singInUsingGoogle, addToCollection } from './api/firebase_api';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new KrakenSocket(store);
    this.state = {
      input: '',
    }
    this.addPair = this.addPair.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  addPair() {
    this.socket.subscribe(this.state.input);
  }

  inputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={()=>addToCollection()}>Register User</button>
        <PriceTable />
        Pair name
        <input onChange={this.inputChange} />
        <button onClick={this.addPair}>Add Pair</button>
      </div>
    );
  }
}

export default App;
