import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  render() {
    debugger
    if (this.props.book){
      return (
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

          </div>
        </div>
      )

    }else{
      return (<p>Loading</p>) ;
    }

  }


}


export default withRouter(BookShow);
