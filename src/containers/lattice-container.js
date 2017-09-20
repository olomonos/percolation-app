import {connect} from 'react-redux';
import Lattice from '../components/lattice';
import changeCellState from '../actions/change-cell-state';

export default connect(
    state => ({
        lattice: state.latticeStructure.lattice,
        openCells: state.openCells
    }),
    dispatch => ({
        onCellClick: (openCells, cellIndex) => {
            dispatch(changeCellState(openCells, cellIndex));
        }
    })
)(Lattice);
