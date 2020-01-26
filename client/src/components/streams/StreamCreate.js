import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // the below method diplays form on screen with the help of Field component
  renderInput(formProps) {
    // console.log(formProps);
    return (
      <div className="field">
        <label> {formProps.label} </label>
        <input required {...formProps.input} />
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

export default reduxForm({
  form: "streamCreate" // whatever
})(StreamCreate);
