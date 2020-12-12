ReadMe

Record Stash! 

This  a catalog  for storing record collection data, for vinyl collectors, it asks for the artist's name, the album, the year it  was released. 
The program sends data to a Firebase database and saves it.The data can then be exported as a CSV or JSON file. The data is stored in Firebase(by Google). 
The user needs a Google Firebase account(only the free version is required) and the fields will be automatically created when he/she creates the app.

Dependencies:
The data is stored in Firebase(by Google). The user need a Google Firebase account(the free version is fine) 
and the fields will be automatically created when he/she creates the app.
You'll need this file in your Java Script:
Once your database is generated your info wil be where the XXs are.
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxx"
  };
  
  You'll need these at the bottom of your HTML body:
  (NOTE: Make sure the version numbers match the current version in your Script tags. e.g. 8.0.2 belowe )
           <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>
           <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-auth.js"></script>
           <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-database.js"></script>
           <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"></script>
 

Here is the basic start point for setting up a Firebase app.
https://firebase.google.com/docs/web/setup?authuser=0
 
NOTE:  You will need to signup for a free Google Firebase account  If you already  have a Google account / Email you should be able to sign into all of Google, including the Firebase site.

Features I'd like to add to this project include:
A field for the user to choose an email address to send a copy (text, JSON, CSV, etc)of the data stored to.

Thanks for trying this software,


Scott George

Updated: 11.18.2020 11:27 AM EST




