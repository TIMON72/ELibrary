import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { loginUser } from './loginActions.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: 'admin', password: 'admin' };
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeLogin(e) {
        var val = e.target.value;
        this.setState({ login: val });
    }
    onChangePassword(e) {
        var val = e.target.value;
        this.setState({ password: val });
    }
    handleSubmit(e) {
        this.props.loginUser(this.state.login, this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Логин:</label><br />
                        <input type="text" value={this.state.login} onChange={this.onChangeLogin} /><br />
                        <label>Пароль:</label><br />
                        <input type="text" value={this.state.password} onChange={this.onChangePassword} /><br />
                    </p>
                    <input type="submit" value="Авторизация" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return {
        loginUser: bindActionCreators(loginUser, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);