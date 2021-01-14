import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import config from "../../config";
import "./GetStarted.css";
export default class GetStarted extends Component {
  state = { templateData: [] };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/templates/templateData`).then((res) => {
      res.json().then((content) => {
        this.setState({ templateData: content.templateData });
      });
    });
  }
  rendertemplates() {
    var rows = [];
    this.state.templateData.forEach((element, i) => {
      rows.push(
        <Link to={`/templates/${i + 1}`} key={i} className="item text-center">
          <h2>Template {i + 1}</h2>
          <br />
          <h3> {element}</h3>
        </Link>
      );
    });
    return rows;
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className="text-center title_x">Welcome</h1>
        <h4 className="text-center sub_x">
          Build a beautiful portfolio in minutes by choosing templates.
        </h4>
        <section className="container_x">{this.rendertemplates()}</section>
      </div>
    );
  }
}