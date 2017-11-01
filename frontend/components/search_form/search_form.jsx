import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
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
  }


  render() {
    return(
      <div className="nav-search">
        <form className="nav-search-form" onSubmit={this.handleSubmit}>
            <input className="nav-search-input" onChange={this.update("search")} type="text" placeholder="Author/Title" />
            <input className="nav-search-submit" type="submit" value="" />
        </form>
      </div>
    );
  }


}

export default withRouter(SearchForm);
