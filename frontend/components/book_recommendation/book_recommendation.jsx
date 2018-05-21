import React from 'react';

class BookRecommendation extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getRecommendation();
  }

  render () {
    let book = this.props.recommendedBook;
    return (
      <div className="user-greet-wrapper">
        <div className="user-greet">
          <div className="greet-text">
            This book is recommended to you based on genres and read books.
          </div>
          <div className="challenge-box">
            {book.title}
          </div>
          <div className="add-more">

          </div>
        </div>
      </div>
    );
  }
}

export default BookRecommendation;
