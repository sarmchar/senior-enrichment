import React, { Component } from 'react';
import { Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class StudentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      campus: {}
    };
  }

  render() {
    const students = this.props.students;
    const campusId = this.props.campusId;
    return (
        <div className="card grid-item" key={campusId}>
            <div className="container">
              <font className="font1">Students</font><br />
              <ul>
              {students
                .filter(student => student.campusId === campusId)
                .map(student => {return (<li key={student.id}>{student.name}</li>);})
              }
              </ul>
            </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    students: state.students
  };
}

export default connect(mapStateToProps)(StudentList);

