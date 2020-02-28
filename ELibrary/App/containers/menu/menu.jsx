import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../login/loginActions.jsx';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickExit = this.onClickExit.bind(this);
    }
    onClickExit(e) {
        this.props.logoutUser();
    }
    render() {

        return (
            <div>
                <menu className="menu">
                    <ul>
                        <li>
                            <Link to="/main">Главная</Link>
                        </li>
                        <li>
                            <Link to="/bookList">Список книг</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={this.onClickExit}>Выход</Link>
                        </li>
                    </ul>
                </menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}

function matchDispatchToProps(dispatch) {
    return {
        logoutUser: bindActionCreators(logoutUser, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);
