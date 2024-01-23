import React, {useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
      return <h1>Please Login</h1>;
    }
    return (
      <div>
        <h1>welcome</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    );
}

export default Profile;