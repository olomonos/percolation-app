import {type as changeLatticeSide} from '../actions/change-lattice-side';

export default (value = 10, action) => {
    switch (action.type) {
        case changeLatticeSide:
            return action.payload.newLatticeSide;
        default:
            return value;
    }
}