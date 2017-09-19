import React, { Component } from 'react';
import LatticeSideInput from './containers/lattice-side-input-container';
import Lattice from './containers/lattice-container';
import Percolation from './containers/percolation-container';

class App extends Component {
  render() {
    return (
      <div>
        <LatticeSideInput />
        <Lattice />
        <Percolation />
      </div>
    );
  }
}

export default App;
