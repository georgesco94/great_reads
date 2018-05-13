import React from 'react';

const UserGreet = (props) => {
  return (
    <div className= "user-greet-wrapper">
      <div className="user-greet">
        <div className= 'greet-text'>
            Gretings: {props.user.username} ! <br/>
        </div>

        <div className='challenge-box'>
          <img className="read-challenge-logo" src={window.readChallenge} />
          <div className='challenge-text-wrapper'>
            <div className = "challenge-text">
              So far you've read: {numRead(props.shelves)} books. <br/> Add more !

            </div>
          </div>
        </div>

        <div className='add-more'>
          Scroll through the books in the database and toggle their status to add them to your
          bookshelf.

        </div>
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
