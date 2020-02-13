import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); // calling in the action creator and passing id of the stream as an argument
  }
  // coz streamEdit is rendered by Route hence props get added
  render() {
  if(!this.props.stream) {
    return <div> Loading... </div>
  }
  return <div>{this.props.stream.title}</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps); ownProps contains same data as props in the above elements
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream})(StreamEdit);
