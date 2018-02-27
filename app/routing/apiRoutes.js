const friendsData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body);
        // const newFriendScores = JSON.parse(req.body.scores);
        friendsData.push(req.body);
        res.json(true);
    })
}