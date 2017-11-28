import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ShelfBooks from './shelfBooks';

class BookShelf extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked : false
    };
  }

  componentDidMount() {
    this.props.fetchShelves(this.props.currUser.id);
  }

  handleClick(e,shelfId){
    debugger
    e.preventDefault();
    this.props.fetchShelfBooks(shelfId).then(() => this.setState({clicked:shelfId}));
  }

  render() {
    const shelfs = this.props.shelves.map((shelf) => {
      return(
        <li>
          <button onClick={ (e) => this.handleClick(e,shelf.id)}>
            {shelf.name}
          </button>
        </li>
      );
    });
    let books = [];
    debugger
    if(this.state.clicked) {
      books = this.props.books[this.state.clicked];
    }

    return (
      <div className="my-books">
        <div className="shelfs">
          <h1 className="shelf-header">My Books</h1>

          <div className="shelf-content">

            <div className="shelf-columns">
              <ul>
                {shelfs}
              </ul>
            </div>

            <ShelfBooks books={books} />

          </div>

        </div>
      </div>
    );
  }


}

export default withRouter(BookShelf);
