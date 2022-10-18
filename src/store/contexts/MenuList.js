import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import { menuReducer } from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
    const initialState = [
        { id: uuid(), name: "Punda", price: 100, type: "adasd" },
        { id: uuid(), name: "Manda", price: 1400, type: "adasd" },
        { id: uuid(), name: "Pandu", price: 600, type: "adasd" },
        { id: uuid(), name: "Pansu", price: 800, type: "adasd" },
        { id: uuid(), name: "Panama", price: 900, type: "adasd" },
        { id: uuid(), name: "Paçenko", price: 100, type: "adasd" },
        { id: uuid(), name: "Pastırma", price: 500, type: "adasd" },
        { id: uuid(), name: "Pendırma", price: 700, type: "adasd" },
        { id: uuid(), name: "Pastırda", price: 100, type: "adasd" },
        { id: uuid(), name: "Pastırda", price: 100, type: "adasd" },
    ];
    const [menu, menuDispatch] = useReducer(menuReducer, initialState)

    return (
        <MenuListContext.Provider value={{ menu, menuDispatch }}>
            {children}
        </MenuListContext.Provider>
    )
}

export default MenuListContextProvider;