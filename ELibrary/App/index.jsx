import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import cookie from 'react-cookie';  
import App from './containers/app.jsx';
import configureStore from './store/configureStore.jsx';
import { createHashHistory } from 'history';

const store = configureStore();
const history = createHashHistory();

render(
    <Provider store={store} history={history} >
        <App />
    </Provider>,
    document.getElementById('content')
);