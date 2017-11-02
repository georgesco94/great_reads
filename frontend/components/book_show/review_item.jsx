import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import {RatingItem} from './rating_item';
export const ReviewItem = (props) => {
  if (props.user){
    return (

      <div className="review-item">

        <div className="user-image-col">
          <div className="user-image">
            <img className="user-img" src={props.user.image_url}/>
          </div>
        </div>

        <div className="rev-col">
          <div className="reviewer-rating">
            {props.user.username} Rated it &nbsp;
            <RatingItem rating={props.review.rating} />
          </div>
          <div className="review">
            {props.review.review}
          </div>
        </div>

      </div>

    );

  }
  else{
    return <div></div> ;
  }


};
