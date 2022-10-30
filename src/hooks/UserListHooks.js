import { useContext } from "react";
import { UserListContext } from "../store/contexts/useUserContext";

export const useUserContext = () => {
  const userList = useContext(UserListContext);
  const user = userList.user;
  return { user };
};
