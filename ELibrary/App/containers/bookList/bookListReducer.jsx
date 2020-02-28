const initialState = {
    error: '',
    allBooks: [],
    edit: false,
    delete: false
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_BOOKS':
            return { ...state, allBooks: action.payload };

        case 'EDIT_BOOK':
            return { ...state, edit: true };

        case 'DELETE_BOOK':
            return { ...state, delete: true };

        case 'GET_ERROR':
            return { ...state, error: action.payload };

        default:
            return state;
    }
}