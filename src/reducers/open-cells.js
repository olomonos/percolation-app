import {type as generate} from '../actions/generate';
import {type as changeCellState} from '../actions/change-cell-state';

export default (openCells = [], action) => {
    switch (action.type) {
        case generate:
            let side = action.payload.side;
            let size = side * side;
            let newOpenCells = [];
            for (let i = 0; i < size; i++) {
                newOpenCells[i] = false;
            }
            return newOpenCells;
        case changeCellState:
            let cellIndex = action.payload.cellIndex;
            let changedOpenCells = [...openCells];
            let prevCellState = changedOpenCells[cellIndex];
            changedOpenCells[cellIndex] = !prevCellState;
            return changedOpenCells;
        default:
            return openCells;
    }
}
