import React from "react";
import User from "../User/User";

const Profile = () => {
  return (
    <div className="Profiel">
      {users && users.length > 0 ? (
        users.map((user) => (
          <User
            key={user._id}
            userId={user._id}
            name={user.name}
            // avatar={user.avatar.url}
          />
        ))
      ) : (
        <Typography>No Users Yet</Typography>
      )}
    </div>
  );
};

export default Profile;
