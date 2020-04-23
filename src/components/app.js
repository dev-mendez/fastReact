import React from "react";
import "../styles/app.css";
import Navbar from "./navbar";
import Badge from "./badge";
import Myform from "./form";

class App extends React.Component {
  state = {
    form: {
      fullName: "",
      url: "",
      profession: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.fullName}
                jobTitle={this.state.form.profession}
                lastName={""}
                email={this.state.form.email}
              />
            </div>
            <div className="col-lg-4">
              <Myform
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
