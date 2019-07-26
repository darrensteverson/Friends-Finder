$("#submit").on("click", function(event){
    event.preventDefault();
    var answers = {
        scores:
        [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val(),
        ]
    };

    $.post( "/api/friends", answers, function(data) {
        $("friend-name").text(data.name);
        $("friend-photo").attr("src", data.photo);
        $("#results").modal("toggle");
    });
});