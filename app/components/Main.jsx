import React, {Component} from 'react';
// import Header from './Header';
import Home from './Home';
import Campus from './Campus';
import Student from './Students';
import NewCampusForm from './NewCampusForm';
import NewStudentForm from './NewStudentForm';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store, { fetchCampuses, fetchStudents } from '../reducers';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }
  render () {
    return (
    <Router>
    <div id="container">

      <div id="header1"><div id="header">
        <font className="font2">
         Margaret Hamilton Interplanetary Academy of Javascript
        </font>
        <div id="mainflex">
          <button className="first-button"><Link to="/">Home</Link></button>
          <button><Link to="/campus">Campuses</Link></button>
          <button><Link to="/student">Students</Link></button>
          <button><Link to="/add-campus">Add Campus</Link></button>
          <button className="last-button"><Link to="/add-student">Add Student</Link></button>
        </div>
       </div></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/campus" component={Campus} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/add-campus" component={NewCampusForm} />
        <Route exact path="/add-student" component={NewStudentForm} />
        <Route path="/campus/:campusId"component={SingleCampus} />
        <Route path="/student/:studentId" component={SingleStudent} />

      </Switch>

    </div>
    </Router>
    );
  }
}
