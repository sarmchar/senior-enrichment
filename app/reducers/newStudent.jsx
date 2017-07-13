// ACTION TYPES

const WRITE_STUDENT = 'WRITE_STUDENT';

// ACTION CREATORS

export function writeMessage (content) {
  const action = { type: WRITE_STUDENT, content };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_STUDENT:
      return action.content;

    default:
      return state;
  }

}
