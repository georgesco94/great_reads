import React from 'react';


const UserGreet = (props) => {
  return (
    <div className= "user-greet-wrapper">
      <div className="user-greet">
        {props.user.username}
      </div>
    </div>
  );
};

export default UserGreet;
