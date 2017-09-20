import React, {Component} from 'react';

export default class Lattice extends Component {

    render() {
        const {lattice, openCells, onCellClick} = this.props;
        const buttons = [];
        const buttonSize = 25;
        const buttonsQuantity = Math.sqrt(lattice.length);
        const latticeAreaWidth = buttonsQuantity * buttonSize;

        // const styles = {
        //     cell: {
        //         width: '25px',
        //         height: '25px',
        //         backgroundColor: 'black'
        //     }
        // };

        for (let i = 0; i < lattice.length; i++) {

            let cellColor = this.props.openCells[i] ? 'white' : 'black';
            
            buttons.push(
                <button 
                    key={i}
                    value={i}
                    onClick={this.handleCellClick}
                    className='cell'
                    style={{
                        width: buttonSize.toString() + 'px', 
                        height: buttonSize.toString() + 'px', 
                        backgroundColor: cellColor}}>
                </button>
            )
        }

        return (
            <div 
                className='latticeArea' 
                style={{width: latticeAreaWidth.toString() + 'px'}}> 
                    {buttons}
            </div>
        );
    }

    handleCellClick = e => {
        this.props.onCellClick(this.props.openCells, e.target.value)
    }
}

// .latticeArea should be flexible (from the number of lattice elements), but
// always square 