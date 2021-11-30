import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {},
  loggedIn: true,
  showMenu: false,
  friends: [],
  showPost: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "GET_USER_DATA":
      return { ...state, user: action.payload };
    case "LOGGED_IN":
      return { ...state, loggedIn: true };
    case "NOT_LOGGED_IN":
      return { ...state, loggedIn: false };
    case "SHOW_MENU":
      return { ...state, showMenu: true };
    case "CLOSE_MENU":
      return { ...state, showMenu: false };
    case "GET_FRIENDS_DATA":
      return { ...state, friends: action.payload };
    case "SHOW_POST_PAGE":
      return {
        ...state,
        showPost: true,
      };
    case "CLOSE_POST_PAGE":
      return {
        ...state,
        showPost: false,
      };
    default:
      return state;
  }
};

export default reducer;
