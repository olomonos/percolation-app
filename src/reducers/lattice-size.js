import {type as generate} from '../actions/generate';

export default (latticeSize = 0, action) => {
    switch (action.type) {
        case generate:
            let side = action.payload.side;
            let size = side * side;
            return size;
        default:
            return latticeSize;
    }
}

// Delete this file?