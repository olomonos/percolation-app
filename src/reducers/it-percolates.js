import {type as percolationButtonClick} from '../actions/percolation-button-click';
import {isJoined, connect} from '../percolator';
import {type as changeIsPercolated} from '../actions/change-is-percolated';
import {type as generate} from '../actions/generate';

export default (isPercolated = false, action) => {
    switch (action.type) {
        case changeIsPercolated:
            return action.payload.isPercolated;
        case generate:
            return false;
        default:
            return isPercolated;
    }
}
