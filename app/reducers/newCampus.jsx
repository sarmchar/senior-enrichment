const WRITE_CAMPUS = 'WRITE_CAMPUS';

export function writeCampus(content) {
  const action = { type: WRITE_CAMPUS, content };
  return action;
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.content;
    default: return state;
  }
}


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { writeChannelName, postChannel } from '../store';

// function NewChannelEntry (props) {

//   const { newChannelEntry, handleSubmit, handleChange } = props;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Create a Channel</label>
//         <input
//           value={newChannelEntry}
//           onChange={handleChange}
//           className="form-control"
//           type="text"
//           name="channelName"
//           placeholder="Enter channel name"
//         />
//       </div>
//       <div className="form-group">
//         <button type="submit" className="btn btn-default">Create Channel</button>
//       </div>
//     </form>
//   );
// }

// const mapStateToProps = function (state) {
//   return {
//     newChannelEntry: state.newChannelEntry
//   };
// };

// const mapDispatchToProps = function (dispatch, ownProps) {
//   return {
//     handleChange (evt) {
//       dispatch(writeChannelName(evt.target.value));
//     },
//     handleSubmit (evt) {
//       evt.preventDefault();
//       const name = evt.target.channelName.value;
//       dispatch(postChannel({ name }, ownProps.history));
//       dispatch(writeChannelName(''));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NewChannelEntry);
