import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), name: "Punda" },
    { id: uuid(), name: "Manda" },
    { id: uuid(), name: "Pandu" },
    { id: uuid(), name: "Pansu" },
    { id: uuid(), name: "Panama" },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
