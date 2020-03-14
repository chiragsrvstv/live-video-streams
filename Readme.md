# Live Video Streams

This web application allows user to stream and watch video feeds. A third party
software like OBS is required to broadcast stream. It is made with React and Redux.

## Installation

1. Clone or download the repository.
2. Install Node. For help visit: https://nodejs.org/en/docs/
3. Install all the other dependencies from `package.json` using `npm`.
4. Install React and Redux using `npm`.
5. Run `npm start` individually from folders named `client`, `api` and `rtmpserver`.
6. Now go to `localhost:3000` to view the application.

### Additional Setup
1. Go to `/client/src` and create a file named `networkConfig.js`. Now paste the following code: <br>
   `export const networkToBroadcast = '***YOUR_NETWRORK_IP_ADDRESS_HERE(PORT 3001)***';` <br>
   `export const streamUrl = '***YOUR_NETWRORK_IP_ADDRESS_HERE(PORT 8000)***';`

2. This application uses Google OAuth, to get an OAuth key, visit: https://console.developers.google.com/ <br>
   Then inside the project folder go to `/client/src` and create a file named `networkConfig.js`. <br>
   Now paste the following code with your OAuth key: <br>
   `export const apiKey = {
   oauthKey:
    "***YOUR_OAUTH_KEY_HERE***"
   };`
