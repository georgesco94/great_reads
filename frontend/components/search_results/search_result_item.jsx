import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import BookStatusContainer from '../book_status/book_status_container';

class SearchResultItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteAssignment(this.props.assignmentId);
  }

  render() {
    if(this.props.book){
      return (
        <div className="result-item">
          <div className="book-hold">
            <Link to={`/books/${this.props.book.id}`}>
              <img className="search-cover" src={this.props.book.image_url}/>
            </Link>

            <div className="hold">
              <Link to={`/books/${this.props.book.id}`}>
                <h1>{this.props.book.title}</h1>
              </Link>
              <Link to={`/books/${this.props.book.id}`}>
                <p className="book-author">{this.props.book.author}</p>
              </Link>
            </div>
          </div>

          <div className="book-status">
            <BookStatusContainer book={this.props.book} />
            <button className="remove-button" onClick={this.handleClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>

          </div>



        </div>
      );
    }else{
      return <div></div>;
    }
  }

}

export default withRouter(SearchResultItem);
