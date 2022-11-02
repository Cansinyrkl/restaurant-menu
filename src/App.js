import Title from "./components/title/Title";
import MenuListContextProvider from "./store/contexts/useMenuList";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./store/contexts/useUserContext";
import Menu from "./components/menu/Menu";
// import Login from "./components/_login/_Login";
import Login from "./components/login/Login";
import DarkMode from "./components/darkmode/DarkMode";
import "./App.css";
import Logout from "./components/logout/Logout";

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
