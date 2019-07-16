import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      err: ""
    };

    this.handleBack = this.handleBack.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(res => {
        this.setState({
          students: res.data
        });
        console.log(
          `http://localhost:3005/students?class=${
            this.props.match.params.class
          }`
        );
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: "we got an error"
        });
      });
  }

  handleBack() {
    this.props.history.push("/");
  }

  render() {
    const mapStudents = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ));
    return (
      <div className="box">
        <button onClick={this.handleBack}> Back</button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mapStudents}
      </div>
    );
  }
}
