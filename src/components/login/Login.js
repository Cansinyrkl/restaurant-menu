import "./Login.css";
import { Formik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserListContext } from "../../store/contexts/useUserContext";

const Login = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserListContext);

  return (
    <div className="formContainer">
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "username boş bırakılamaz";
          }
          if (!values.password) {
            errors.password = "password boş bırakılamaz";
          } else if (
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
          ) {
            errors.username = "geçersiz username ";
          }
          return errors;
        }}
        onSubmit={(values) => {
          const checkUser = users.find(
            (user) =>
              values.username === user.name && values.password === user.password
          );
          if (checkUser) {
            navigate("/menu");
            sessionStorage.setItem("userInfo", JSON.stringify(checkUser.id));
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div className="loginheader">Class Giriş</div>
            <form onSubmit={handleSubmit} className="form">
              <div className="userNameHeader">UserName</div>
              <input
                className="username"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <div className="passwordHeader">Password</div>
              <input
                className="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button className="loginBtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
