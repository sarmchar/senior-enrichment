import axios from 'axios';

// Action types
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';

// Action creators
export function getStudent(student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

// thunk creators
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/student')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
      });
  };
}

export function putStudent(id, student) {
  return function thunk(dispatch) {
    return axios.put(`/api/student/${id}`, student)
    .then(res => dispatch(getStudent(res.data)))
    .catch(err => console.error('put failed', err));
  };
}

// Reducer function, default state = []
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
}
