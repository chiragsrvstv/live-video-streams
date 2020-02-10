import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

// const StreamList = () => {
//   return <div>StreamList</div>;
// };

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  // this helper method compares current userID with that associated to stream to authenticate users
  renderAdmin(stream) {
    if ((stream.userId === this.props.currentUserId)) {
      return (
        <div className="right floated content">
          <button className="ui button primary"> Edit </button>
            <button className="ui button negative"> Delete </button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera " />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2> Streams </h2>
        <div className="ui celled list"> {this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // we have streams in the form of objs, so, turning objs to array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
