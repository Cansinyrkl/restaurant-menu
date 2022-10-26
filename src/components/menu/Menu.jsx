import "./Menu.css";
import { useMenuList } from "../../hooks/MenuList";
import { useState } from "react";
import DeleteModal from "../delete/DeleteModal";

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
    setMenuName(e.target.value);
  };

  return (
    <>
      <table className="customers">
        <tr>
          <th>ÜRÜNLER</th>
        </tr>
      </table>
      {menu?.map((item) => {
        return (
          <table className="customers">
            <tr>
              <td>{item.name}</td>
              <td>{item.fiyat}</td>
              <DeleteModal deleteId={item.id} className="productitem" />
            </tr>
          </table>
        );
      })}

      <form onSubmit={submitHandle} className="input">
        <input type="text" onChange={onChange} maxLength="16" />
        <button type="submit">Ekle</button>
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
