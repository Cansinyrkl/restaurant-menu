import React, { createContext, useState, useReducer } from "react";
import uuid from "react-uuid";
import UserReducer from "../reducer/UsersReducer";

export const UserListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const [userdatas, setUserDatas] = useState([
    { id: uuid(), name: "admin", password: "123", admin: true },
    { id: uuid(), name: "user", password: "123", admin: false },
  ]);
  const [user, userDispatch] = useReducer(UserReducer);
  return (
    <UserListContext.Provider value={{ userdatas, setUserDatas }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
