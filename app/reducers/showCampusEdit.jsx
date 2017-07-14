const TOGGLE_CAMPUS_EDIT = 'TOGGLE_CAMPUS_EDIT';

// function toggleCampusEdit (state) {
//   return {type: TOGGLE_CAMPUS_EDIT, !state};
// }
const toggleEdit = state => ({type: TOGGLE_CAMPUS_EDIT, state});

export default function reducer (state = false, action) {
  switch (action.type) {
    case TOGGLE_CAMPUS_EDIT:
      return action.state;
    default: return state;
  }
}

export const toggleCampusEdit = state => dispatch => {
  dispatch(toggleEdit(!state));
};
