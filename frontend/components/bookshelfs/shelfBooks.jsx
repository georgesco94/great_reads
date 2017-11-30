import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {SearchResultItem} from '../search_results/search_result_item';
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
      return <SearchResultItem book={book} />;
    });
    return (
      <div className="shelf-books">
        {books}
      </div>

    );
  }

}

export default withRouter(ShelfBooks);
