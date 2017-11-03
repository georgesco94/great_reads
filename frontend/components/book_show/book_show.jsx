import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReviewItem } from './review_item';
import BookStatus from '../book_status/book_status';

class BookShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(parseInt(this.props.match.params.bookId));
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchStatuses();
  }

  render() {
    
    if (this.props.book){
      const reviews = this.props.reviews.map( review =>
        (
          review ? <ReviewItem key={review.id} review={review} user={this.props.users[review.user_id]} /> : ""
        )
      );
      return (
        <div className="bookshow-wrap">
          <div className="bookshow-container">
            <div className="bookshow-data">
              <div className="book-show">
                <div className="image-status-column">
                  <div className="show-image">
                    <img className="book-cover-show" src={this.props.book.image_url}/>
                  </div>
                  <BookStatus book={this.props.book} status={this.props.status} currUser={this.props.currUser} createStatus={this.props.createStatus} updateStatus={this.props.updateStatus} />
                </div>
                <div className="book-data-column">

                  <div className="b-title">
                    {this.props.book.title}
                  </div>

                  <div className="b-author">
                    by {this.props.book.author}
                  </div>

                  <div className="b-desc">
                    <div className="description-text">
                      {this.props.book.description}
                    </div>
                  </div>

                </div>
              </div>
              {this.props.status.status ? <Link className="link-review-edit" to={`/review/${this.props.book.id}/edit`}>Edit Review</Link> : <p></p>}
              <div className="reviewz">
                {reviews}
              </div>

            </div>
          </div>

        </div>
      );

    }else{
      return (<p>Loading</p>) ;
    }

  }


}


export default withRouter(BookShow);
