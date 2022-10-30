import uuid from "react-uuid";

const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return [...state, { id: uuid(), name: action.value, price: 100 }];

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

export default UserReducer;
