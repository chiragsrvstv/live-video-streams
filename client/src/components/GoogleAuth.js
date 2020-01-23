import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }; // we don't know of the user is signed in or nut, that's why null
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      // return <div> I dont know if we are signed in </div>;
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          {" "}
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
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

export default GoogleAuth;
