import React, { Component } from "react";
import axios from 'axios';
import {IoMdArrowBack} from 'react-icons/io';
// import BackButton from "../BackButton";
// import {withRouter} from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}

    };
    this.handleBack = this.handleBack.bind(this);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          studentInfo: res.data
        });
      });
      // console.log("hey!!", this.props.grade)
  }
handleBack(){
  this.props.history.goBack();
}
  render() {
    return (
    
      <div className="box">
        
        <button onClick={this.handleBack}><IoMdArrowBack>Back</IoMdArrowBack>Back</button>
        <h1>Student</h1>
        {
          <h1>
            {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
          </h1>
        }
        {<h1>Grade: {this.state.studentInfo.grade}</h1>}
        {<h1>Email: {this.state.studentInfo.email}</h1>}
      </div>
    );
  }
}
