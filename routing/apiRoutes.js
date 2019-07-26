var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

       var matchmaker = {
           name: "",
           photo: "",
           matchScore: 0,
       };
       var userInput = req.body;
       var userScore = userInput.scores;
       var difference

       for (var i = 0; i <friends.length; i++) {
           var friendFinder = friends[i];
            difference = 0;
    
            for (var f = 0; f < friendFinder.scores.length; f++ ){
                var friendFinderScore = friendFinder.scores[d];
                var userSum = userScore[d];

                difference += Math.abs(parseInt(userSum) - parseInt(friendFinderScore));
            };

            if (difference <= matchmaker.matchScore){
                matchmaker.name = friendFinder.name;
                matchmaker.photo = friendFinder.photo;
                matchmaker.matchScore = difference;
            };
       }
       friends.push(userInput);
       res.json(matchmaker);
    });
};