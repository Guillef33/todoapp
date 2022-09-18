import React from "react";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

function UserPageForm({ loggedTo }) {
  return <>{loggedTo ? <Login /> : <Register />}</>;
}

export default UserPageForm;
