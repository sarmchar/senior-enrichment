import React, { Component } from 'react';
import {Link, NavLink, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import EditStudentForm from './EditStudentForm';

function SingleStudent(props) {
    return (
      <Router>
      <div className="flex-grid">
        <div className="card grid-item large-card" >
            <img src="/impossible.jpg" />
            <div className="container">
              <font className="font1">Impossible</font>
              <br />
              <font className="font3">Pluto Campus</font>
              <br />
              <font className="font3">Email</font>
              <br />
              <font className="font3">Profile:</font>
              <br />
              <button className="wide-button"><NavLink to="/edit-student">
              Edit</NavLink></button>
            </div>
        </div>
      <Switch>
        <Route exact path = "/edit-student" component={EditStudentForm} />
      </Switch>
     </div>
     </Router>
    );
}

function mapStateToProps(state) {
  return {
    students: state.students
  };
}

export default connect(mapStateToProps)(SingleStudent);
