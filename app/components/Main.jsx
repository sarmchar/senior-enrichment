import React, {Component} from 'react';
import Header from './Header';
import Students from './Students';
import Campus from './Campus';
import store, { fetchCampuses, fetchStudents } from '../reducers';



export default class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }
  render () {
    return (
    <div id="container">
      <Header />
      <Campus />
    </div>
    );
  }

}
