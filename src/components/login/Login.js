import React, { useContext } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserListContext } from "../../store/contexts/useUserContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserListContext);

  return (
    <div>
      <h1>CLASS BURGER</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "username boş bırakılamaz";
          } else if (
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
          ) {
            errors.username = "geçersiz username ";
          }
          return errors;
        }}
        onSubmit={(values) => {
          const checkUser = users.find((user) => {
            return (
              values.username === user.name && values.password === user.password
            );
          });
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
          <form onSubmit={handleSubmit}>
            <input
              className="userinput"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
            <input
              className="passwordinput"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
