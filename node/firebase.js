var admin = require("firebase-admin");
var serviceAccount = require("./assessment-plaid-react-firebase-adminsdk-po02t-50b2c3fd02.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://assessment-plaid-react.firebaseio.com"
});


const db = admin.firestore();

module.exports = db;