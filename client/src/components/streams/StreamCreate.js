import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <div className="field">
        <label for="name"> {formProps.label} </label>
        <input {...formProps.input} />
      </div>
    );

    // above all the properties of formProps are being applied to input element
  }
  render() {
    // console.log(this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate" // whatever
})(StreamCreate);
