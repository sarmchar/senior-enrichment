
const WRITE_CAMPUS = 'WRITE_CAMPUS';


export function writeChannel(content) {
  const action = { type: WRITE_CAMPUS, content };
  return action;
}

export default function newChannelReducer(state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.content;
    default: return state;
  }
}
