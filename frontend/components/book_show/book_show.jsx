import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      book: this.props.book
    };
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({book: newProps.book.title});
  }

  render() {
    return (
      <div>
        <p>BOOKSHOW</p>
        {this.state.book}
      </div>
    );

  }


}


export default withRouter(BookShow);
