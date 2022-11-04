import "./Menu.css";
import { useMenuList } from "../../hooks/MenuListHooks";
import { useState, useContext } from "react";
import DeleteModal from "../delete/DeleteModal";
import Arrangement from "../arrangement/Arrangement";
import { UserListContext } from "../../store/contexts/useUserContext";
import { getSession } from "../../utils/Sessions";
import Logout from "../logout/Logout";

const Menu = () => {
  const { menu, menuDispatch, menuList } = useMenuList();
  const loginUser = getSession();
  const { users } = useContext(UserListContext);
  const [menuAdd, setMenuAdd] = useState("");
  const sessionId = sessionStorage.getItem("userInfo");
  const userFilter = users.find((userFilter) => {
    return userFilter;
  });

  console.log(loginUser);

  const submitHandle = (e) => {
    e.preventDefault();
    menuDispatch({
      type: "ADD_MENU",
      userId: loginUser,
      text: menuAdd,
    });
  };
  console.log();

  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setMenuAdd(upperCase);
  };

  return (
    <>
      <Logout className="Logout" />
      {menu.map(({ id, name, userId }) => {
        if (sessionId == userId) {
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
      {menu.map((menuAdd, index) => {
        <td key={index}>{menuAdd}</td>;
      })}
    </>
  );
};

export default Menu;
