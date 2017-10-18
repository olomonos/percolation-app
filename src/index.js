import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import percolator from './middlewares/percolator';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStore(reducers, applyMiddleware(percolator))}>
            <App />
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root')
);

registerServiceWorker();