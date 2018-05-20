import React from 'react';

class BookRecommendation extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    this.props.getRecommendation();
  }

  render () {
    // const books = this.props.recommendedBooks.map( (book) => {
    //   return (
    //     <div>
    //       book.title
    //     </div>
    //   );
    // });
    return (
      <div className="create-wrap">
        {}
      </div>
    );
  }
}

export default BookRecommendation;
