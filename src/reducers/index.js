import { combineReducers } from 'redux';
import latticeSide from './lattice-side';
import latticeSize from './lattice-size';
import lattice from './lattice';
import openCells from './open-cells';
import itPercolates from './it-percolates';

export default combineReducers({
    latticeSide: latticeSide,
    latticeSize: latticeSize, // delete?
    lattice: lattice,    // Instead of lattice & treeSize arrays - some kind 
                        // of lattice object that already contains all info ?
                        // (In this case it will be possible to do weighted trees.)
                        // Or should the state object remain flat no matter what?
    openCells: openCells,
    // treeSize: treeSize,
    itPercolates: itPercolates
})