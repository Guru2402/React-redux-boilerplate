import { TEST } from "../constant";

const InitialState = {};

export default (state = InitialState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
