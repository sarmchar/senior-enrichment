import axios from 'axios';

// Action types
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const REMOVE = 'REMOVE_CAMPUS';

// Action creators
export function getCampus(campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function removeCampus(id){
  return { type: REMOVE, id };
}

// thunk creators
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      })
      .catch(err => console.error('fetch campuses failed', err));
  };
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campus', campus)
      .then(res => dispatch(getCampus(res.data)))
      .catch(err => console.error('post failed', err));
  };
}

export function putCampus(id, campus) {
  return function thunk(dispatch) {
    return axios.put(`/api/campus/${id}`, campus)
    .then(res => dispatch(getCampus(res.data)))
    .catch(err => console.error('put failed', err));
  };
}

export function deleteCampus(id){
  return function thunk(dispatch){
    dispatch(removeCampus(id));
    return axios.delete(`/api/campus/${id}`)
    .catch(err => console.error('delete campus failed', err));
  };
}

// Reducer function, default state = []
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    case REMOVE:
      return state.filter(campus => campus.id !== action.id);
    default:
      return state;
  }
}
