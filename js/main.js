//Variables
const artist = document.getElementById('Artist');
const album = document.getElementById('Album');
const year = document.getElementById('Year'); 
const errorElement = document.getElementById('error');

//Adding to collection
const database = new DataStore({filename: 'anything.db', autoload: true});