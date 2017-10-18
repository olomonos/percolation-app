import {type as generate} from '../actions/generate';
import {type as changeCellState} from '../actions/change-cell-state';
import {connect, Lattice} from '../percolator';

export default (latticeStructure = {lattice: [], treeSize: []}, action) => {
    switch (action.type) {
        case generate:

            let side = action.payload.side;
            let size = side * side;
            let newLattice = [];
            for (let i = 0; i < size; i++) {
                newLattice[i] = i;
            }

            let newTreeSize = [];
            for (let j = 0; j < size; j++) {
                newTreeSize[j] = 1;
            }

            return {
                lattice: newLattice,
                treeSize: newTreeSize
            };

        case changeCellState:

            // Only can connect, not disconnect!!!
            // Connect() should be called only if openCells[index] is true,
            // else call disconnect().

            let index = Number(action.payload.cellIndex);
            let openCells = [...action.payload.openCells];
            let changedLattice = [...latticeStructure.lattice];
            let latticeSize = changedLattice.length;
            let latticeSide = Math.sqrt(latticeSize);
            let changedTreeSize = [...latticeStructure.treeSize];
            
            let topIndex = index - latticeSide;
            let bottomIndex = index + latticeSide;
            let leftIndex = index - 1;
            let rightIndex = index + 1;

            if ((topIndex >= 0) && (topIndex < latticeSize) && 
            openCells[topIndex]) {
                changedLattice = connect(changedLattice, changedTreeSize, index, topIndex);
            }
            if ((bottomIndex >= 0) && (bottomIndex < latticeSize) &&
            openCells[bottomIndex]) {
                changedLattice = connect(changedLattice, changedTreeSize, index, bottomIndex);
            }
            if ((leftIndex >= 0) && (leftIndex < latticeSize) &&
            openCells[leftIndex]) {
                changedLattice = connect(changedLattice, changedTreeSize, index, leftIndex);
            }
            if ((rightIndex >= 0) && (rightIndex < latticeSize) &&
            openCells[rightIndex]) {
                changedLattice = connect(changedLattice, changedTreeSize, index, rightIndex);
            }

            return {
                lattice: changedLattice,
                treeSize: changedTreeSize
            };

        default:
            return latticeStructure;
}
}

// is it ok to calculate size from the same input again if I already have it in 
// the store?
