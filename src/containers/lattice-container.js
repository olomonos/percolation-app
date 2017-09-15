import {connect} from 'react-redux';
import Lattice from '../components/lattice';
// import changeLatticeSide from '../actions/change-lattice-side';
// import generate from '../actions/generate';

export default connect(
    state => ({
        lattice: state.lattice
    }),
    dispatch => ({
        // onInputChange: value => dispatch(changeLatticeSide(value)),
        // onButtonClick: (side) => {
        //     dispatch(generate(side)); 
        // }
    })
)(Lattice);
