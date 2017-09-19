import {type as percolationButtonClick} from '../actions/percolation-button-click';
import {isJoined, connect} from '../percolator';

export default (itPercolates = false, action) => {
        
    switch (action.type) {
        case percolationButtonClick:

            let lattice = [...action.payload.latticeStructure.lattice];
            let latticeSize = lattice.length;
            let latticeSide = Math.sqrt(latticeSize);
            let treeSize = [...action.payload.latticeStructure.treeSize];
            let percolation = false;
            
            let startIndex = latticeSize;
            let endIndex = latticeSize + 1;
            lattice.push(startIndex);
            lattice.push(endIndex);
                        
            for (let i = 0; i < latticeSide; i++) {
                connect(lattice, treeSize, i, startIndex);
            }

            for (let j = latticeSize - latticeSide; j < latticeSize; j++) {
                connect(lattice, treeSize, j, endIndex);
            }

            percolation = isJoined(lattice, startIndex, endIndex);
            return percolation;

        default:
            return itPercolates;
    }
}
