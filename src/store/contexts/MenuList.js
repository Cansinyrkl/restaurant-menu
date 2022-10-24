import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), name: "Punda", price: 100 },
    { id: uuid(), name: "Manda", price: 1400 },
    { id: uuid(), name: "Pandu", price: 600 },
    { id: uuid(), name: "Pansu", price: 800 },
    { id: uuid(), name: "Panama", price: 900 },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
