import "./Menu.css";
import { useMenuList } from "../../hooks/MenuListHooks";
import { useState, useContext } from "react";
import DeleteModal from "../delete/DeleteModal";
import { UserListContext } from "../../store/contexts/useUserContext";
import Arrangement from "../arrangement/Arrangement";

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

  const checkId = users.map((user) => {
    return user.id;
  });

  const menuMap = menu.map((menuFind) => {
    return menuFind.userId;
  });

  const idSame = checkId === menuMap;

  if (idSame) {
    return sessionStorage.getItem("userInfo", checkId);
  }

  console.log(idSame);

  return (
    <>
      <h3 className="menu-header">ÜRÜNLER</h3>
      {menu?.map((item) => {
        return (
          <table className="customers" key={item.id}>
            <td>
              <div>{item.name}</div>
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
