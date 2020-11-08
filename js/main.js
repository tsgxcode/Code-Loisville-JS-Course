//Variables
const seclect = document.getElementById('Artist');
const seclect = document.getElementById('Year'); 
//Fetch
fetch( GET, 'https://api.discogs.com/artists/1?callback=callbackname')
  .then((Artist) => {
          callbackname({
              "meta": {
                  "status": 200,
              },
              "data": {
                  "id": Artist,
                  "name": ""
              }
          })
      })    
      .then((Year) => {
        callbackname({
            "meta": {
                "status": 200,
            },
            "data": {
                "id": Year,
                "year": ""
            }
        })
    })    
