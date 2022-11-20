
// Initialize Firebase(2)
const firebaseConfig = {
    apiKey: "AIzaSyCMTzMAabyR1cHN3xoNZ2dKlOJ0caAwUQw",
    authDomain: "adwinpa-business.firebaseapp.com",
    databaseURL: "https://adwinpa-business-default-rtdb.firebaseio.com",
    projectId: "adwinpa-business",
    storageBucket: "adwinpa-business.appspot.com",
    messagingSenderId: "383714926619",
    appId: "1:383714926619:web:d45feb819ca475117758be",
    measurementId: "G-16T5XPQ68K"
  };
  firebase.initializeApp(firebaseConfig);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document.getElementById('registrationform').addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#username').value;
    let email = document.querySelector('#emailAddress').value;

  
    //send message values
    sendMessage(name, email);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email
    });
  }

