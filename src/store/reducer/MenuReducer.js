import uuid from "react-uuid";

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return [...state, { id: uuid(), name: action.value, price: 100 }];
    // case "ADD_MENU":
    //   return {
    //     ...state,
    //     menuAdd: "",
    //     menu: [...state.menu, action.menuAdd],
    //   };
  }
};

export default MenuReducer;
