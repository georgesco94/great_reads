import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {SearchResultItem} from "../search_results/search_result_item";


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      review: '',
      rating: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {review:this.state.review,
      rating:this.state.rating,user_id:this.props.user.id,
      book_id:this.props.book.id};

    this.props.createReview(review);
  }

  componentDidMount() {
    debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps() {
    debugger
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }


  render(){
    debugger
    if(!this.props.book) {
      return ("");
    }
    return (
      <div className="review-container">
        <div className="review-items">
          <SearchResultItem review={true} book={this.props.book} />
        </div>
      </div>
    );

  }


}


export default withRouter(ReviewForm);
