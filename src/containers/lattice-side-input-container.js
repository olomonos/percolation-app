import {connect} from 'react-redux';
import LatticeSideInput from '../components/lattice-side-input';
import changeLatticeSide from '../actions/change-lattice-side';
import generate from '../actions/generate';

export default connect(
    state => ({
        latticeSide: state.latticeSide
    }),
    dispatch => ({
        onInputChange: value => dispatch(changeLatticeSide(value)),
        onButtonClick: (side) => {
            dispatch(generate(side)); 
        }
    })
)(LatticeSideInput);
