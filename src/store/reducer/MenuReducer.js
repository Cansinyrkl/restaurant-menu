import uuid from "react-uuid";

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return [...state, { id: uuid(), name: action.value, price: 100 }];

    case "DELETE_MENU":
      return [...state.filter((item) => item.id !== action.value)];

    case "EDİT_MENU":
      return [...state.filter((item) => item.id === action.value)];
  }
};

export default MenuReducer;
