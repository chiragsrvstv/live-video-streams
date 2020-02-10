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
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  }

  // helper method to create stream, only visible to logged in users
  renderCreate() {
    if (this.props.isSignedIn) {
      return(
        <div style={{textAlign: 'right'}}>
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
        <div className="ui celled list"> {this.renderList()}</div>
        {this.renderCreate()}
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
