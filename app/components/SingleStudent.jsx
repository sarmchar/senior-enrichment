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
    let campus = {};
    if (student.campusId !== null && student.campusId){
      campus = this.props.campuses.filter(camp => camp.id === student.campusId)[0];}
    return (
      <div className="flex-grid">
        <div className="card grid-item large-card" >
            <img src={`${student.image}`} />
            <div className="container">
              <font className="font1">{student.name}</font> <br />

              <NavLink to={`/campus/${campus.id}`}>
              <font className="font3">{student.campusId === null ? 'No Campus Assigned' : campus.name + ' Campus'}
              </font> </NavLink>

              <br />
              <font className="font3">{student.email}</font>
              <br />
              <font className="font3">{student.profile}</font>
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
