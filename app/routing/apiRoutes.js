const friendsData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res){
        // console.log(req.body.scores);
        newScores = req.body.scores.map(score => Number(score));
        // console.log(newScores);
        let currentScore;
        let closestMatch = ""
        for (i = 0; i < friendsData.length; i++){
            let friendScores = friendsData[i].scores;
            let totalDifference = 0;
            for (j = 0; j < friendScores.length; j++){
                totalDifference = totalDifference + Math.abs(friendScores[j] - newScores[j]);
                console.log(totalDifference)
            }
            if (!currentScore){
                currentScore = totalDifference;
                closestMatch = friendsData[i];
            }
            else if(totalDifference < currentScore){
                currentScore = totalDifference;
                closestMatch = friendsData[i];
            }
            console.log(currentScore);
            console.log(closestMatch);
        }
        friendsData.push(req.body);
        res.json(closestMatch);
    })
}