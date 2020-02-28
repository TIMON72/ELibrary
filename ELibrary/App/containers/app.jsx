import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from '../routes/route.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routing />
                    </div>
                </Router>
            </div>
        );
    }
};
