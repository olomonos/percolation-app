import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root')
);

registerServiceWorker();