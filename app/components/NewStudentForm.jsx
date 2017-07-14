import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {writeStudent, postStudent} from '../reducers';

function NewStudentForm(props) {
  const {handleName, handleEmail, handleImage, handleProfile, handleCampus, handleSubmit} = props;
    return (
      <div className="flex-grid">
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1">Add Student</font><br />
              <form onSubmit={handleSubmit}>
              <div className="form-group">

                Name: <input className="form-control" type="text" name="studentName"placeholder="Name"
                onChange={handleName} /> <br/>

                Email: <input className="form-control" type="text" name="studentEmail" placeholder="Email"onChange={handleEmail} /> <br/>

                Image: <input className="form-control" type="text" name="studentImage" placeholder="Image URL"onChange={handleImage} />

                <br/> <br/>

                 <textarea className="form-control" type="text" rows="10" cols="20" name="studentProfile" placeholder="Profile Info" onChange={handleProfile} ></textarea><br/>

                Campus:
                <select onChange={handleCampus} name="studentCampus">
                  {props.campuses.map(campus => {
                    return (<option key={campus.id} value={campus.id}>{campus.name}</option>);
                  })}
                </select>

              </div>
              <br/>
              <div className="form-group">
                <button type="submit" className="wide-button">Submit Student</button>
              </div>
            </form>
            </div>
        </div>

     </div>
    );
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students,
    newStudent: state.newStudent
  };
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleName(event) {
      dispatch(writeStudent({name: event.target.value}));
    },
    handleEmail(event) {
      dispatch(writeStudent({email: event.target.value}));
    },
    handleImage(event) {
      dispatch(writeStudent({image: event.target.value}));
    },
    handleProfile(event) {
      dispatch(writeStudent({profile: event.target.value}));
    },
    handleCampus(event) {
      dispatch(writeStudent({campusId: event.target.value}));
    },
    handleSubmit(event){
      event.preventDefault();
      const student = {
        name: event.target.studentName.value,
        email: event.target.studentEmail.value,
        image: event.target.studentImage.value,
        profile: event.target.studentProfile.value,
        campusId: event.target.studentCampus.value
      };
      if (student.image === '') student.image = '/ufo.jpg';
      dispatch(postStudent(student));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);


