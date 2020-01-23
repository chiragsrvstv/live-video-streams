import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId: '628635127890-jnooauh03n2uvqonmq6ed9ocfinum58d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
      })
    });
  }

  render() {
    return <div> Google Auth </div>;
  }
}

export default GoogleAuth;
