import "./Menu.css";
import { useMenuList } from "../../hooks/MenuListHooks";
import { useState, useContext } from "react";
import DeleteModal from "../delete/DeleteModal";
import Arrangement from "../arrangement/Arrangement";
import { UserListContext } from "../../store/contexts/useUserContext";
import { getSession } from "../../utils/Sessions";
import { useEffect } from "react";

const Menu = () => {
  const { menu, menuDispatch, menuList } = useMenuList();
  const loginUser = getSession();
  const { users } = useContext(UserListContext);
  const [menuAdd, setMenuAdd] = useState("");
  const [menuName, setMenuName] = useState("");
  const sessionId = sessionStorage.getItem("userInfo");
  const userFilter = users.find((userFilter) => {
    return userFilter;
  });

  const submitHandle = (e) => {
    e.preventDefault();
    menuDispatch({
      type: "SET_MENU",
      userId: sessionId,
      value: menuName,
    });
  };
  // useEffect(() => {
  //   menuList.menuDispatch({
  //     type: "FILTER_USER",
  //     loginUser,
  //     admin: userFilter.admin,
  //   });
  // });

  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setMenuName(upperCase);
  };

  return (
    <>
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
          className="input"
          value={menuName}
        />
        <button className="button" type="submit">
          Ekle
        </button>
      </form>
      {menu.map((menuAdd, index) => {
        <td key={index}>{menuAdd}</td>;
      })}
    </>
  );
};

export default Menu;
