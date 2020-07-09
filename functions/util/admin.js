const admin = require('firebase-admin');

const serviceAccount = require('../../key/keyApp.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.REACT_APP_BASEURL
});

const db = admin.firestore();

module.exports = { admin, db };
