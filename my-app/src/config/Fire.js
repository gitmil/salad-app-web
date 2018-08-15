import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCHoHbn4-6JZUpESn684Hs6EBZn8wmdyUs",
    authDomain: "reactsaladbar.firebaseapp.com",
    databaseURL: "https://reactsaladbar.firebaseio.com",
    projectId: "reactsaladbar",
    storageBucket: "reactsaladbar.appspot.com",
    messagingSenderId: "820580484290"
};
const fire = firebase.initializeApp(config);
export default fire;
