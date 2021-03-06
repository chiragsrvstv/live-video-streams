import React from "react";
import flv from "flv.js"
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import {streamUrl} from "../../networkConfig.js";

class StreamShow extends React.Component {
  constructor(props){
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const {id} = this.props.match.params
    console.log(this.videoRef);

    this.props.fetchStream(id);

    this.buildPlayer();
  }

  // we handled loading the video player when the component would render
  // initially, above. Here we want the player to be rendered any time the
  // StreamShow component gets re-rendered or gets updated
  componentDidUpdate() {
    this.buildPlayer();
  }

  // using this lifecycle method to stop the stream
  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if(this.player || !this.props.stream) {
      return;
    }
    // setting up player,
    const {id} = this.props.match.params
    this.player = flv.createPlayer({
      type: 'flv',
      url: `${streamUrl}/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load(); // not trying to automatically play the video, only user can.
  }

  render() {
    if (!this.props.stream) {
      return <div> Loading... </div>;
    }
    const { title, description } = this.props.stream;

    return (
      <div className="ui item">
        <video ref={this.videoRef} style={{width: '100%'}} controls={true} />
        <h1 className="header"> {title} </h1>
        <h5> {description} </h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
