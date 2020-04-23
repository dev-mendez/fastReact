import React from "react";

class MyForm extends React.Component {
  //   state = {
  //     fullName: "Armando",
  //   };

  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form action="" onSubmit={this.hendleSubmit} className="form-group">
          <label>Full Name</label>
          <input
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="fullName"
            value={this.props.formValues.fullName}
          ></input>
          <label>Abatar-URL</label>
          <input
            onChange={this.props.onChange}
            className="form-control"
            type="url"
            name="url"
            value={this.props.formValues.url}
          ></input>
          <label>Profession</label>
          <input
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="profession"
            value={this.props.formValues.profession}
          ></input>
          <label>Email</label>
          <input
            onChange={this.props.onChange}
            className="form-control"
            name="email"
            type="email"
            value={this.props.formValues.email}
          ></input>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary btn-fluid"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
