import React from "react";


class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyle">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <p> {badge.fullName}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
