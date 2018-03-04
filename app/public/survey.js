$(document).ready( () => {

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

    $("#submit").on("click", () => {
        const newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(),
            $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        }
        
        const currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", newFriend, (data) => {
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