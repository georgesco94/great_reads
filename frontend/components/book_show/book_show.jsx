import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      book: {}
    };
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({book: newProps.book});
  }

  render() {
    return (
      <div>
        <p>BOOKSHOW</p>
        {this.state.book.title}
      </div>
    );

  }


}


export default withRouter(BookShow);
