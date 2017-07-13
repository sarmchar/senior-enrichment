// ACTION TYPES
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';

// ACTION CREATORS
export function changeCurrentCampus (campus) {
  const action = { type: CHANGE_CAMPUS, campus };
  return action;
}

// REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {
    case CHANGE_CAMPUS:
      return action.campus;
    default:
      return state;
  }

}
