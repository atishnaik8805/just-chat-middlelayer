/*Set up Admin API for Firebase*/
const admin = require('firebase-admin');
//Define path to secret key generated for service account
const serviceAccount = require('../../../just-chat-api-docs/serviceAccountKey.json');
let adminInstance;

const getDB = ()=> {
    return adminInstance.firestore();
}


const connect = ()=> {
//Initialize the app
console.log('Connected in here')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
adminInstance = admin
return getDB();
}


module.exports = {connect, getDB};
