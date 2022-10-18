import "./Menu.css";
import { useMenuList } from "../../hooks/MenuList";

const Menu = () => {
  const { menu, dispatch } = useMenuList();

  return (
    <div>
      <table className="p1" id="customers">
        {menu.map((food) => {
          return (
            <tr>
              <td>{food.name}</td>
              <td>{food.price}</td>
              <td>{food.type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Menu;
