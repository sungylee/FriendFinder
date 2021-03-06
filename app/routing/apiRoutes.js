// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    //variable to hold myMatch
    var myMatch = {
      name: "",
      photo: "",
      difference: 1000
    };

    //console.log(req.body); //Results of submit form

    var userData = req.body;
    var userScore = userData.scores;
    var totalDifference = 0;
    
    //console.log(userScore);

    //loop thru list of friends
    for (i = 0; i < friends.length; i++) {
              
      var totalDifference = 0;

      //for reach friend, calculate totalDifference
      for (j = 0; j < userScore.length; j++) {
        //calculate absolute difference between what's in friends array from data submitted form
        totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));
        
        //if there is best match then friend array match gets put into myMatch array
        if (totalDifference <= myMatch.difference) {
          myMatch.name = friends[i].name;
          myMatch.photo = friends[i].photo;
          myMatch.difference = totalDifference;
        }
      }
    }
    friends.push(userData); //Add to friends array
    res.json(myMatch);  //Output to htmp by calling modal
  });

};