//Initialize Firebase
 
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAIScnUOIlzSDt9mEdJY26NxG0s5tPjNzA",
    authDomain: "record-stash.firebaseapp.com",
    databaseURL: "https://record-stash.firebaseio.com",
    projectId: "record-stash",
    storageBucket: "record-stash.appspot.com",
    messagingSenderId: "1058500067181",
    appId: "1:1058500067181:web:fbb44d532a6b0c90bd2464",
    measurementId: "G-HKQVY3VXC1"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var messagesRef = firebase.database().ref('messages');

function writeData(){
  firebase.database().ref("form").set({
    Artist: document.getElementById("Artist").value,
    Album: document.getElementById("Album").value,
    Year: document.getElementById("Year").value

    
  })
}

//Confirm validation if/else statement 
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
  }


//Event listener
document.getElementById('form').addEventListener('submit', form);

// Submit form
function getElementById(id){
  return document.getElementById(id).value;
}

function saveInfo(Artist, Album, Year){
  var newInfoRef = infoRef.push();
  newInfoRef.set({
      Artist:Artist,
      Album:Album,
      Year:Year
  });
}