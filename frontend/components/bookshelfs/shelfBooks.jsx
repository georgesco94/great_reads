import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchResultItem from '../search_results/search_result_item';

class ShelfBooks extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    if(this.props.books){
      const books = this.props.books.map( book => {
        let assignmentId = 0;
        if(book){
          this.props.assignments.forEach( (assignment) => {
            if (assignment && assignment.book_id === book.id){
              assignmentId = assignment.id;
            }
          });

        }
        return <SearchResultItem book={book}
          assignmentId={assignmentId}
          deleteAssignment={this.props.deleteAssignment}
          deleteStatus={this.props.deleteStatus}
          />;
      });
      return (
        <div className="shelf-books">
          {books}
        </div>

      );

    }else{
      return <div></div>;
    }
  }

}

export default withRouter(ShelfBooks);
