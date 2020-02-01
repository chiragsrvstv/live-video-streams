import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../action/types";

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_STREAM:
    // below is an es6 syntax for key interpolation, its a key value not an array.
      return {..state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    default:
    return state;
  }
};
