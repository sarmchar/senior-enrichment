import React from 'react';
import { connect } from 'react-redux';
import {writeCampus, putCampus, writeStudent, putStudent, deleteCampus} from '../reducers';

var campusId;
// global variable so we can later access campusId passed down in props from SingleCampus in MapDispatchToProps. Had a hard time choosing currentCampus in redux store state, and couldn't think of a better way to do this

function EditCampusForm(props) {
  campusId = props.campusId;
  console.log('POST TO CAMPUS ID:', campusId);
  const students = props.students;
  const {handleName, handleImage, handleStudentAdd, handleSubmit, handleDelete} = props;
      return (
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1">Edit Campus</font><br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">

                Name:
                 <input className="form-control" type="text" name="campusName" placeholder="Name" onChange={handleName} /> <br />

                Image:
                 <input className="form-control" type="text" name="campusImage" placeholder="Image URL" onChange={handleImage} /> <br />

                Add Student:
                <select onChange={handleStudentAdd} name="studentToAdd">
                <option value=""></option>
                {students
                  .filter(student => campusId !== student.campusId)
                  .map(student => { return (<option key={student.id} value={student.id}>{student.name}</option>)})}
                </select>

              </div>
              <br />
              <button type="submit" className="wide-button rounded-button">
              Submit Changes
              </button>

            </form>

            <button className="wide-button red-button" onClick={handleDelete}>
            Delete Campus
            </button>

            </div>
        </div>
    );
}

function MapStateToProps(state){
  return {
    students: state.students,
    campuses: state.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleName (event) {
      dispatch(writeCampus({name: event.target.value}));
    },
    handleImage (event) {
      dispatch(writeCampus({image: event.target.value}));
    },
    handleStudentAdd (event){
       dispatch(writeStudent({campusId: campusId}));
      console.log('handle student add', event.target.value);
    },
    handleSubmit (event) {
      event.preventDefault();
      const studentId = event.target.studentToAdd.value;
      const campus = {};
      if (event.target.campusName.value !== '') campus.name = event.target.campusName.value;
      if (event.target.campusImage.value !== '') campus.image = event.target.campusImage.value;
      dispatch(putCampus(campusId, campus));
      if (studentId !== '') {
        dispatch(putStudent(studentId, {campusId: campusId})); }

    },
    handleDelete(){
      dispatch(deleteCampus(campusId));
    }
  };
}

export default connect(MapStateToProps, mapDispatchToProps)(EditCampusForm);
