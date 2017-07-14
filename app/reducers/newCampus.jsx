// Action types
const WRITE_CAMPUS = 'WRITE_CAMPUS';

//Action Creator
export function writeCampus(content) {
  return  { type: WRITE_CAMPUS, content };
}

//Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.content;
    default: return state;
  }
}
