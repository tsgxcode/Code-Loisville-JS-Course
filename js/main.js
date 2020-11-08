/*Variables
const seclect = document.getElementById('Artist');
const seclect = document.getElementById('Year'); */

//Fetch
fetch( GET, 'https://api.discogs.com/artists/1?callback=callbackname')
  .then((artist) => {
          callbackname({
              "meta": {
                  "status": 200,
              },
              "data": {
                  "id": artist,
                  "name": ""
              }
          })
      })
