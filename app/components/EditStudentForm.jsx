import React from 'react';
import { connect } from 'react-redux';
import {writeStudent, putStudent, deleteStudent} from '../reducers';

var studentId;

function EditStudentForm(props) {
  studentId = props.studentId;

  const {handleName, handleEmail, handleImage, handleProfile, handleCampus, handleSubmit, handleDelete} = props;

    return (
      <div className="card large-card grid-item">
        <div className="container">
          <font className="font1">Edit Student</font><br />
          <form onSubmit={handleSubmit}>
              <div className="form-group">

                Name: <input
                className="form-control"
                type="text"
                name="studentName"
                placeholder="Name"
                onChange={handleName} />
                <br/>

                Email: <input
                className="form-control"
                type="text"
                name="studentEmail"
                placeholder="Email"
                onChange={handleEmail} />
                <br/>

                Image: <input
                className="form-control"
                type="text"
                name="studentImage"
                placeholder="Image URL"
                onChange={handleImage} />

                <br /> <br />

                 <textarea
                 className="form-control"
                 type="text"
                 rows="10"
                 cols="20"
                 name="studentProfile"
                 placeholder="Profile Info"
                 onChange={handleProfile} />
                 <br />

                Campus:
                <select onChange={handleCampus} name="studentCampus">
                <option value=""></option>
                  {props.campuses.map(campus => {
                    return (<option key={campus.id} value={campus.id}>{campus.name}</option>);
                  })}
                </select>

              </div>
              <br/>
              <button type="submit" className="wide-button rounded-button">Submit Changes
              </button>

        </form>

        <button className="wide-button red-button" onClick={handleDelete}>  Delete Student
         </button>

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

function mapDispatchToProps (dispatch){
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
      const student = {};
      if (event.target.studentName.value !== '') student.name = event.target.studentName.value;
      if (event.target.studentEmail.value !== '') student.email = event.target.studentEmail.value;
      if (event.target.studentImage.value !== '') student.image = event.target.studentImage.value;
      if (event.target.studentProfile.value !== '') student.profile = event.target.studentProfile.value;
      if (event.target.studentCampus.value !== '') student.campusId = event.target.studentCampus.value;
      dispatch(putStudent(studentId, student));
    },
    handleDelete(){
      dispatch(deleteStudent(studentId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentForm);
