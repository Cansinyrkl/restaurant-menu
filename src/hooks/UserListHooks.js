import { useContext, UserListContext } from "./Index";

export const useUserContext = () => {
  const userList = useContext(UserListContext);
  const user = userList.users;

  return { userList, user };
};
