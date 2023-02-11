import app from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        let settings;
        if(!app.apps.length) {
            
            app.initializeApp(firebaseConfig);
            app.firestore().settings({ experimentalForceLongPolling: true });
        }
        // const fire = app.firestore();       
        // this.db = app.firestore();
        this.db = app.firestore();
        // let settings = this.db.firestore().settings({ experimentalForceLongPolling: true });
        // var db = firebase.firestore();

        // if (location.hostname === "localhost") {
        //     this.db.useEmulator("localhost", 8080);
        // }
    }
}

const firebase = new Firebase();
// firebase.firestore().settings({ experimentalForceLongPolling: true });
export default firebase;