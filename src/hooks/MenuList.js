import { useContext } from "react";
import { MenuListContext } from "../store/contexts/MenuList";

export const useMenuList = () => {
  const menuList = useContext(MenuListContext);
  const menu = menuList.menu;
  const menuDispatch = menuList.menuDispatch;
  return { menu, menuDispatch };
};
