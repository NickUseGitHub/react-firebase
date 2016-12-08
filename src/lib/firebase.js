import firebase from 'firebase/app'
import * as firebaseConf from '../config/firebase'

require('firebase/database')

firebase.initializeApp(firebaseConf.config)

export default firebase.default 