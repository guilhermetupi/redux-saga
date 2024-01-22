import { FETCH_IMAGE_SUCCESS, FETCH_IMAGE_ERROR } from "./actions";
import { Action } from "./types";

const initialState = {
  image: undefined,
  error: null,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload?.image,
        error: null,
      };
    case FETCH_IMAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
