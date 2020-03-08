import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

// const StreamList = () => {
//   return <div>StreamList</div>;
// };

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  // this helper method compares current userID with that associated to stream to authenticate users
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="ui card">
          <div className="ui huge image">
            <Link to={`/streams/${stream.id}`}>
              <img
                src="spotlight.jpg"
                alt="cover-image"
                className="large middle aligned icon camera"
              />
            </Link>
          </div>
          <div className="content" key={stream.id}>
            {this.renderAdmin(stream)}
            <Link className="header" to={`/streams/${stream.id}`}>
              {stream.title}
            </Link>
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  }

  // helper method to create stream, only visible to logged in users
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: " " }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2> Streams </h2>
        <div className="ui cards"> {this.renderList()}</div>
        <div className="ui item">{this.renderCreate()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // we have streams in the form of objs, so, turning objs to array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
