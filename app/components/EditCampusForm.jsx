import React, { Component } from 'react';

export default function EditCampusForm() {
      return (
        <div className="card large-card grid-item">
            <div className="container">
              <font className="font1">Edit Campus</font><br />
              <form>
              <div className="form-group">
                Name: <input className="form-control" type="text" name="studentName"placeholder="Name"/> <br/>
                Email: <input className="form-control" type="text" name="studentEmail"placeholder="Email"/> <br/>
                Image: <input className="form-control" type="text" name="studentImage"placeholder="Image URL"/> <br/>
                Add Student: <select>
                  <option> Impossible </option>
                  <option> Tweeter </option>
                  <option> Gus </option>
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
