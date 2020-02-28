import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAllBooks, editBook, trashBook } from './bookListActions.jsx';
import "isomorphic-fetch";
import Menu from '../menu/menu.jsx';
import authHelper from '../../Utils/authHelper';
//import { NavLink } from 'react-router-dom'

class BookList extends React.Component {
    constructor(props) {
        super(props);
        if (authHelper.isLogged()) {
            this.props.getAllBooks();
            this.state = { books: this.props.books };
            this.handler = this.handler.bind(this);
        }
    }
    onChangeAuthor(e, index) {
        var val = e.target.value;
        this.state.books[index].author = val;
        this.forceUpdate();
    }
    onChangeCategory(e, index) {
        var val = e.target.value;
        this.state.books[index].category = val;
        this.forceUpdate();
    }
    onChangeGenre(e, index) {
        var val = e.target.value;
        this.state.books[index].genre = val;
        this.forceUpdate();
    }
    onChangeName(e, index) {
        var val = e.target.value;
        this.state.books[index].name = val;
        this.forceUpdate();
    }
    onChangeYear(e, index) {
        var val = e.target.value;
        this.state.books[index].year = val;
        this.forceUpdate();
    }
    onClickEdit(e, index) {
        var book_json = JSON.stringify({
            bookId: this.state.books[index].bookId, author: this.state.books[index].author,
            category: this.state.books[index].category, genre: this.state.books[index].genre,
            name: this.state.books[index].name, year: this.state.books[index].year
        });
        this.props.editBook(book_json);
    }
    onClickDelete(e, index) {
        this.props.deleteBook(this.state.books[index].bookId);
    }

    handler(e) {
        alert('reaction success');
    }

    render() {

        if (!authHelper.isLogged()) {
            return (
                <Redirect to="/login" />
            );
        }
        let books = this.state.books.map((item, index) => {
            return (
                <form onSubmit={this.handler}>
                    <div key={item.bookId}>
                        <div>
                            <p>ID: <a>{this.state.bookId || ''}</a></p>
                            <p>Автор: <input id={"author" + item.bookId} type="text" value={item.author} onChange={(e) => this.onChangeAuthor(e, index)} /></p>
                            <p>Категория: <input type="text" value={item.category || ''} onChange={(e) => this.onChangeCategory(e, index)} /></p>
                            <p>Жанр: <input type="text" value={item.genre || ''} onChange={(e) => this.onChangeGenre(e, index)} /></p>
                            <p>Название: <input type="text" value={item.name || ''} onChange={(e) => this.onChangeName(e, index)} /></p>
                            <p>Год выпуска: <input type="text" value={item.year || ''} onChange={(e) => this.onChangeYear(e, index)} /></p>
                        </div>
                        <input type="submit" value="Изменить" onClick={(e) => this.onClickEdit(e, index)} />
                        <input type="submit" value="Удалить" onClick={(e) => this.onClickDelete(e, index)} />
                        <hr />
                    </div>
                </form>
            );
        });
        return (
            <div>
                <Menu />
                {books}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        books: state.main.allBooks
    };
}

function matchDispatchToProps(dispatch) {
    return {
        getAllBooks: bindActionCreators(getAllBooks, dispatch),
        editBook: bindActionCreators(editBook, dispatch),
        deleteBook: bindActionCreators(deleteBook, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);
