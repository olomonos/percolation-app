import { combineReducers } from 'redux';
import latticeSide from './lattice-side';
import openCells from './open-cells';
import itPercolates from './it-percolates';

export default combineReducers({
    latticeSide: latticeSide,
    openCells: openCells,
    isPercolated: itPercolates
});