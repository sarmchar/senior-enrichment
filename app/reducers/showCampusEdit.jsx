const TOGGLE_CAMPUS_EDIT = 'TOGGLE_CAMPUS_EDIT'

export function toggleCampusEdit (state) {
  return !state;
}

export default function reducer (state = false, action) {
  switch (action.type) {
    case TOGGLE_CAMPUS_EDIT:
      return toggleCampusEdit(state);
    default: return state;
  }
}
