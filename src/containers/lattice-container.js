import {connect} from 'react-redux';
import Lattice from '../components/lattice';
import changeCellState from '../actions/change-cell-state';

export default connect(
    state => ({
        openCells: state.openCells
    }),
    dispatch => ({
        onCellClick: (openCells, cellIndex) => {
            dispatch(changeCellState(openCells, cellIndex));
        }
    })
)(Lattice);
