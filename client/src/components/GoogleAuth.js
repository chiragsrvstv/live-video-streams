import React from "react";
import {signIn, signOut} from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "628635127890-jnooauh03n2uvqonmq6ed9ocfinum58d.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // Listen for changes in the current user's sign-in state. Arguments -> listener
          // A function that takes a boolean value. listen() passes true to this
          // function when the user signs in, and false when the user signs out.

          // using redux now rather than state:
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  // };

  // this callback gets called with a boolean to know whether a user is signed in or not
  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      // return <div> I dont know if we are signed in </div>;
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          {" "}
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div> {this.renderAuthButton()} </div>;
  }
}

//
const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth);
