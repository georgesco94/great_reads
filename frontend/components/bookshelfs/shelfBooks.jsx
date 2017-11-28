import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ShelfBooks extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  handleClick(e,shelfId){

  }

  render() {
    const books = this.props.books.map( book => {
      return book.title;
    });
    return (
      <div className="shelf-books">
        {books}
      </div>

    );
  }

}

export default withRouter(ShelfBooks);
