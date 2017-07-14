import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {putStudent} from '../reducers';


class StudentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      campus: {}
    };
  }

  render() {

    const students = this.props.students;
    const campusId = this.props.campusId;
    const {removeStudent} = this.props;

    return (
        <div className="card grid-item" key={campusId}>
            <div className="container">
              <font className="font2">Students</font><br />
              <ul>
              {students
                .filter(student => student.campusId === campusId)
                .map(student => {return (
                  <div key = {student.id}>
                    <li>

                    <NavLink to={`/student/${student.id}`}>
                    <font className="font3">{student.name}</font>
                    </NavLink>
                    &nbsp;&nbsp;
                    <button
                      onClick={removeStudent}
                      className="wide-button rounded-button"
                      value={student.id}>
                      Remove
                    </button>

                    </li>
                  </div>);
              })
              }
              </ul>
            </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeStudent(event) {
      console.log('remove student', event.target.value);
      dispatch(putStudent(event.target.value, {campusId: null}));

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

