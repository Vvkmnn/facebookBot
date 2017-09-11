// Manages Firebase DB retrieval and return

// Export
var firebase = module.exports = {};

// Admin
// Necessary for the Firebase SDK, and gives everyone with this .json the read/write 
// TODO: Setup Firebase Bolt rules for read/write access

var firebaseAdmin = require("firebase-admin");
var serviceAccount = require("../config/firebase");

// Intialize 
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: ""
});

// Real-time Database
// Accessed through the Firebase Admin endpoint
firebase.db = firebaseAdmin.database();

// Database Sending Helpers
// Further documentation available at: https://firebase.google.com/docs/database/web/read-and-write
