import React from "react";
import "../styles/app.css";
import Navbar from "./navbar";
import Badge from "./badge";
import Myform from "./form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                jobTitle="Full-Stack Engineer"
                firstName="Armando"
                lastName="Mendez"
                email="an2m001@gmail.com"
              />
            </div>
            <div className="col-lg-4">
              <Myform />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
