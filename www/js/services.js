
const https = require("https");
const url =
"https://api.cloud4wi.com/v2/users/findById?id=0d5d0abcc57f77b7080ab41d86070b4c&api_version=v2.0&api_key=f708a3bb62b655ed4217a582bb01d0aa%20&api_secret=232c22e0229ac4b74605e00ff2f672d7";

https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      
      
      console.log(
        
        `username: ${body.data.lastName} `
        
      );
    });
  });

/**
 * A simple example service that returns some data.
 */
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

    
//   // Some fake testing data
//   var friends = [
//     { id: 0, name: 'Scruff McGruff' },
//     { id: 1, name: 'G.I. Joe' },
//     { id: 2, name: 'Miss Frizzle' },
//     { id: 3, name: 'Ash Ketchum' }
//   ];

//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   }
// });
