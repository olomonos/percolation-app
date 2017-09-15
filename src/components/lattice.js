import React, {Component} from 'react';

export default class Lattice extends Component {

    render() {
        const {lattice} = this.props;
        const buttons = [];

        const styles = {
            cell: {
                width: '25px',
                height: '25px',
                backgroundColor: 'black'
            }
        };

        for (let i = 0; i < lattice.length; i++) {
                buttons.push(
                    <button 
                        key={i}
                        /* onClick={}  */
                        className="cell"
                        style={styles.cell}>
                    </button>
                )
        }

        return (
            <div className='latticeArea'> 
                {buttons}
            </div>
        );
    }
}

// .latticeArea should be flexible (from the number of lattice elements), but
// always square 
