import "isomorphic-fetch";
import authHelper from '../../Utils/authHelper';

export function getAllBooks() {
    return (dispatch) => {
        fetch(constants.getAllBooks, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authHelper.getToken()
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({ type: 'GET_ALL_BOOKS', payload: data });
        }).catch((ex) => {
            dispatch({ type: 'GET_ERROR', payload: ex });
        });
    };
}