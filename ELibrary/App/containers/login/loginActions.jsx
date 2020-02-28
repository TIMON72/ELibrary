import "isomorphic-fetch";
import authHelper from '../../Utils/authHelper';

export function loginUser(login, password) {
    return (dispatch) => {
        authHelper.clearAuth();
        if (login && password) {
            var data = {
                login: login,
                password: password
            };
            fetch('http://localhost:50566/api/Identity/AuthorizationUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
                //mode: 'no-cors'
            }).then((response) => {
                if (response.status === 200)
                    return response.json();
                else
                    dispatch({ type: 'LOGIN_SUCCESS', payload: 'Нет ответа от сервера' });
            }).then((data) => {
                //alert(data.username);
                authHelper.saveAuth(data.username, data.access_token);
                dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: 'GET_ERROR', payload: ex });
            });
        } else {
            alert('Необходимо ввести имя пользователя и пароль');
            dispatch({ type: 'GET_ERROR', payload: 'Необходимо ввести имя пользователя и пароль' });
        }
    };
}

export function logoutUser() {
    return (dispatch) => {
        authHelper.clearAuth();
    };
}

//export function logoutUser() {
//    return function (dispatch) {
//        dispatch({ type: UNAUTH_USER });
//        cookie.remove('token', { path: '/' });

//        window.location.href = CLIENT_ROOT_URL + '/login';
//    }
//}

//export function loginUser({ login, password }) {
//    return function (dispatch) {
//        axios.post(constants.authorizationUser, { login, password })
//            .then(response => {
//                cookie.save('token', response.data.token, { path: '/' });
//                dispatch({ type: AUTH_USER });
//                window.location.href = CLIENT_ROOT_URL + '/dashboard';
//            })
//            .catch((error) => {
//                errorHandler(dispatch, error.response, AUTH_ERROR)
//            });
//    }
//}

//export function registerUser({ email, firstName, lastName, password }) {
//    return function (dispatch) {
//        axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
//            .then(response => {
//                cookie.save('token', response.data.token, { path: '/' });
//                dispatch({ type: AUTH_USER });
//                window.location.href = CLIENT_ROOT_URL + '/dashboard';
//            })
//            .catch((error) => {
//                errorHandler(dispatch, error.response, AUTH_ERROR)
//            });
//    }
//}

//export function protectedTest() {
//    return function (dispatch) {
//        axios.get(`${API_URL}/protected`, {
//            headers: { 'Authorization': cookie.load('token') }
//        })
//            .then(response => {
//                dispatch({
//                    type: PROTECTED_TEST,
//                    payload: response.data.content
//                });
//            })
//            .catch((error) => {
//                errorHandler(dispatch, error.response, AUTH_ERROR)
//            });
//    }
//}
