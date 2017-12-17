import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ShelfBooks from './shelfBooks';

class BookShelf extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      clicked : false,
      shelfName:"",
      adding: false
    };
  }

  componentDidMount() {
    this.props.fetchShelves(this.props.currUser.id);
    this.props.fetchAssignments(this.props.currUser.id);
    this.props.fetchUserBooks(this.props.currUser.id);
  }

  componentWillReceiveProps(newProps) {

  }

  handleClick(e,shelfId){
    e.preventDefault();
    this.setState({clicked:shelfId});
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShelf({name:this.state.shelfName,user_id:this.props.currUser.id});
    this.setState({adding:false,shelfName:""});
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

              <div>
                <button className="new-shelf-button"onClick={ (e) => this.setState({adding: true})}>
                  Add Shelf
                </button>
                {this.state['adding'] ?
                <form onSubmit={this.handleSubmit}>
                  <input className="add-shelf-input" onChange={this.update('shelfName')} />
                  <input  type="submit" value="Add" />
                </form>
                : "" }
              </div>
            </div>

            <ShelfBooks books={books} />

          </div>

        </div>
      </div>
    );
  }


}

export default withRouter(BookShelf);
