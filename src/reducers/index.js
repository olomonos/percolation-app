import { combineReducers } from 'redux';
import latticeSide from './lattice-side';
import latticeSize from './lattice-size';
import lattice from './lattice';

export default combineReducers({
    latticeSide: latticeSide,
    latticeSize: latticeSize, // delete?
    lattice: lattice
    // treeSize: treeSize,
    // itPercolates: itPercolates
})