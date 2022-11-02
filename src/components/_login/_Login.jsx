import "./Login.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserListContext } from "../../store/contexts/useUserContext";

const Login = () => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const [userNameHolder, setUserNameHolder] = useState();
  const [passwordHolder, setPasswordHolder] = useState();

  const userDataHolder = (e) => {
    const userNameValue = e.target.value;
    setUserNameHolder(userNameValue);
  };
  const passawordDataHolder = (e) => {
    const passawordValue = e.target.value;
    setPasswordHolder(passawordValue);
  };

  const btnClick = () => {
    const checkUser = users.find((user) => {
      return userNameHolder === user.name && passwordHolder === user.password;
    });
    if (checkUser) {
      navigate("/menu");
      sessionStorage.setItem("userInfo", checkUser.id);
    } else {
      alert("yanlıs girdin");
    }
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Class Burger Giriş</h1>
        <form className="form-container">
          <input
            type="text"
            name="userName"
            placeholder="username"
            onChange={userDataHolder}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={passawordDataHolder}
          />
        </form>
        <button type="submit" onClick={btnClick} className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
