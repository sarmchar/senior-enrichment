
// ACTION TYPES
const WRITE_STUDENT = 'WRITE_STUDENT';

// ACTION CREATORS
export function writeStudent (content) {
  return { type: WRITE_STUDENT, content };
}

// REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.content;
    default:
      return state;
  }
}
