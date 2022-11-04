import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import DarkMode from "./components/darkmode/DarkMode";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./store/contexts/useUserContext";
import MenuListContextProvider from "./store/contexts/useMenuList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <MenuListContextProvider>
          <DarkMode />
          <Logout />
          <Title />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </MenuListContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
