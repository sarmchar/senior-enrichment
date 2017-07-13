import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Student(props) {
  var campus = 1;
    return (
  <div> <center><h1>Students </h1> </center>
  <div className="flex-grid">

      <div className="card">
      <img src="impossible.jpg" />
      <div className="container">
        <font className="font1">Impossible</font><br />
        <font className="font2">{campus === null ? 'No Campus Assigned' : 'Uranus Campus' }</font><br />
        <button>Edit</button> <button>View</button>
      </div>
    </div>

);

}



function Campus(props) {
  console.log('PROPS!!!!!', props);
    return (
    <div>
      <center><h2> Campuses </h2></center>
      <div className="flex-grid">
     {props.campuses.map(campus => {
      return (
        <div className="card" key={campus.id}>
      {/*   <NavLink to={`/campus/${campus.id}`} activeClassName="active"> */}
            <img src={campus.image} />
            <div className="container">
              <font className="font1">{campus.name}</font><br />
              <font className="font2">{ props.students.filter(student => student.campusId === campus.id).length } students</font>
              <br />
            </div>
           { /*</NavLink> */}
        </div>
      );
     })}
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
