
// $("#button-holder").on("click", ".One", function() {
//     $("#contact-button").css("display","block");;
//     $(".One").text("About");
//     $(".current-img").attr("src", $(".current-img").data("main"));
//     $(".current-img").css({"width": "300px", "margin": "3%", "opacity":"0.6", "display":"inline"});
//     $(".current-img").addClass("work");
//     $(".current-img").parent().removeClass("twelve current");
//     $(".current-img").parent().addClass("six");
//     $(".u-max-full-width").removeClass("current-img");
//     $("#odd-row").children().attr("class", "twelve columns")
//     $("#work-button").removeClass("One");
//     $(".Site").css("display", "none");
//     $(".Six").css("display", "none");


//     $("#About").fadeOut("slow", function() {
//         $(".hidden-work, .work").fadeIn("slow");
//         $("#work-button").addClass("Two");
//         $("#work-button").removeClass("One");
//     });

// });

// $("#button-holder").on("click", ".Two", function(){
//         $(".hidden-work").fadeOut("slow", function() {
//             $("#About").fadeIn("slow");
//             $("#work-button").text("Work Sample");
//             $("#work-button").addClass("One");
//             $("#work-button").removeClass("Two");
//         })
     

// })

// navigation and contact links roll over effect. 

$(".nav-icon, .contact-link").hover(function() {
    console.log($(this).data('hover'))
    $(this).attr("src", $(this).data('hover'))
}, function () {
    $(this).attr("src", $(this).data('off'))
})


// modal operation 

var modal = $(".modal")
var closeButtons = $(".close-modal")
// set  modal close behaviour
$(".close-modal").on('click', function() {
    console.log('clicked')
  $('.modal').removeClass('modal-open')
  $('#nav-bar').show();
});
// set close modal behaviour
// for (i = 0; i < closeButtons.length; ++i) {
//   closeButtons[i].on('click', function() {
//     $('modal-open').toggle();
// 	});
// }
// close modal if clicked outside content area
$('.modal-inner').on('click', function() {
    $('.modal').removeClass('modal-open')
    $('#nav-bar').show();
});
// prevent modal inner from closing parent when clicked
$('.modal-content').on('click', function(e) {
	e.stopPropagation();
});


$(".work-card").on("click", function() {
        title = $(this).find(".title").text()
        $(".modal-content-inner .title").text(title);
        source = $(this).find("img").data('attr')
        $(".modal-content-inner #modal-image").attr('src', source);
        site = $(this).find('.live').attr('href')
        console.log(site)
        if (!site) {

            $('.modal-content-inner #site-text').text("NOT CURRENTLY HOSTED - CLI APP")

        } else {
            $('.modal-content-inner #site-text').text("Visit Live Site")
            $('.modal-content-inner #modal-live-site').attr('href', site)

        }



        // $(this).css({"width": "600px", "margin": "3% auto", "opacity": "1", "display": "block"});
        // $(this).parent().removeClass("six");
        // $(this).parent().addClass("twelve current");
        // $(this).addClass("current-img")
        // $(this).attr("src", $(this).attr("data-attr"));
        // $(this).removeClass("work");
        // $(this).css("opacity", "1");
        // $(".work").hide();
        // $(".One").addClass("Three");
        // $(".Three").removeClass("One")
        // $(".Three").text("Back to Work");
        // $(".Site").css("display", "inline");
        // $(".Six").css("display", "inline")
        // $(".Site").attr("href", $(this).data("site"));
        $(".modal").addClass('modal-open')
        $("#nav-bar").hide();
    });

    // $(".work").mouseleave(function() {
    //     $(".work").show();
    //     $(".current-img").attr("src", $(".current-img").data("main"));
    //     $(".current-img").css({"width": "300px", "margin": "3% auto", "opacity":"0.6", "display":"block"});
    //     $(".current-img").addClass("work");
    //     $(".current-img").parent().removeClass("twelve current");
    //     $(".current-img").parent().addClass("six");
    //     $(".u-max-full-width").removeClass("current-img");
    //     $(".work").children().attr("class", "twelve columns")
    //     $(".Site").css("display", "none");
    //     $(".Six").css("display", "none");

    // })

    // $("#button-holder").on("click", "#contact-button", function() {
    //     $(".container, .hidden-work, #button-holder").fadeOut("slow" , function() {
    //     $("#contact").fadeIn("fast");
    //     })
    // })

    // $("#button-holder2").on("click", ".Four", function() {

    //     $("#contact, button-holder2").fadeOut("slow", function() {
    //         $(".container, #About, #button-holder").fadeIn("slow");
    //         $("#work-button").text("Work Sample")
    //         $("#work-button").removeClass("Two");
    //         $("#work-button").addClass("One");
    //     })
    
    // });

    // $("#button-holder2").on("click", ".Five", function() {
    //     $(".current-img").attr("src", $(".current-img").data("main"));
    //     $(".current-img").css({"width": "300px", "margin": "3%", "opacity":"0.6", "display":"inline"});
    //     $(".current-img").addClass("work");
    //     $(".current-img").parent().removeClass("twelve current");
    //     $(".current-img").parent().addClass("six");
    //     $(".u-max-full-width").removeClass("current-img");
    //     $(".work").children().attr("class", "twelve columns")
    //     $("#work-button").removeClass("One");
    //     $(".Site").css("display", "none");
    //     $(".Six").css("display", "none");
    //     $("#contact, button-holder2, #About").fadeOut("slow", function() {
    //         $(".container, .hidden-work, #button-holder, .work").fadeIn("slow");
    //         $("#work-button").text("About")
    //         $("#work-button").addClass("Two");

    //     })
    // })