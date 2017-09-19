import { combineReducers } from 'redux';
import latticeSide from './lattice-side';
import latticeSize from './lattice-size';
import latticeStructure from './lattice';
import openCells from './open-cells';
import itPercolates from './it-percolates';

export default combineReducers({
    latticeSide: latticeSide,
    latticeSize: latticeSize, // delete?    
    latticeStructure: latticeStructure,
    openCells: openCells,
    itPercolates: itPercolates
})