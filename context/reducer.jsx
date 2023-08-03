export const initialState = {
  toggleSidebar: false,
};

export const actionTypes = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSidebar: action.toggleSidebar,
      };
    default:
      return state;
  }
};

export default reducer;
