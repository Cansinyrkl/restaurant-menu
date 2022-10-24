import "./Menu.css";
import { useMenuList } from "../../hooks/MenuList";
import { useState } from "react";
import MenuReducer from "../../store/reducer/MenuReducer";

const Menu = () => {
  const { menu, menuDispatch } = useMenuList();
  const [menuAdd, setMenuAdd] = useState("");
  const [menuName, setMenuName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    // menuDispatch([...menu, menuAdd]);
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
      <table id="customers">
        <tr>
          <th>ürün</th>
          <th>fiyat</th>
        </tr>
      </table>
      {menu?.map((item) => {
        return (
          <table id="customers">
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          </table>
        );
      })}
      <form onSubmit={submitHandle} className="input">
        <input type="text" onChange={onChange} maxLength="4" />
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
