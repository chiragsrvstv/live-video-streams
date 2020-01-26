import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return <input {...formProps.input} />;
     // above all the properties of formProps are being applied to input element
  }
  render() {
    // console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate" // whatever
})(StreamCreate);
