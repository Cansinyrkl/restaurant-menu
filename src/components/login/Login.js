import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserListContext } from "../../store/contexts/useUserContext";
import "./Login.css";
import * as yup from "yup";

const Logged = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserListContext);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const btnClick = () => {
    const checkUser = users.find((user) => {
      return values.username === user.name && values.password === user.password;
    });
    if (checkUser) {
      navigate("/menu");
      sessionStorage.setItem("userInfo", checkUser.id);
    }
  };
  const schema = yup.object().shape({
    username: yup.string().required("kullanıcı adı boş bırakılamaz"),
    password: yup.string().required("Şifre  boş bırakılamaz"),
  });

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">kullanıcı</label>
        <input
          type="text"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">şifre</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" className="btnClick" onClick={btnClick}>
          giriş yap
        </button>
      </form>
    </div>
  );
};

export default Logged;
