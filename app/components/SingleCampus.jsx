import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import EditCampusForm from './EditCampusForm';
import {toggleCampusEdit} from '../reducers';

function SingleCampus(props) {
  console.log('SINGLE CAMPUSE PROPS', props);
  const { toggleEdit } = props;
    return (
      <div className="flex-grid">
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1"></font><br />
              <font className="font3"></font>
              <br />
              <button className="wide-button first-button" >Students</button>
              <button className="wide-button last-button" onClick={toggleEdit}>Edit</button>
            </div>
        </div>
         <EditCampusForm />
     </div>
    );
}
function mapDispatchToProps (state, dispatch, ownProps) {
  return {
    toggleEdit (event) {
      console.log('!!!!', event.target.showCampusEdit.value);
        dispatch({type: TOGGLE_CAMPUS_EDIT});
    }
  };
}


function mapStateToProps(state) {
  return {
    students: state.students,
    showCampusEdit: state.showCampusEdit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);




