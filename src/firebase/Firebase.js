import * as firebase from 'firebase';

let database;
let config = {
    apiKey: "AIzaSyBXxABrwyFSfhsGSLER0riNqWiCZZ-kKV0",
    authDomain: "firemessenger-3614f.firebaseapp.com",
    databaseURL: "https://firemessenger-3614f.firebaseio.com",
    projectId: "firemessenger-3614f",
    storageBucket: "firemessenger-3614f.appspot.com",
    messagingSenderId: "958028141050"
}

export const Firebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    database = firebase.database();
}
