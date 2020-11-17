function submitForm(e) {
  e.preventDefault();

  var Artist = getInputVal('Artist');
  var Album = getInputVal('Album');
  var Year = getInputVal('Year');

  //Save Artist info
  save(Artist, Album, Year);
}
