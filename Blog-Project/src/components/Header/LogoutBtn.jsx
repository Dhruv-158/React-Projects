/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/Auth";
import { logout } from "../../Store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()))
  };
  return (
    <button className=" inline-block px-6 py-2 duration-200 hover:text-white active:text-white" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
