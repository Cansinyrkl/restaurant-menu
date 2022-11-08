import {
  React,
  Formik,
  Container,
  LoginForms,
  LoginInput,
  useContext,
  LoginHeader,
  useNavigate,
  GeneralButton,
  FormContainer,
  UserListContext,
} from "./Index";

const Login = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserListContext);

  return (
    <Container>
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
            ({ name, password }) =>
              values.username === name && values.password === password
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
          <FormContainer>
            <LoginForms onSubmit={handleSubmit}>
              <LoginHeader>UserName</LoginHeader>
              <LoginInput
                className="username"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <LoginHeader>Password</LoginHeader>
              <LoginInput
                className="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <GeneralButton type="submit">Submit</GeneralButton>
            </LoginForms>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
