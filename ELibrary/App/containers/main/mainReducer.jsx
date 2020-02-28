const initialState = {
    error: '',
    allBooks: []
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_BOOKS':
            return { ...state, allBooks: action.payload };

        case 'GET_ERROR':
            return { ...state, error: action.payload };

        default:
            return state;
    }
}