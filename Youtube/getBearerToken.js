require("dotenv").config({ path: __dirname + "/.env" });

const express = require('express');
const { google } = require('googleapis');
const open = require('opn');
const app = express();
PORT = 3000;
const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET,
  'http://localhost:3000/oauth2callback'
);

const scopes = ['https://www.googleapis.com/auth/youtube.force-ssl'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

// Set up a route to handle the OAuth callback
app.get('/oauth2callback', (req, res) => {
  const authorizationCode = req.query.code;

  // Exchange the authorization code for an access token
  oauth2Client.getToken(authorizationCode, (err, token) => {
    if (err) {
      console.error('Error retrieving access token:', err);
      return;
    }

    const accessToken = token.access_token;
    res.send(`Your access token is <br>${accessToken}`);
    process.exit();
  });
});

// Redirect the user to the authentication URL
app.get('/login', (req, res) => {
  res.redirect(authUrl);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/login`);
  open(`http://localhost:${PORT}/login`);
});
