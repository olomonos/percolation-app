import {type as generate} from '../actions/generate';
import {type as changeCellState} from '../actions/change-cell-state';
import {connect} from '../percolator';

export default (lattice = [], action) => {
    switch (action.type) {
        case generate:

            let side = action.payload.side;
            let size = side * side;
            let newLattice = [];
            for (let i = 0; i < size; i++) {
                newLattice[i] = i;
            }
            return [...newLattice];

        case changeCellState:                       // not weighted trees!!!

            // Only can connect, not disconnect!!!
            // Connect() should be called only if openCells[index] is true,
            // else call disconnect().

            let index = Number(action.payload.cellIndex);
            let openCells = [...action.payload.openCells];
            let changedLattice = [...lattice];
            let latticeSize = changedLattice.length;
            let latticeSide = Math.sqrt(latticeSize);
            
            let topIndex = index - latticeSide;
            let bottomIndex = index + latticeSide;
            let leftIndex = index - 1;
            let rightIndex = index + 1;

            if ((topIndex >= 0) && (topIndex < latticeSize) && 
            openCells[topIndex]) {
                changedLattice = connect(changedLattice, index, topIndex);
            }
            if ((bottomIndex >= 0) && (bottomIndex < latticeSize) &&
            openCells[bottomIndex]) {
                changedLattice = connect(changedLattice, index, bottomIndex);
            }
            if ((leftIndex >= 0) && (leftIndex < latticeSize) &&
            openCells[leftIndex]) {
                changedLattice = connect(changedLattice, index, leftIndex);
            }
            if ((rightIndex >= 0) && (rightIndex < latticeSize) &&
            openCells[rightIndex]) {
                changedLattice = connect(changedLattice, index, rightIndex);
            }

            return changedLattice;

        default:
            return lattice;
    }
}

// is it ok to calculate size from the same input again if I already have it in 
// the store?
