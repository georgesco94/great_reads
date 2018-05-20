import React from 'react';

class BookRecommendation extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getRecommendation();
  }

  render () {
    const books = this.props.recommendedBooks.map( (book) => {
      debugger
      return (
        <div>
          {book.title}
        </div>
      );
    });
    return (
      <div className="create-wrap">
        {books}
      </div>
    );
  }
}

export default BookRecommendation;
