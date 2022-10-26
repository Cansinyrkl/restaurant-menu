import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";
import MenuListContextProvider from "./store/contexts/useMenuList";

function App() {
  return (
    <div className="App">
      <MenuListContextProvider>
        <Title />
        <Menu />
      </MenuListContextProvider>
    </div>
  );
}

export default App;
