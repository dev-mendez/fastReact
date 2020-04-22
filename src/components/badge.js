import React from "react";
import logoReact from "../images/logo192.png";
import logoAngular from "../images/angular.png";
import logoNode from "../images/nodeJs.png";
import usserLogo from "../images/self.png";
import "../styles/badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="container card_container ">
        <div className="card shadow">
          <div className="card-header">
            <div className="container usser_info">
              <div>
                <img id="usser_abatar" src={usserLogo} alt="img" />
              </div>
              <div id="name_container">
                <h1 id="name">
                  {this.props.firstName} <br /> {this.props.lastName}
                </h1>
              </div>
            </div>
          </div>
          <div id="jobT">
            <h2 id="jobTitle">{this.props.jobTitle}</h2>
          </div>

          <div id="logo_prof_container">
            <img className="tecno_img" src={logoAngular} alt="img" />
            <img className="tecno_img" src={logoReact} alt="img" />
            <img className="tecno_img" src={logoNode} alt="img" />
          </div>
          <div className="contact_container">
            <div>
              <div id="proficiency">
                <ul>
                  <li id="prof_title">Proficiency</li>
                  <ul id="prof">
                    <li>Front-End Specialist</li>
                    <li>Back-End Specialist </li>
                    <li>Data base expert    </li>
                    <li>Unstopable developer</li>
                  </ul>
                </ul>
              </div>
              <div className="justify-content-centered">
                <h4 id="e-mail" className="align-self-center">
                  <ins> {this.props.email}</ins>
                </h4>
              </div>
            </div>
            <div className="hashTag_container">
              <p id="hash">{this.props.hashTags}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
