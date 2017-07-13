import axios from 'axios';

// Action types
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// Action creators
export function getCampus(campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

// thunk creators
export function fetchCampuses() {
  console.log('fetch campuses thunk####');
  return function thunk(dispatch) {
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newcampus => {
        const action = getCampus(newcampus);
        dispatch(action);
      });
  };
}

// Reducer function, default state = []
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
}
