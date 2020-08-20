const initialState = {
  focusedInSidebar: false,
  isLeaving: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOCUSED_SIDEBAR':
      return {
        ...state,
        focusedInSidebar: action.focused,
      };
      case 'SET_IS_LEAVING':
      return {
        ...state,
        isLeaving: action.isLeaving,
      };
    default:
      return state;
  }
};

export default app;
