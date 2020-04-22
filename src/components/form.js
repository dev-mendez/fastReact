import React from "react";

class MyForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  hendleClick = (e) => {
    console.log("Button was clicked");
  };
  hendleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submited");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form action="" onSubmit={this.hendleSubmit} className="form-group">
          <label>Firs Name</label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="firstName"
          ></input>
          <button
            type="submit"
            onClick={this.hendleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
