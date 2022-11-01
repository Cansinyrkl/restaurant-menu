import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), userId: 1, name: "Patates yemeği" },
    { id: uuid(), userId: 1, name: "Soğan yemeği" },
    { id: uuid(), userId: 2, name: "Sosili" },
    { id: uuid(), userId: 2, name: "Mercimek" },
    { id: uuid(), userId: 2, name: "Fırınlanmış poğça" },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);
  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
