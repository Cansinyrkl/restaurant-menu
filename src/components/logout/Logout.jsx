import { React, useContext, useNavigate, UserListContext } from "./Index";

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
      id="LogoutBtn"
      className="LogoutBtn"
      type="submit"
      onClick={btnLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
