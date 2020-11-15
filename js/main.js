//Conecting to Firebase Database

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
      Album,
      Year
  });
}

