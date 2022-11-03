import "./Menu.css";
import { useMenuList } from "../../hooks/MenuListHooks";
import { useState, useContext } from "react";
import DeleteModal from "../delete/DeleteModal";
import Arrangement from "../arrangement/Arrangement";
import { UserListContext } from "../../store/contexts/useUserContext";

const Menu = () => {
  const { menu, menuDispatch } = useMenuList();
  const { users } = useContext(UserListContext);
  const [menuAdd, setMenuAdd] = useState("");
  const [menuName, setMenuName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    menuDispatch({
      type: "SET_MENU",
      value: menuName,
    });
  };
  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setMenuName(upperCase);
  };
  const sessionId = sessionStorage.getItem("userInfo");

  const usersObject = users.map((usersObject) => {
    return usersObject.id;
  });
  console.log(usersObject);

  return (
    <>
      <h3 className="menu-header">ÜRÜNLER</h3>
      {menu.map((item) => {
        return (
          <table className="customers" key={item.id}>
            <td>
              {item.name}
              <div className="props">
                <DeleteModal
                  deleteId={item.id}
                  productHeader={item.name}
                  className="deleteModalClass"
                />
                <Arrangement
                  productHeader={item.name}
                  selectedId={item.id}
                  className="arrangementClass"
                />
              </div>
            </td>
          </table>
        );
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
