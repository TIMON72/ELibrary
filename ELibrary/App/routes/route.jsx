import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../containers/main/main.jsx';
import BookList from '../containers/bookList/bookList.jsx';
import Login from '../containers/login/login.jsx';

export default class Routing extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/main" component={Main} />
                    <Route path="/bookList" component={BookList} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" render={() => <Redirect to="/main" />} />
                </Switch>
            </main>
        );
    }
}
