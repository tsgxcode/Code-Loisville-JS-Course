//Connection to Firebase
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

var infoRef = firebase.dataBase().ref();

//Event listener
document.getElementById('form').addEventListener('submit', form);

function submitForm(e){
    e.preventDefault();

    var Artist = getInputVal('Artist');
    var Album = getInputVal('Album');
    var Year = getInputVal('Year');

    //Save Artist info
    saveInfo(Artist, Album, Year);


}
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

//Save info to Firebase
function saveInfo(Artist, Album, Year){
  var newInforef = infoRef.push();
  newInfoRef.set({
      Artist:Artist,
      Album:Album,
      Year:Year
  })    
}

