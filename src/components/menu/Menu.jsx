import {
  React,
  Logout,
  useState,
  getSession,
  DeleteModal,
  Arrangement,
  useMenuList,
  useUserContext,
  getUserFromSession,
} from "./Index";

const Menu = () => {
  const [menuAdd, setMenuAdd] = useState("");
  const { menu, menuDispatch } = useMenuList();
  const { userList, user } = useUserContext();
  const sessionId = sessionStorage.getItem("userInfo");
  const loginUser = getSession();
  const loggedInUser = getUserFromSession(userList.users, loginUser);

  const submitHandle = (e) => {
    e.preventDefault();
    menuDispatch({
      type: "ADD_MENU",
      userId: loginUser,
      text: menuAdd,
    });
  };
  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setMenuAdd(upperCase);
  };

  return (
    <>
      <Logout className="Logout" />
      {menu.map(({ id, name, userId }) => {
        if (Number(sessionId) === userId || loggedInUser.admin === true) {
          return (
            <table className="customers" key={id}>
              <td>
                {name}
                <div className="props">
                  <DeleteModal
                    deleteId={id}
                    productHeader={name}
                    className="deleteModalClass"
                  />
                  <Arrangement
                    productHeader={name}
                    selectedId={id}
                    className="arrangementClass"
                  />
                </div>
              </td>
            </table>
          );
        }
      })}
      <form onSubmit={submitHandle} className="form">
        <input
          type="text"
          onChange={onChange}
          maxLength="16"
          placeholder="Ürünü buraya giriniz"
          className="menuAddInput"
          value={menuAdd}
        />
        <button className="menuAddBtn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Menu;
