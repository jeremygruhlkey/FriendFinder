const friendsData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res){
        newScores = req.body.scores.map(score => Number(score));
        let currentScore;
        let closestMatch = "";
        function getAnswerDifference(baseline, answers) {
            return baseline
              .map((baselineValue, index) => Math.abs(baselineValue - answers[index]))
              .reduce((previous, next) => previous + next, 0);
          }
          
          const differences = friendsData
            .map(friend => ({
              name: friend.name,
              photo:friend.photo,
              differenceScore: getAnswerDifference(newScores, friend.scores),
            }))
            .sort((previous, next) => previous.differenceScore - next.differenceScore);
          
          closestMatch = differences[0];
          
          console.log(differences);
          console.log(closestMatch);
        friendsData.push(req.body);
        res.json(closestMatch);
    })
}