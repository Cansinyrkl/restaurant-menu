import uuid from "react-uuid";

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case "DELETE_MENU":
      return [...state.filter((item) => item.id !== action.value)];

    case "EDİT_MENU":
      state.filter((food) => {
        if (food.id === action.selectedId) {
          return (food.name = action.newName);
        }
      });
      return [...state];
  }
};

export default MenuReducer;
