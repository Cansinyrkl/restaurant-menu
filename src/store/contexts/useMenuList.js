import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), name: "Mercümek" },
    { id: uuid(), name: "Mercümekli Köfte" },
    { id: uuid(), name: "Mercümeksiz Köfte" },
    { id: uuid(), name: "Köftesiz Mercümek" },
    { id: uuid(), name: "Köftesiz Köfte" },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
