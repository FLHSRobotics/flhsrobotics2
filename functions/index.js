const functions = require('firebase-functions');
const universal = require(`${process.cwd()}/dist/server`).app;
const ssr = functions.https.onRequest(universal);

module.exports = ssr;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
