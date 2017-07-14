import React from 'react';
import { connect } from 'react-redux';
import {writeCampus, postCampus} from '../reducers';

function NewCampusForm(props) {
  const {handleNameChange, handleImageChange, handleSubmit} = props;
    return (
      <div className="flex-grid">
          <div className="card large-card grid-item">

            <div className="container">

              <font className="font1">Add Campus</font>
              <br />

              <form onSubmit={handleSubmit}>

                Name: <input className="form-control" type="text" name="campusName" placeholder="Name"onChange={handleNameChange} /> <br/>

                Image: <input className="form-control" type="text" name="campusImage" placeholder="Image URL" onChange={handleImageChange} />

              <br/>

                <button type="submit" className="wide-button">Submit Changes</button>

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
    newCampus: state.newCampus
  };
}

function mapDispatchToProps (dispatch){
  return {
    handleNameChange(event){
      dispatch(writeCampus({name: event.target.value}));
    },
    handleImageChange(event){
      dispatch(writeCampus({image: event.target.value}));
    },
    handleSubmit(event){
      event.preventDefault();
      const campus = {
        name: event.target.campusName.value,
        image: event.target.campusImage.value
      };
      if (campus.image === '') campus.image = '/planet.png';
      dispatch(postCampus(campus));
      dispatch(writeCampus({name: '', image: ''}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm);
