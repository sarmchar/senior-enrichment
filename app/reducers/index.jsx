import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campuses from './campuses';
import students from './students';

import newCampus from './newCampus';
import newStudent from './newStudent';

import currentCampus from './currentCampus';
import showCampusEdit from './showCampusEdit';

const reducer = combineReducers({
  campuses, students, newCampus, newStudent, currentCampus, showCampusEdit
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
export * from './currentCampus';
export * from './showCampusEdit';


/*FROM ../store.jsx */
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

