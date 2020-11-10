//Variables
const artist = document.getElementById('Artist');
const year = document.getElementById('Year');
const form = document.querySelector('form'); 

//Fetch
fetch('https://www.discogs.com/search/?q=Vinyl&type=all')
    .then(response => console.log(response))
