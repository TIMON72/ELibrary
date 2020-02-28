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

export function editBook(book) {
    return (dispatch) => {
        fetch(constants.editBook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authHelper.getToken()
            },
            body: book
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({ type: 'EDIT_BOOK', payload: data });
        }).catch((ex) => {
            dispatch({ type: 'GET_ERROR', payload: ex });
        });
    };
}

export function deleteBook(bookId) {
    return (dispatch) => {
        fetch(constants.deleteBook + '/' + bookId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authHelper.getToken()
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({ type: 'DELETE_BOOK', payload: data });
        }).catch((ex) => {
            dispatch({ type: 'GET_ERROR', payload: ex });
        });
    };
}