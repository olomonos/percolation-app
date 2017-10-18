import {connect} from 'react-redux';
import Percolation from '../components/percolation';
import percolationButtonClick from '../actions/percolation-button-click';

export default connect(
    state => ({
        isPercolated: state.isPercolated
    }),
    dispatch => ({
        onButtonClick: () => {
            dispatch(percolationButtonClick()); 
        }
    })
)(Percolation);
