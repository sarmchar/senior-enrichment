import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

function Student(props) {
  return (
    <div className="flex-grid">
    {props.students.map(student => {
      return (
        <div className="card grid-item" key={student.id}>
          <NavLink to={`/student/${student.id}`} >
          <img src={`${student.image}`} />
          </NavLink>
          <div className="container">
            <font className="font1">{student.name}</font><br />
            <font className="font3">{student.campusId === null ? 'No Campus Assigned' : props.campuses.filter(campus => campus.id === student.campusId)[0].name + ' Campus' }</font><br />
          </div>
        </div> );
    })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
}

export default connect(mapStateToProps)(Student);
