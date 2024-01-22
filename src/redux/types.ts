import {
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
} from "./actions";

export type Action = {
  type:
    | typeof FETCH_IMAGE_REQUEST
    | typeof FETCH_IMAGE_SUCCESS
    | typeof FETCH_IMAGE_ERROR;
  payload?: FETCH_IMAGE_SUCCESS_PAYLOAD & FETCH_IMAGE_ERROR_PAYLOAD;
};

type FETCH_IMAGE_SUCCESS_PAYLOAD = { image?: string };
type FETCH_IMAGE_ERROR_PAYLOAD = { error?: string };
