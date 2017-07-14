import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import changeCurrentCampus from '../reducers';

function Campus(props) {
    return (
      <div className="flex-grid">
     {props.campuses.map(campus => {
      return (
        <div className="card grid-item" key={campus.id}>
       <NavLink to={`/campus/${campus.id}`}  >
            <img src={campus.image} />
        </NavLink>
            <div className="container">
              <font className="font1">{campus.name}</font><br />
              <font className="font3">{ props.students.filter(student => student.campusId === campus.id).length } students</font>
              <br />
            </div>
        </div>
      );
     })}
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
    handleClick(event){
      dispatch(changeCurrentCampus(event.target.value));
    }
  };
}

const StatefulCampuses = connect(mapStateToProps, mapDispatchToProps)(Campus);

export default StatefulCampuses;
