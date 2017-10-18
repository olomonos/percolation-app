import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Percolation extends Component {

    render() {
        const {isPercolated, onButtonClick} = this.props;

        const style = {
            height: 100,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
                <div>
                    <FlatButton 
                        label='Does it percolate?'
                        onClick={onButtonClick} 
                    />
                    {/* <Paper 
                        style={style}
                        children={<p>{itPercolates}</p>}
                    /> */}
                    <TextField
                        id='percolationOutput'
                        value={isPercolated}
                        fullWidth={false}
                    />

                </div> 
        );
    }
}