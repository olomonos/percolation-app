import {connect} from 'react-redux';
import Percolation from '../components/percolation';
import percolationButtonClick from '../actions/percolation-button-click';

export default connect(
    state => ({
        lattice: state.lattice,
        itPercolates: state.itPercolates
    }),
    dispatch => ({
        onButtonClick: (lattice) => {
            dispatch(percolationButtonClick(lattice)); 
        }
    })
)(Percolation);
