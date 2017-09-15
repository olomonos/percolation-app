import {type as generate} from '../actions/generate';

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
        default:
            return lattice;
    }
}

// is it ok to calculate size from the same input again if I already have it in 
// the store?


// is it ok to use state.latticeSide here if I don't have it in the initial state?

// store.getState() ?