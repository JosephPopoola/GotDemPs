import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDB4YsTNvlxca27VdIaeKzPQOlfq7c-jG0',
    authDomain: 'mansps-bf91c.firebaseio.com',
    databaseURL: 'https://mansps-bf91c.firebaseio.com/'
}

firebase.initializeApp(config);

const database = firebase.database();

export default database;