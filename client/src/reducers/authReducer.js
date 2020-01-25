import {SIGN_IN, SIGN_OUT} from '../actions/types';

const ININTIAL_STATE = {  // capitalize syntax means don;t try to modify this const value
  isSignedIn: null
}

export default (state = ININTIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...state, isSignedIn: true};
    case SIGN_OUT:
      return {...state, isSignedIn: false};
    default:
      return state;
  }



};
