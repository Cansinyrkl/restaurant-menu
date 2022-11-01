import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserListContext } from "../../store/contexts/useUserContext";

const Logout = () => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const btnLogout = () => {
    const usersLogout = users.find((user) => {
      return user.name && user.password;
    });
    if (usersLogout) {
      navigate("/");
      sessionStorage.clear();
    }
  };

  return (
    <button
      id="LogoutShow"
      className="LogoutShow"
      type="submit"
      onClick={btnLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
