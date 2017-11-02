import React from 'react';
import { Link,withRouter } from 'react-router-dom';

export const RatingItem = (props) => {
      if(!props.rating){
        return (
          <div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </div>
        );
     }else{
       if(props.rating === 2){
         return (
           <div>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
           </div>
         );
       }
       if(props.rating === 3){
         return (
           <div>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
           </div>
         );
       }
       if(props.rating === 4){
         return (
           <div>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star-"></i>
             <i className="fa fa-star-"></i>
             <i className="fa fa-star-o"></i>
           </div>
         );
       }
       if(props.rating === 5){
         return (
           <div>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
           </div>
         );
       }
       if(props.rating === 1){
         return (
           <div>
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
             <i className="fa fa-star-o"></i>
           </div>
         );
       }
     }

  };
