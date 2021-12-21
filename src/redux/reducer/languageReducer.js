const initalState = {
  language: "English",
};

export const languageReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_Language":
      return {
        ...state,
        language: action.payload,
      };
    case "RESET":
      return initalState;
    default:
      return state;
  }
};
