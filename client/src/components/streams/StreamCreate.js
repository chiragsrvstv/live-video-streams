import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // the below method diplays form on screen with the help of Field component
  renderInput(formProps) {
    // console.log(formProps.meta);
    return (
      <div className="field">
        <label> {formProps.label} </label>
        <input {...formProps.input} />
        <div> {formProps.meta.error} </div>
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
        className="ui form"
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


  }
  const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
      errors.title = "You must enter a title";
    }
    if(!formValues.description) {
      errors.description = "You must enter a description";
    }

    return errors
};

export default reduxForm({
  form: "streamCreate", // whatever, it will be stored in redux by this name
  validate: validate
})(StreamCreate);
