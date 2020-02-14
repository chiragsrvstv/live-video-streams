import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); // calling in the action creator and passing id of the stream as an argument
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  // coz streamEdit is rendered by Route hence props get added
  render() {
    if (!this.props.stream) {
      return <div> Loading... </div>;
    }
    return (
      // using lodash below to only pick title and desc as initial values
      <div>
        <h3> Edit A Stream </h3>
        <StreamForm
          initialValues={ _.pick(this.props.stream, 'title', 'description') }
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps); ownProps contains same data as props in the above elements
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
