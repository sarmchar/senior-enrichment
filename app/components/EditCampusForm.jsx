import React, { Component } from 'react';
import { connect } from 'react-redux';
import {writeCampus, postCampus} from '../reducers';

function EditCampusForm(props) {
  console.log(props);
  const campus = props.campus;
  const students = props.students;
      return (
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1">Edit Campus</font><br />
              <form>
              <div className="form-group">
                Name: <input className="form-control" type="text" name="campusName"placeholder="Name"/> <br/>
                Image: <input className="form-control" type="text" name="campusImage"placeholder="Image URL"/> <br/>
                Add Student: <select>
                {students.map(student => { return (<option key={student.id}>{student.name}</option>)})}
                </select>
              </div>
              <br/>
              <div className="form-group">
                <button type="submit" className="wide-button rounded-button">Submit Changes</button>
              </div>
            </form>
            <button className="wide-button red-button"> Delete Campus </button>
            </div>
        </div>
    );
}

function MapStateToProps(state){
  return {
    newCampus: state.newCampus,
    students: state.students
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleNameChange (event) {
      dispatch(writeCampus({name: event.target.value}));
    },
    handleImageChange (event) {
      dispatch(writeCampus({image: event.target.value}));
    },
    handleSubmit (event) {
      event.preventDefault();
    }
  };
}

export default connect(MapStateToProps, mapDispatchToProps)(EditCampusForm)
