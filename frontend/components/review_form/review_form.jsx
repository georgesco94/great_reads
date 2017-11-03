import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {SearchResultItem} from "../search_results/search_result_item";


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      review: this.props.review,
      rating: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {review:this.state.review,
      rating:this.state.rating,user_id:this.props.user.id,
      book_id:this.props.book.id};
    this.props.action(review).then(this.props.history.push(`/books/${this.props.book.id}`));
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
    this.props.fetchReviews();
  }
  componentWillReceiveProps(newProps) {
    this.setState({review: newProps.review});
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
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
          <div className="my-rating">myrating</div>
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
