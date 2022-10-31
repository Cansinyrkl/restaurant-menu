import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const UserListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const [users, usersDispatch] = useState([
    { id: uuid(), name: "admin", password: "123", admin: true },
    { id: uuid(), name: "user", password: "123", admin: false },
  ]);

  return (
    <UserListContext.Provider value={{ users, usersDispatch }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
