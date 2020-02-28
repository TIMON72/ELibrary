const initialState = {
    user: [],
    error: ''
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload };

        case 'GET_ERROR':
            return { ...state, error: action.payload };

        default:
            return state;
    }
}