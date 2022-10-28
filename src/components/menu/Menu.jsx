import "./Menu.css";
import { useMenuList } from "../../hooks/MenuListHooks";
import { useState } from "react";
import DeleteModal from "../delete/DeleteModal";
import Arrangement from "../arrangement/Arrangement";

const Menu = () => {
  const { menu, menuDispatch } = useMenuList();
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
  return (
    <>
      <h3 className="menu-header">ÜRÜNLER</h3>
      {menu?.map((item) => {
        return (
          <table className="customers" key={item.id}>
            <tr>
              <td className="productitem">
                {item.name}
                <DeleteModal deleteId={item.id} productHeader={item.name} />
                <Arrangement productHeader={item.name} deleteId={item.id} />
              </td>
            </tr>
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
      <tr>
        {menu.map((menuAdd, index) => {
          <td key={index}>{menuAdd}</td>;
        })}
      </tr>
    </>
  );
};

export default Menu;
