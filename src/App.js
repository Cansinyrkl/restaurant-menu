import Title from "./components/title/Title";
import MenuListContextProvider from "./store/contexts/useMenuList";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./components/login/Login";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <MenuListContextProvider>
          <Title />
          <Routes>
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </MenuListContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
