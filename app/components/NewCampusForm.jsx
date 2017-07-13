import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function NewCampusForm(props) {
  console.log(props);
    return (
      <div className="flex-grid">
        <div className="card grid-item">
            <div className="container">
              <font className="font1">New Campus</font><br />
              <font className="font3">Form Stuff</font>
              <br />
            </div>
        </div>

     </div>
    );
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
}

// function mapDispatchToProps (dispatch, ownProps){
//   return {
//     handleClick(event){
//       dispatch(changeCurrentCampus(event.target.value));
//     }
//   };
// }

export default connect(mapStateToProps)(NewCampusForm);
