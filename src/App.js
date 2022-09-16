import { Component } from "react";

import Form from "./components/form/form.component";
import gradient from "./images/bg-main-desktop.png";

import "./App.css";
import Thankyou from "./components/thankyou.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      hasSubmitted: false,
    };
    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(formData) {
    this.setState({ data: formData, hasSubmitted: true });
  }

  render() {
    return (
      <div className="App">
        <div className="bg">
          <img src={gradient} alt="gradient" />
        </div>
        {this.state.hasSubmitted ? (
          <Thankyou />
        ) : (
          <Form setFormData={this.getFormData} />
        )}
      </div>
    );
  }
}

export default App;
