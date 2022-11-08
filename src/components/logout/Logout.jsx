import {
  React,
  useContext,
  useNavigate,
  GeneralButton,
  UserListContext,
} from "./Index";

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
    <GeneralButton
      id="LogoutBtn"
      className="LogoutBtn"
      type="submit"
      onClick={btnLogout}
    >
      Logout
    </GeneralButton>
  );
};

export default Logout;
