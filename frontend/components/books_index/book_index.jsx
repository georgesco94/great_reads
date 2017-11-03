import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BookIndexItem} from './book_index_item';

class BooksIndex extends React.Component{
  constructor(props){
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
    this.state = {loading: false};
  }

  componentDidMount() {
    this.props.fetchBooks(0);
    this.props.fetchStatuses();
    window.addEventListener('scroll',this.fetchMore);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.fetchMore);
  }

  fetchMore() {
    let off = this.props.books.length;
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)  {
      this.setState({loading: true});
      setTimeout(() => this.props.fetchBooks(off).then(
        (action) =>
        {
          if(Object.keys(action.books).length === 0){
            window.removeEventListener('scroll',this.fetchMore);
          }
          this.setState({loading: false});}
      )
        , 700);

    }
  }

  render() {
    const books = this.props.books.map(book => (
        <BookIndexItem key={book.id} book={book} />
    ));

    return (
      <div className="column-wrapper">
        <div className="user-info-column"></div>

        <div className="books-index-column">
          {books}
          <div className="spinner">
            {this.state.loading ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : ""}
          </div>
        </div>

        <div className="recommendations-column"></div>

      </div>
    );

  }


}


export default withRouter(BooksIndex);
