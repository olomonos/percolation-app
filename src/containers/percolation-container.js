import {connect} from 'react-redux';
import Percolation from '../components/percolation';
import percolationButtonClick from '../actions/percolation-button-click';

export default connect(
    state => ({
        latticeStructure: state.latticeStructure,
        itPercolates: state.itPercolates
    }),
    dispatch => ({
        onButtonClick: (latticeStructure) => {
            dispatch(percolationButtonClick(latticeStructure)); 
        }
    })
)(Percolation);
