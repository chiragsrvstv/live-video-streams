import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";



export default (state = {}, action) => {
  switch (action.type){

    case FETCH_STREAMS:
      // a new obj is being created by taking current records. mapKeys take all
      // of the data from payload and convert that into a new object with keys
      // equal to the property specified after the comma(id here), ... at
      // mapKeys mean that a new obj is to be created everytime that is
      // holding the prev. values as well.
      return {...state, ..._.mapKeys(action.payload, 'id')};

    case FETCH_STREAM:
    // below is an es6 syntax for key interpolation, its a key value not an array.
      return {...state, [action.payload.id]: action.payload};

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};

    case DELETE_STREAM:
    // here the payload is id itself, check action creator. Using lodash here.
      return _.omit(state, action.payload);


    default:
    return state;
  }
};
