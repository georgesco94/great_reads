import React from 'react';

const UserGreet = (props) => {
  return (
    <div className= "user-greet-wrapper">
      <div className="user-greet">
        Gretings: {props.user.username} ! <br/>
      <img className="read-challenge-logo" src={window.readChallenge} />
      Scroll through the books in the database and toggle their status to add them to your
      bookshelf. <br/> So far you've read: {numRead(props.shelves)} books. <br/> Add more !
      </div>
    </div>
  );
};

const numRead = (shelves) => {
  let read = 0;
  Object.keys(shelves).forEach( (key) => {
    if (shelves[key].name === 'read'){
      read = shelves[key].bookIds.length;
    }
  });
  return read;
};

export default UserGreet;
