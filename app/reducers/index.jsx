import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses';
import students from './students';

import newCampus from './newCampus';
import newStudent from './newStudent';

const reducer = combineReducers({
  campuses, students, newCampus, newStudent
});


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

export * from './campuses';
export * from './students';
export * from './newCampus';
export * from './newStudent';
