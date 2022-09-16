import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      card_number: "",
      month: "",
      year: "",
      cvv: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.setFormData(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submitForm}>
          <div className="form-item">
            <label className="form-label">
              CARDHOLDER NAME
              <br />
              <input
                type="text"
                name="name"
                placeholder="e.g. Souvik Mandal"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-item">
            <label className="form-label">
              CARD NUMBER
              <br />
              <input
                type="text"
                name="card_number"
                placeholder="e.g. 1234 5678 9101 1121"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-items">
            <div className="form-item">
              <label className="form-label">
                EXP. DATE {"("}MM/YY{")"}
                <br />
                <div className="exp-input">
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    required
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="YY"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>

            <div className="form-item">
              <label className="form-label">
                CVV
                <br />
                <input
                  type="text"
                  name="cvv"
                  placeholder="e.g. 123"
                  required
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>

          <button class="btn btn-submit">Confirm</button>
        </form>
      </div>
    );
  }
}

export default Form;
