import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 2, name: "todo user " },
    { id: uuid(), userId: 2, name: "todo user " },
    { id: uuid(), userId: 2, name: "todo user " },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);
  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
