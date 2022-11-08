import {
  React,
  Logout,
  useState,
  getSession,
  DeleteModal,
  Arrangement,
  useMenuList,
  useUserContext,
  getUserFromSession,
  TdInside,
  MenuProductTd,
  Container,
  GeneralButton,
  LoginInput,
  FormContainer,
  Forms,
} from "./Index";

const Menu = () => {
  const [menuAdd, setMenuAdd] = useState("");
  const { menu, menuDispatch } = useMenuList();
  const { userList } = useUserContext();
  const sessionId = sessionStorage.getItem("userInfo");
  const loginUser = getSession();
  const loggedInUser = getUserFromSession(userList.users, loginUser);

  const submitHandle = (e) => {
    e.preventDefault();
    menuDispatch({
      type: "ADD_MENU",
      userId: loginUser,
      text: menuAdd,
    });
  };
  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setMenuAdd(upperCase);
  };

  return (
    <Container>
      <FormContainer>
        <Logout className="Logout" />
        {menu.map(({ id, name, userId }) => {
          if (Number(sessionId) === userId || loggedInUser.admin === true) {
            return (
              <MenuProductTd>
                {name}
                <TdInside className="props">
                  <DeleteModal
                    deleteId={id}
                    productHeader={name}
                    className="deleteModalClass"
                  />
                  <Arrangement
                    productHeader={name}
                    selectedId={id}
                    className="arrangementClass"
                  />
                </TdInside>
              </MenuProductTd>
            );
          }
          return null;
        })}
        <Forms onSubmit={submitHandle}>
          <LoginInput
            type="text"
            onChange={onChange}
            maxLength="16"
            placeholder="Ürünü buraya giriniz"
            className="menuAddInput"
            value={menuAdd}
          />
          <GeneralButton className="menuAddBtn" type="submit">
            Add
          </GeneralButton>
        </Forms>
      </FormContainer>
    </Container>
  );
};

export default Menu;
