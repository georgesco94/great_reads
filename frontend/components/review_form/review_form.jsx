import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchResultItem from "../search_results/search_result_item";
import ReactStars from 'react-stars';


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      review: this.props.review,
      rating: this.props.review.rating,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {review:this.state.review,
      rating:this.state.rating,user_id:this.props.user.id,
      book_id:this.props.book.id};
    this.props.action(review).then(this.props.history.push(`/books/${this.props.book.id}`));
  }

  componentDidMount() {
    this.props.fetchBook(parseInt(this.props.match.params.bookId));
    this.props.fetchReviews(parseInt(this.props.match.params.bookId));
  }
  componentWillReceiveProps(newProps) {
    this.setState({review: newProps.review});
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  ratingChanged(rating) {
    this.setState(
      {
        ["rating"]: rating
      }
    );
  }

  render(){
    if(!this.props.book) {
      return ("");
    }
    return (
      <div className="review-container">
        <div className="review-items">
          <div className="review-title">{this.props.book.title} > Review </div>
          <SearchResultItem review={true} book={this.props.book} />
          <div className="my-rating">
            <ReactStars
              count={5}
              value={this.state.rating}
              onChange={this.ratingChanged}
              size={24}
              half={false}
              color2={'red'} />
          </div>
          <div className="review-shelve">shelves/tags</div>
          <form className="my-review" onSubmit={this.handleSubmit}>
            <p>What do you think?</p>
            <textarea
              className="review-input"
              placeholder="Enter your review (optional)"
              value={this.state.review.review}
              onChange={this.update('review')} />
            <input className="submit" type="submit" value="Save" />
          </form>

        </div>
      </div>
    );

  }


}


export default withRouter(ReviewForm);
