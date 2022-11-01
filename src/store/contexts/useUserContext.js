import React, { createContext, useState } from "react";

export const UserListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const [users, usersDispatch] = useState([
    { id: 1, name: "admin", password: "123", admin: true },
    { id: 2, name: "user", password: "123", admin: false },
  ]);

  return (
    <UserListContext.Provider value={{ users, usersDispatch }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
