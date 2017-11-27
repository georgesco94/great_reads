import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookShelf extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchShelves(this.props.currUser.id);
  }

  render() {
    const shelfs = this.props.shelves.map((shelf) => {
      return(
        <li>
          {shelf.name}
        </li>
      );
    });
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

            <div className="shelf-books">
              books
            </div>

          </div>

        </div>
      </div>
    );
  }


}

export default withRouter(BookShelf);
