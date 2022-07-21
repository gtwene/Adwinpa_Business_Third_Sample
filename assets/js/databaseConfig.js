import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMTzMAabyR1cHN3xoNZ2dKlOJ0caAwUQw",
  authDomain: "adwinpa-business.firebaseapp.com",
  databaseURL: "https://adwinpa-business-default-rtdb.firebaseio.com",
  projectId: "adwinpa-business",
  storageBucket: "adwinpa-business.appspot.com",
  messagingSenderId: "383714926619",
  appId: "1:383714926619:web:d45feb819ca475117758be",
  measurementId: "G-16T5XPQ68K",
};

//   For Initailizing firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//   Reference for database
// const PickupFormDB = firebase.database().ref("Pickup");
const PickupFormDB = app.database().ref("Pickup");

// Get the form from html
document.getElementById("register-form").addEventListener("submit", submitForm);

function submitForm() {
  e.preventDefault();

  var name = getElementVal("name");
  var contactno = getElementVal("contactno");
  var address = getElementVal("address");
  var coloredBlackWhite = getElementVal("coloredBlackWhite");
  var color = getElementVal("color");
  var blacknwhite = getElementVal("blacknwhite");
  var file = getElementVal("file");
  var copies = getElementVal("copies");
  var pickup = getElementVal("pickup");
  var deliver = getElementVal("deliver");
  var lamination = getElementVal("lamination");
  var envelope = getElementVal("envelope");
  var binding = getElementVal("binding");
  var above = getElementVal("above");
  var payment = getElementVal("payment");
  var tot_cost = getElementVal("tot_cost");

  console.log(name, contactno, address, coloredBlackWhite, color, blacknwhite);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
