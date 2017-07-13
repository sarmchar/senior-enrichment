import React, { Component } from 'react';
import { Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

function StudentList(props) {
  let students = props.students;
  let campus = props.campus;
    return (
      <div className="flex-grid">
        <div className="card grid-item" key={campus.id}>
            <div className="container">
              <ul>
              {students
                .filter(student => student.campusId === campus.id)
                .map(student => {return (<li>{student.name}</li>);})
              }
              </ul>
            </div>
        </div>

     </div>
    );
}

function mapStateToProps(state) {
  return {
    campus: state.currentCampus,
    students: state.students
  };
}

export default connect(mapStateToProps)(StudentList);

