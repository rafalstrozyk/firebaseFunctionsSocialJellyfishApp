const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = require('../../key/keyApp.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.REACT_APP_BASEURL,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET
});

const db = admin.firestore();

module.exports = { admin, db };
