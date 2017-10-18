import {Lattice} from '../percolator';
import {type as generate} from '../actions/generate';
import {type as changeCellState} from '../actions/change-cell-state';
import changeIsPercolated from '../actions/change-is-percolated';

export default ({getState}) => {
    let lattice = null;
    return next => action => {
        switch (action.type) {
            case generate: {
                const {latticeSide} = getState();
                lattice = new Lattice(latticeSide);
                next(action);
                break;
            }
            case changeCellState: {
                next(action);
                const {openCells, isPercolated, latticeSide} = getState();
                const {cellIndex} = action.payload;

                if (lattice) {
                    let latticeSize = lattice.size;
                    let latticeIndex = Number(cellIndex) + 1;
                    let topIndex = latticeIndex - latticeSide;
                    let bottomIndex = latticeIndex + latticeSide;
                    let leftIndex = latticeIndex - 1;
                    let rightIndex = latticeIndex + 1;
    
                    if (
                        (topIndex > 0) && (topIndex < latticeSize - 1) && openCells[topIndex - 1]
                    ) {
                        lattice.connect(latticeIndex, topIndex);
                    }

                    if (
                        (bottomIndex > 0) && (bottomIndex < latticeSize - 1) && openCells[bottomIndex - 1]
                    ) {
                        lattice.connect(latticeIndex, bottomIndex);
                    }

                    if (
                        (leftIndex > 0) && (leftIndex < latticeSize - 1) && openCells[leftIndex - 1]
                    ) {
                        lattice.connect(latticeIndex, leftIndex);
                    }

                    if (
                        (rightIndex > 0) && (rightIndex < latticeSize - 1) && openCells[rightIndex - 1]
                    ) {
                        lattice.connect(latticeIndex, rightIndex);
                    }

                    let isNowPercolated = lattice.isPercolated();
                    
                    if (isNowPercolated !== isPercolated) {
                        next(changeIsPercolated(isNowPercolated));
                    }
                }
                break;
            }
            default:
                next(action);
        }
    }
};