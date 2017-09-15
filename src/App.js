import React, { Component } from 'react';
import LatticeSideInput from './containers/lattice-side-input-container';
import Lattice from './containers/lattice-container';

class App extends Component {
  render() {
    return (
      <div>
        <LatticeSideInput />
        <Lattice />
      </div>
    );
  }
}

export default App;
