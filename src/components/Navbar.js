import React from "react";
import { logoutUser } from "../reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const isWriter = user
    ? user.current_user.roles.find((role) => {
        return role.name === "writer";
      })
    : null;

  return (
    <>
      <div>
        {isWriter && <Link to="/publisher/article/new">Add post </Link>}
        {user && <button onClick={handleLogout}>Logout </button>}
        <Link to="/">Home </Link>
        <Link to="/articles">Articles </Link>
        {user && `${user.current_user.display_name} is logged in`}
        {!user && (
          <>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
