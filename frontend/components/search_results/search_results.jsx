import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchResultItem from "./search_result_item";

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBooks(this.state.search).then(
      () => this.props.history.push('/search'));
    var form = document.getElementById("inp");
    form.reset();
  }

  render() {
    const books = this.props.books.map(book => (
        <SearchResultItem key={book.id} book={book} />
    ));
    return (
        <div className="search-res-wrap">
          <div className="search-results">
            <div className="new-search">
              <form id="inp" onSubmit={this.handleSubmit}>
                <h1>Search and Browse Books</h1>
                <div className="new-search-wrap">
                  <input onChange={this.update("search")}
                    type="text" className="search-input"
                    placeholder="Author/Title" />
                  <input className="search-submit" type="submit" value="" />
                </div>
              </form>
            </div>

            <div className="search-books-column">
              {books}
            </div>
          </div>

        </div>
    );

  }


}


export default withRouter(SearchResults);
