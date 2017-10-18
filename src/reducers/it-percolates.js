import {type as percolationButtonClick} from '../actions/percolation-button-click';
import {isJoined, connect} from '../percolator';
import {type as changeIsPercolated} from '../actions/change-is-percolated';

export default (isPercolated = false, action) => {
    switch (action.type) {
        case changeIsPercolated:
            return action.payload.isPercolated;
        default:
            return isPercolated;
    }
}
