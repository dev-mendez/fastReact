import React from "react";
import Navbar from "../components/navbar";
import Badge from "../components/badge";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badge__container"></div>
        <div className="Badge__button">
          <a href="/app.js" className="btn btn-success">
            New Badge
          </a>
        </div>
        <div className="Badge__list">
          <div className="Badges__container">
            <BadgesList Badges={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
export default Badges;
