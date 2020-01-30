// action creators

import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT, CREATE_STREAM} from './types'

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

//

export const createStream = (formValues) => {
  // using redux thunk
  return async (dispatch) => {
    // posting the form values at /streams
    const response = await streams.post('/streams', formValues);
    // dispatching actionCreator with payload as data fetched by axios
    dispatch({type: CREATE_STREAM, payload: response.data});
  };
};
