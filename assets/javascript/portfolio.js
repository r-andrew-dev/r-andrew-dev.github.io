

$(".One").on("click", function() {
    $("#contact-button").css("display","block");;
    $(".One").text("About");
    $("#work-button").removeClass("One");
    $("#work-button").addClass("Two");


    $("#bio, #picture").fadeOut("slow", function() {
        $(".hidden1").fadeIn("slow");
    });

});

$("#button-holder").on("click", ".Two", function(){
        $(".hidden1").fadeOut("slow", function() {
            $("#bio, #picture").fadeIn("slow");
        })
     

})

    $(".work").on("click", function() {
        $(this).css({"width": "600px", "margin": "10% auto", "opacity": "1", "display": "block"});
        $(this).parent().removeClass("six");
        $(this).parent().addClass("twelve current");
        $(this).addClass("current-img")
        $(this).attr("src", $(this).attr("data-attr"));
        $(this).removeClass("work");
        $(this).css("opacity", "1");
        $(".work").hide();
        $(".One").addClass("Three");
        $(".Three").removeClass("One")
        $(".Three").text("Back to Work");
        $(".Site").css("display", "inline");
        $(".Site").attr("href", $(this).data("site"));
    });

    $("#button-holder").on("click", "#contact-button", function() {
        $(".container").css("display", "none");
        $("#contact").css("display", "block");
    })

    $("#button-holder").on("click", ".Three", function() {
        console.log("clicked");
        $(".work").show();
        $(".current-img").attr("src", $(".current-img").data("main"));
        $(".current-img").css({"width": "300px", "margin": "3%", "opacity":"0.6", "display":"inline"});
        $(".current-img").addClass("work");
        $(".current-img").parent().removeClass("twelve current");
        $(".current-img").parent().addClass("six");
        $(".u-max-full-width").removeClass("current-img");
        $("#odd-row").children().attr("class", "twelve columns")
        $(".Two").text("Reach Out");
        
    });