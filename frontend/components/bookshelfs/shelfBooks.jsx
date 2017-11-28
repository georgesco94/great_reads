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
    console.log(this.props.books);
    return (
      <div className="shelf-books">
        <div>hi</div>;

        </div>

    );
  }

}

export default withRouter(ShelfBooks);
