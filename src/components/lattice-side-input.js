import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class LatticeSideInput extends Component {

    render() {
        const {latticeSide, onInputChange, onButtonClick} = this.props;

        return (
                <div>
                    <TextField
                        id='latticeSideInput'
                        value={latticeSide}
                        onChange={this.handleInputChange}
                        fullWidth={false}
                    />
                    <FlatButton 
                        label='Generate new lattice'
                        onClick={this.handleButtonClick} 
                    />
                </div> 
        );
    }

    handleInputChange = e => {
        this.props.onInputChange(e.target.value)
    }

    handleButtonClick = () => {
        this.props.onButtonClick(this.props.latticeSide)
    }
}