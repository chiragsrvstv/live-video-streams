import React from "react";
import Modal from "../Modal";
import {Link} from 'react-router-dom'
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  // assigning two things(buttons here) from a single actions variable isn't a
  // valid JS, so we decided to wrap them with a div but that div
  // didn't worked along with semanticUi, So, using React fragment
  // which will maintain our styling.
  // React fragment is a jsx looking element that doesn't produce any
  // HTML, almost invisible

   //inside below onClick function, not making the button a Link component
   // coz we don't want the user to navigate, we want to redirect.
  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative"> Delete </button>
        <Link to='/' className="ui button"> Cancel </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDissmiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
