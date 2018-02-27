$(document).ready(function(){

console.log("in link file");
    function getFriendsData() {
        const currentURL = window.location.origin;

        $.ajax({url: currentURL + "/api/friends", method: "GET"})
            .done(function(friends){
                console.log(currentURL);
                console.log("-------------------")
                console.log(friends)
            })
    }

    getFriendsData();

    $("#submit").on("click", function(){
        const newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#q1").val().trim(), $("#q2").val().trim(), $("#q3").val().trim(), $("#q4").val().trim(),
            $("#q5").val().trim(), $("#q6").val().trim(), $("#q7").val().trim(), $("#q8").val().trim(), $("#q9").val().trim(), $("#q10").val().trim()]
        }
        
        const currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", newFriend, function(data){
            if (data == true){
                alert("yay, friend added");
            }else{ alert("didn't work");}
        })

        $("#name").val("");
        $("#photo").val("");
    })

});