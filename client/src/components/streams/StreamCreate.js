import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  //to show errors we are creating a helper method renderError
  renderError(passed) {
    if (passed.touched && passed.error) {
      return (
        <div className="ui error message">
          <div className="header">{passed.error}</div>
        </div>
      );
    }
  }

  // the below method diplays form on screen with the help of Field component
  renderInput = (formProps) => {
    // console.log(formProps.meta);
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label> {formProps.label} </label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
    // above, all the properties of formProps are being applied to input element
  }

  // method for form handling
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary button"> Submit </button>
      </form>
    );
  }

  // a validate function for form validation
}
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate", // whatever, it will be stored in redux by this name
  validate: validate
})(StreamCreate);
