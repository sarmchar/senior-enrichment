import React from 'react';
import { connect } from 'react-redux';
import EditCampusForm from './EditCampusForm';
import StudentList from './StudentList';
import axios from 'axios';

class SingleCampus extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editToggle: false,
      studentToggle: false,
      campus: {}
    };
    this.onEditToggle = this.onEditToggle.bind(this);
    this.onStudentToggle = this.onStudentToggle.bind(this);
  }

  fetchCampusbyId (id) {
    axios.get(`/api/campus/${id}`)
    .then(res => res.data)
    .then(campus => this.setState({campus}));
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    this.fetchCampusbyId(campusId);
  }

  componentWillReceiveProps(newProps){
    const oldProps = this.props.match.params.campusId;
    if (oldProps !== newProps.match.params.campusId) {
      this.fetchCampusbyId(newProps.match.params.campusId);
    }
  }

  render() {
    const campus = this.state.campus;
   return (
      <div className="flex-grid">
        <div className="card large-card">

          <img src={`${campus.image}`} />

            <div className="container">

            <font className="font1">{campus.name}</font><br />

            <font className="font3">{ this.props.students.filter(student => student.campusId === campus.id).length } students</font>
            <br />

            <button className="wide-button first-button" onClick={this.onStudentToggle} >Students
            </button>
            <button className="wide-button last-button" onClick={this.onEditToggle}>
              Edit
            </button>
            </div>
        </div>

        { this.state.editToggle ? <EditCampusForm campusId= {campus.id} /> :  null}

        { this.state.studentToggle ? <StudentList campusId={campus.id} /> :  null}

     </div>
    );
  }

  onEditToggle (){
    this.setState({editToggle: !this.state.editToggle});
  }
  onStudentToggle () {
    this.setState({studentToggle: !this.state.studentToggle});
  }
}


function mapStateToProps(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}

export default connect(mapStateToProps)(SingleCampus);
