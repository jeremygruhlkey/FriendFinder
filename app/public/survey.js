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
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(),
            $("#q5").val().trim(), $("#q6").val().trim(), $("#q7").val().trim(), $("#q8").val().trim(), $("#q9").val().trim(), $("#q10").val().trim()]
        }
        
        
        const currentURL = window.location.origin;

        // $.ajax({
        //     method: 'POST',
        //     url: currentURL + "/api/friends",
        //     data: newFriendAdd,
        //     dataType: 'application/json'
        //   })

        $.post(currentURL + "/api/friends", newFriend, function(data){
            console.log(data);
            if (data){
                $("#match-name").html(data.name);
                $("#match-img").attr("src", data.photo);
                $("#results-modal").modal();
            }
        })

        $("#name").val("");
        $("#photo").val("");
    })

});