import { combineReducers } from 'redux';
import main from '../containers/main/mainReducer.jsx';
import bookList from '../containers/bookList/bookListReducer.jsx';
import login from '../containers/login/loginReducer.jsx';

export default combineReducers({
    main,
    bookList,
    login
});