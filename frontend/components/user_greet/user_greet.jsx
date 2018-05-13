import React from 'react';


const UserGreet = (props) => {
  return (
    <div className="user-greet">
      {props.user.username}
    </div>
  );
};

export default UserGreet;
