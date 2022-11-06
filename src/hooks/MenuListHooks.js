import { useContext, MenuListContext } from "./Index";

export const useMenuList = () => {
  const menuList = useContext(MenuListContext);
  const menu = menuList.menu;
  const menuDispatch = menuList.menuDispatch;

  return { menu, menuDispatch, menuList };
};
