import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCHoHbn4-6JZUpESn684Hs6EBZn8wmdyUs",
    authDomain: "reactsaladbar.firebaseapp.com",
    databaseURL: "https://reactsaladbar.firebaseio.com",
    projectId: "reactsaladbar",
    storageBucket: "reactsaladbar.appspot.com",
    messagingSenderId: "820580484290"
};
// var config = {
//     apiKey: "AIzaSyDN6lTZ24QCNGQHHIbYjcYNlZgltZUHYTI",
//     authDomain: "saladbar-5720a.firebaseapp.com",
//     databaseURL: "https://saladbar-5720a.firebaseio.com",
//     projectId: "saladbar-5720a",
//     storageBucket: "saladbar-5720a.appspot.com",
//     messagingSenderId: "494325674899"
//   };
const fire = firebase.initializeApp(config);
export default fire;
