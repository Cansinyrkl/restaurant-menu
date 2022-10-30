import "./Login.css";
import uuid from "react-uuid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userdatas] = useState([
    { id: uuid(), name: "admin", password: "123", admin: true },
    { id: uuid(), name: "user", password: "123", admin: false },
  ]);
  const [userNameHolder, setUserNameHolder] = useState();
  const [passwordHolder, setPasswordHolder] = useState();

  const navigate = useNavigate();

  const userDataHolder = (e) => {
    const userNameValue = e.target.value;
    setUserNameHolder(userNameValue);
  };
  const passawordDataHolder = (e) => {
    const passawordValue = e.target.value;
    setPasswordHolder(passawordValue);
  };

  const btnClick = () => {
    const checkUser = userdatas.find((user) => {
      return userNameHolder === user.name && passwordHolder === user.password;
    });

    if (checkUser) {
      if (checkUser.admin === true) {
        navigate("/menu");
      } else {
        navigate("/menu");
      }
    } else {
      alert("Yanlış Giriş Yaptınız");
    }
  };
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
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
