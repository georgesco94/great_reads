import React from 'react';

class BookRecommendation extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getRecommendation();
  }

  render () {

    return (
      <div className="create-wrap">
        this.props.recommendedBook.title
      </div>
    );
  }
}

export default BookRecommendation;
