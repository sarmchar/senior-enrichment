import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function EditStudentForm(props) {
  console.log(props);
    return (
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1">Edit Student</font><br />
              <form>
              <div className="form-group">
                Name: <input className="form-control" type="text" name="studentName"placeholder="Name"/> <br/>
                Email: <input className="form-control" type="text" name="studentEmail"placeholder="Email"/> <br/>
                Image: <input className="form-control" type="text" name="studentImage"placeholder="Image URL"/> <br/> <br/>
                 <textarea className="form-control" type="text" rows="10" cols="20" name="studentProfile" placeholder="Profile Info"></textarea><br/>
                Campus: <select>
                  <option> Pluto </option>
                  <option> Venus </option>
                </select>
              </div>
              <br/>
              <div className="form-group">
                <button type="submit" className="wide-button rounded-button">Submit Changes</button>
              </div>
            </form>
            <button className="wide-button red-button"> Delete Student </button>
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

// function mapDispatchToProps (dispatch, ownProps){
//   return {
//     handleClick(event){
//       dispatch(changeCurrentCampus(event.target.value));
//     }
//   };
// }

export default connect(mapStateToProps)(EditStudentForm);
