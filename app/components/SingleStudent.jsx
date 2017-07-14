import React, { Component } from 'react';
import {Link, NavLink, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import EditStudentForm from './EditStudentForm';
import axios from 'axios';

class SingleStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {editToggle: false, student: {}};
    this.onEditToggle = this.onEditToggle.bind(this);
  }

  fetchStudentbyId (id) {
    axios.get(`/api/student/${id}`)
    .then(res => res.data)
    .then(student => this.setState({student}));
  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    this.fetchStudentbyId(studentId);
  }

  componentWillReceiveProps(newProps){
    const oldProps = this.props.match.params.studentId;
    if (oldProps !== newProps.match.params.studentId) {
      this.fetchStudentbyId(newProps.match.params.studentId);
    }
  }

  render() {
    const student = this.state.student;
    return (
      <div className="flex-grid">
        <div className="card grid-item large-card" >
            <img src={`${student.image}`} />
            <div className="container">
              <font className="font1">{student.name}</font>
              <br />
              <font className="font3">{student.campusId === null ? 'No Campus Assigned' : this.props.campuses.filter(campus => campus.id === student.campusId)[0] + ' Campus' }</font>
              <br />
              <font className="font3">Email: {student.email}</font>
              <br />
              <font className="font3">Profile: {student.profile}</font>
              <br />
              <button className="wide-button" onClick={this.onEditToggle}>Edit</button>
            </div>
        </div>
        {this.state.editToggle ? <EditStudentForm studentId={student.id} /> : null}
     </div>
    );
  }
  onEditToggle (){
    this.setState({editToggle: !this.state.editToggle});
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses
  };
}

export default connect(mapStateToProps)(SingleStudent);
