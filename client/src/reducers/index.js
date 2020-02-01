//  reducers

import {combineReducers} from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer.js'

// importing pre-provided reducer from redux-form
import {reducer} from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: reducer,
  streams: streamReducer
});
