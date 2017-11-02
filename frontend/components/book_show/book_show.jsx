import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReviewItem } from './review_item';

class BookShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId).then(()=>
      this.props.fetchReviews().
        then(()=> this.props.fetchUsers()
    ));

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
                  <div className="book-status-box">
                    <div>
                      <button className="status-button">Status</button>
                      <button className="change-status-button">
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="star-rating">Rate it</div>
                  </div>
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
