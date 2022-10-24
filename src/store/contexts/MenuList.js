import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import { menuReducer } from "../reducer/MenuReducer";

export const MenuListContext = createContext();

const MenuListContextProvider = ({ children }) => {
    const initialState = [
        { id: uuid(), name: "Punda", price: 100 },
        { id: uuid(), name: "Manda", price: 1400 },
        { id: uuid(), name: "Pandu", price: 600 },
        { id: uuid(), name: "Pansu", price: 800 },
        { id: uuid(), name: "Panama", price: 900 },
        { id: uuid(), name: "Paçenko", price: 100 },
        { id: uuid(), name: "Pastırma", price: 500 },
        { id: uuid(), name: "Pendırma", price: 700 },
        { id: uuid(), name: "Pastırda", price: 100 },
        { id: uuid(), name: "Pastırda", price: 100 },
    ];
    const [menu, menuDispatch] = useReducer(menuReducer, initialState)

    return (
        <MenuListContext.Provider value={{ menu, menuDispatch }}>
            {children}
        </MenuListContext.Provider>
    )
}

export default MenuListContextProvider;