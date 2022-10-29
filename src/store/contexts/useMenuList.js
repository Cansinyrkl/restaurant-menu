import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import MenuReducer from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), name: "Patates yemeği" },
    { id: uuid(), name: "Soğan yemeği" },
    { id: uuid(), name: "Sosili" },
    { id: uuid(), name: "Mercimek" },
    { id: uuid(), name: "Fırınlanmış poğça" },
  ];
  const [menu, menuDispatch] = useReducer(MenuReducer, initialState);
  return (
    <MenuListContext.Provider value={{ menu, menuDispatch }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListContextProvider;
