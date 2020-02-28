import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAllBooks, getExtraditionedBooks } from './mainActions.jsx';
import "isomorphic-fetch";
import Menu from '../menu/menu.jsx';
import authHelper from '../../Utils/authHelper';
//import { NavLink } from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props);
        if (authHelper.isLogged()) {
            this.props.getAllBooks();
        }
    }

    //componentDidMount() {
    //    this.props.getAllBooks();
    //}

    render() {

        if (!authHelper.isLogged()) {
            return (
                <Redirect to="/login" />
            );
        }

        let books = this.props.books.map((item, index) => {
            return (
                <div key={index} className="book">
                    <div className="author">{item.author}</div>
                    <hr />
                </div>
            );
        });

        return (
            <div>
                <Menu />
                {books}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.main.allBooks
    };
}

function matchDispatchToProps(dispatch) {
    return {
        getAllBooks: bindActionCreators(getAllBooks, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
